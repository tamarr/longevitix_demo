"use client";

import { useActionState } from "react";
import { submitBaseline } from "./actions";

export default function BaselineForm() {
  const [error, formAction, isPending] = useActionState(submitBaseline, null);

  return (
    <form action={formAction} className="space-y-5">
      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {error}
        </p>
      )}

      <div>
        <label
          htmlFor="birthdate"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="height"
            className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
          >
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            min="100"
            max="250"
            step="0.1"
            required
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>
        <div>
          <label
            htmlFor="weight"
            className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
          >
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min="30"
            max="300"
            step="0.1"
            required
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-zinc-300">
          <input
            type="checkbox"
            name="smoker"
            className="h-4 w-4 rounded border-zinc-300 accent-teal-600"
          />
          Current smoker
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-zinc-300">
          <input
            type="checkbox"
            name="diabetes"
            className="h-4 w-4 rounded border-zinc-300 accent-teal-600"
          />
          Diabetes
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 disabled:opacity-50"
      >
        {isPending ? "Calculating..." : "Generate Risk Assessment"}
      </button>
    </form>
  );
}
