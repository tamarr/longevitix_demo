import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignInButton from "./sign-in-button";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/dashboard");

  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 dark:bg-black">
      <main className="flex max-w-lg flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-teal-600 dark:text-teal-400">
          My Heart Tracker
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Understand your 10-year cardiovascular risk with a simple health
          assessment powered by Framingham-inspired modeling.
        </p>
        <SignInButton />
      </main>
    </div>
  );
}
