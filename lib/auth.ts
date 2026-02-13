import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { piiPrisma } from "./prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(piiPrisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

export async function getAuthenticatedUserId(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  return session?.user?.id ?? null;
}

export type ActionState = {
  error: string;
  fieldErrors?: Record<string, string>;
} | null;

export function validationError(
  issues: { path: PropertyKey[]; message: string }[],
): ActionState {
  const fieldErrors: Record<string, string> = {};
  for (const issue of issues) {
    const field = issue.path[0]?.toString();
    if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
  }
  return {
    error: issues[0]?.message ?? "Validation failed",
    ...(Object.keys(fieldErrors).length > 0 && { fieldErrors }),
  };
}

export function withAuth(
  handler: (userId: string, formData: FormData) => Promise<ActionState>,
): (prevState: ActionState, formData: FormData) => Promise<ActionState> {
  return async (_prevState, formData) => {
    const userId = await getAuthenticatedUserId();
    if (!userId) return { error: "Not authenticated" };
    return handler(userId, formData);
  };
}
