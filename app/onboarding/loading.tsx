export default function OnboardingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 dark:bg-black">
      <div className="w-full max-w-lg space-y-6 rounded-2xl border border-teal-100 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div>
          <div className="h-7 w-48 animate-pulse rounded bg-teal-200 dark:bg-zinc-700" />
          <div className="mt-2 h-4 w-72 animate-pulse rounded bg-teal-100 dark:bg-zinc-700" />
        </div>
        <div className="space-y-5">
          <div className="h-10 animate-pulse rounded-lg bg-teal-100 dark:bg-zinc-800" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-10 animate-pulse rounded-lg bg-teal-100 dark:bg-zinc-800" />
            <div className="h-10 animate-pulse rounded-lg bg-teal-100 dark:bg-zinc-800" />
          </div>
          <div className="h-5 w-40 animate-pulse rounded bg-teal-100 dark:bg-zinc-800" />
          <div className="h-10 animate-pulse rounded-lg bg-teal-200 dark:bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}
