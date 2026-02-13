"use client";

import { useActionState } from "react";
import { submitLifestyle } from "./actions";

export default function LifestyleForm() {
  const [error, formAction, isPending] = useActionState(submitLifestyle, null);

  return (
    <form action={formAction} className="space-y-5">
      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {error}
        </p>
      )}

      <div>
        <label
          htmlFor="restingHr"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Resting Heart Rate
        </label>
        <input
          type="number"
          id="restingHr"
          name="restingHr"
          min="30"
          max="220"
          step="1"
          placeholder="68"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          Measured at rest, typically 60–100 bpm
        </p>
      </div>

      <div>
        <label
          htmlFor="vo2max"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          VO2 Max
        </label>
        <input
          type="number"
          id="vo2max"
          name="vo2max"
          min="10"
          max="90"
          step="0.1"
          placeholder="35"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          From fitness test or wearable, typically 25–45 mL/kg/min
        </p>
      </div>

      <div>
        <label
          htmlFor="activeMinutes"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Active Minutes / Week
        </label>
        <input
          type="number"
          id="activeMinutes"
          name="activeMinutes"
          min="0"
          max="2520"
          step="1"
          placeholder="150"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          WHO recommends at least 150 min/week
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 disabled:opacity-50"
      >
        {isPending ? "Calculating..." : "Update Risk Assessment"}
      </button>
    </form>
  );
}
