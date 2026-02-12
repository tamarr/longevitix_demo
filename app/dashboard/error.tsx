"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 dark:bg-black">
      <div className="max-w-md space-y-4 text-center">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-zinc-50">
          Something went wrong
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400">
          {error.message || "An unexpected error occurred while loading your dashboard."}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
