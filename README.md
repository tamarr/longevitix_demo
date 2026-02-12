# My Heart Tracker

Cardiovascular risk prediction demo. Collects baseline health data via Google OAuth-authenticated onboarding, computes a Framingham-inspired 10-year risk score for myocardial infarction, stroke, and heart failure, and displays results on a dashboard.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Actions)
- **Auth:** NextAuth v4 with Google OAuth + Prisma Adapter
- **Database:** PostgreSQL (two-database architecture)
  - `user_demo` — PII (users, accounts, sessions)
  - `health_demo` — PHI (baselines, assessments, lifestyle, medical)
- **ORM:** Prisma with separate schemas and generated clients
- **Styling:** Tailwind CSS v4

## Project Structure

```
lib/
  auth.ts          # NextAuth configuration
  prisma.ts        # Dual Prisma client singletons (piiPrisma, healthPrisma)
  risk.ts          # Framingham-inspired risk calculator
prisma/
  schema.user.prisma   # PII schema (User, Account, Session, VerificationToken)
  schema.health.prisma # PHI schema (Baseline, Lifestyle, Medical, Assessment)
  user.config.ts       # Prisma config for user DB
  health.config.ts     # Prisma config for health DB
app/
  page.tsx             # Landing page with Google sign-in
  layout.tsx           # Root layout with SessionProvider
  providers.tsx        # Client-side SessionProvider wrapper
  sign-in-button.tsx   # Google sign-in button (client component)
  onboarding/
    page.tsx           # Auth check + redirect if baseline exists
    baseline-form.tsx  # Client form (birthdate, height, weight, smoker, diabetes)
    actions.ts         # Server action: validate, save, compute risk, redirect
  dashboard/
    page.tsx           # Profile stats + 3 risk score cards
    risk-card.tsx      # Colored risk card with progress bar
    sign-out-button.tsx
  api/auth/[...nextauth]/route.ts
middleware.ts          # Protects /dashboard and /onboarding routes
types/next-auth.d.ts   # Session type augmentation
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create PostgreSQL databases

Make sure PostgreSQL is installed and running, then enter `psql`:

```sql
CREATE DATABASE user_demo;
CREATE DATABASE health_demo;

-- PII DB user
CREATE USER pii_user WITH PASSWORD 'pii_pass';
GRANT ALL PRIVILEGES ON DATABASE user_demo TO pii_user;
ALTER USER pii_user CREATEDB;

-- Health DB user
CREATE USER health_user WITH PASSWORD 'health_pass';
GRANT ALL PRIVILEGES ON DATABASE health_demo TO health_user;
ALTER USER health_user CREATEDB;
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```
USER_DATABASE_URL="postgresql://pii_user:pii_pass@localhost:5432/user_demo"
HEALTH_DATABASE_URL="postgresql://health_user:health_pass@localhost:5432/health_demo"
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Push schemas and generate Prisma clients

```bash
npx prisma db push --schema prisma/schema.user.prisma
npx prisma db push --schema prisma/schema.health.prisma
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## User Flow

1. **Landing page** (`/`) — "My Heart Tracker" with description and Google sign-in; authenticated users auto-redirect to dashboard
2. **Onboarding** (`/onboarding`) — Enter baseline health data (birthdate, height, weight, smoker, diabetes)
3. **Dashboard** (`/dashboard`) — View profile summary (age, BMI, risk factors) and 10-year risk scores for MI, Stroke, and Heart Failure

## Risk Algorithm

Framingham-inspired model computing 10-year risk percentages:

- **Base risk** by age bracket (30s/40s/50s/60s/70+)
- **BMI multiplier:** normal (1.0x), overweight (1.3x), obese (1.6x)
- **Smoking relative risk:** MI 2.2x, Stroke 1.8x, HF 1.6x
- **Diabetes relative risk:** MI 1.8x, Stroke 2.0x, HF 2.4x
- Results clamped to 0–100%

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
