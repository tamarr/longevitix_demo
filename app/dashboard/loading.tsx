export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-teal-50 dark:bg-black">
      <header className="border-b border-teal-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="h-6 w-36 animate-pulse rounded bg-teal-200 dark:bg-zinc-700" />
          <div className="h-8 w-20 animate-pulse rounded bg-teal-100 dark:bg-zinc-700" />
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8">
          <div className="mb-4 h-6 w-32 animate-pulse rounded bg-teal-200 dark:bg-zinc-700" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-20 animate-pulse rounded-xl border border-teal-100 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 h-6 w-48 animate-pulse rounded bg-teal-200 dark:bg-zinc-700" />
          <div className="grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-xl border border-teal-100 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
