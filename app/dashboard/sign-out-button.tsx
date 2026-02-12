"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-lg border border-teal-200 px-3 py-1.5 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-100 dark:border-zinc-700 dark:text-teal-400 dark:hover:bg-zinc-800"
    >
      Sign out
    </button>
  );
}
