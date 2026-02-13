"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitLifestyle } from "./actions";

export default function LifestyleForm() {
  const [state, formAction, isPending] = useActionState(submitLifestyle, null);

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && !state.fieldErrors && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {state.error}
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
        {state?.fieldErrors?.restingHr ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.restingHr}</p>
        ) : (
          <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
            Measured at rest, typically 60–100 bpm
          </p>
        )}
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
        {state?.fieldErrors?.vo2max ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.vo2max}</p>
        ) : (
          <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
            From fitness test or wearable, typically 25–45 mL/kg/min
          </p>
        )}
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
        {state?.fieldErrors?.activeMinutes ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.activeMinutes}</p>
        ) : (
          <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
            WHO recommends at least 150 min/week
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="sleepHours"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Sleep Hours
        </label>
        <input
          type="number"
          id="sleepHours"
          name="sleepHours"
          min="1"
          max="16"
          step="0.5"
          placeholder="7.5"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        {state?.fieldErrors?.sleepHours ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.sleepHours}</p>
        ) : (
          <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
            Average per night, ideally 7–9 hours
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <Link
          href="/dashboard"
          className="flex-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          Back
        </Link>
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 disabled:opacity-50"
        >
          {isPending ? "Calculating..." : "Update Risk Assessment"}
        </button>
      </div>
    </form>
  );
}
