# My Heart Tracker

Cardiovascular risk prediction demo. Collects baseline health data via Google OAuth-authenticated onboarding, then allows ongoing lab results and wearable/lifestyle data entry. Computes a Framingham-inspired 10-year risk score for heart attack, stroke, and heart failure, and displays results with trend charts on a dashboard.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Actions, React 19)
- **Auth:** NextAuth v4 with Google OAuth + Prisma Adapter
- **Database:** PostgreSQL (two-database architecture for PII/PHI separation)
  - `user_demo` — PII (users, accounts, sessions)
  - `health_demo` — PHI (baselines, assessments, lifestyle, labs)
- **ORM:** Prisma with separate schemas and generated clients
- **Validation:** Zod
- **Charts:** Recharts
- **Styling:** Tailwind CSS v4
- **Testing:** Vitest (runs as part of production build)

## Project Structure

```
lib/
  auth.ts          # NextAuth config + withAuth server action wrapper
  prisma.ts        # Dual Prisma client singletons (piiPrisma, healthPrisma)
  risk.ts          # Risk calculator: computeRisk, buildRiskInput, riskExplanation
  health.ts        # calculateAge, calculateBmi utilities
  ui.ts            # Shared UI helpers (score color, label)
  __tests__/
    risk.test.ts   # Risk engine + buildRiskInput tests
    health.test.ts # Age/BMI calculation tests
prisma/
  schema.user.prisma   # PII schema (User, Account, Session, VerificationToken)
  schema.health.prisma # PHI schema (Baseline, Lifestyle, Medical, Assessment)
  user.config.ts       # Prisma config for user DB
  health.config.ts     # Prisma config for health DB
app/
  page.tsx             # Landing page with Google sign-in
  layout.tsx           # Root layout with SessionProvider
  error.tsx            # Global error boundary
  providers.tsx        # Client-side SessionProvider wrapper
  sign-in-button.tsx   # Google sign-in button (client component)
  onboarding/
    page.tsx           # Auth check + redirect if baseline exists
    baseline-form.tsx  # Client form (birthdate, height, weight, smoker, diabetes)
    actions.ts         # Server action: validate, save, compute risk, redirect
  dashboard/
    page.tsx           # Profile summary, 10-year risk cards, trend chart, disclaimer
    risk-card.tsx      # Colored risk card with progress bar
    risk-chart.tsx     # Recharts line chart for assessment history
    data-source-dialog.tsx  # Popup showing labs/lifestyle data behind an assessment
    sign-out-button.tsx
    labs/
      page.tsx         # Lab results entry page
      labs-form.tsx    # Form: SBP, LDL, HDL, glucose, triglycerides
      actions.ts       # Server action: validate, save, recompute risk
      validation.ts    # Zod schema for lab fields
      __tests__/validation.test.ts
    lifestyle/
      page.tsx         # Lifestyle/wearable data entry page
      lifestyle-form.tsx  # Form: resting HR, VO2max, active minutes, sleep, SpO2
      actions.ts       # Server action: validate, save, recompute risk
      validation.ts    # Zod schema for lifestyle fields
      __tests__/validation.test.ts
  api/auth/[...nextauth]/route.ts
middleware.ts          # Protects /dashboard and /onboarding routes
proxy.ts               # Auth-check wrapper re-exported by middleware
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
npx prisma db push --config prisma/user.config.ts
npx prisma db push --config prisma/health.config.ts
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## User Flow

1. **Landing page** (`/`) — Google sign-in; authenticated users auto-redirect to dashboard
2. **Onboarding** (`/onboarding`) — Enter baseline health data (birthdate, height, weight, smoker, diabetes); initial risk assessment computed
3. **Dashboard** (`/dashboard`) — Profile summary (age, BMI, risk factors), 10-year risk scores for heart attack, stroke, and heart failure, trend chart, and data source details
4. **Lab Results** (`/dashboard/labs`) — Enter clinical lab values (SBP, LDL, HDL, glucose, triglycerides); triggers risk reassessment
5. **Lifestyle Data** (`/dashboard/lifestyle`) — Enter wearable/lifestyle metrics (resting HR, VO2max, active minutes, sleep hours, SpO2); triggers risk reassessment

## Risk Algorithm

Framingham-inspired model computing 10-year risk percentages for heart attack, stroke, and heart failure.

**Base factors:**
- Age bracket base risk (30s / 40s / 50s / 60s / 70+)
- BMI multiplier: normal (1.0x), overweight (1.3x), obese (1.6x)
- Smoking relative risk: heart attack 2.2x, stroke 1.8x, HF 1.6x
- Diabetes relative risk: heart attack 1.8x, stroke 2.0x, HF 2.4x

**Lab multipliers** (when data available):
- Systolic blood pressure, LDL/HDL cholesterol, fasting glucose, triglycerides

**Lifestyle/wearable multipliers** (when data available):
- Resting heart rate, VO2max, weekly active minutes
- Sleep hours, blood oxygen saturation (SpO2)

Each multiplier applies with condition-specific dampening — e.g., SpO2 has full effect on heart failure but dampened effect on heart attack/stroke. Results are clamped to 0-100%.

Risk input construction is centralized in `buildRiskInput()`, so adding a new data field only requires updating the risk engine and the relevant form/validation — callers are untouched.

## Architecture Decisions

- **PII/PHI separation:** Two databases isolate personally identifiable information from protected health information, following healthcare data handling best practices.
- **Centralized risk input (`buildRiskInput`):** Single function owns field extraction from opaque JSON blobs, preventing duplication across server actions.
- **Server Actions with `withAuth`:** All data-mutating operations are server actions wrapped in an auth-check helper that injects the authenticated user ID.
- **JSON data columns:** Lab and lifestyle records store measurements as JSON, allowing schema flexibility without migrations when adding new fields.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Run tests + production build |
| `npm start` | Push DB schemas + start production server |
| `npm test` | Run Vitest test suite |
| `npm run lint` | Run ESLint |
