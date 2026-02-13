"use client";

import { useActionState } from "react";
import { submitBaseline } from "./actions";

export default function BaselineForm() {
  const [state, formAction, isPending] = useActionState(submitBaseline, null);

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && !state.fieldErrors && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {state.error}
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
        {state?.fieldErrors?.birthdate && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.birthdate}</p>
        )}
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-700 dark:text-zinc-300">Biological Sex</p>
        <div className="flex gap-3">
          <label className="flex-1">
            <input type="radio" name="sex" value="male" required className="peer sr-only" />
            <span className="block cursor-pointer rounded-lg border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-slate-700 transition-colors peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-700 dark:border-zinc-700 dark:text-zinc-300 dark:peer-checked:border-teal-400 dark:peer-checked:bg-teal-950 dark:peer-checked:text-teal-300">
              Male
            </span>
          </label>
          <label className="flex-1">
            <input type="radio" name="sex" value="female" required className="peer sr-only" />
            <span className="block cursor-pointer rounded-lg border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-slate-700 transition-colors peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-700 dark:border-zinc-700 dark:text-zinc-300 dark:peer-checked:border-teal-400 dark:peer-checked:bg-teal-950 dark:peer-checked:text-teal-300">
              Female
            </span>
          </label>
        </div>
        {state?.fieldErrors?.sex && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.sex}</p>
        )}
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
          {state?.fieldErrors?.height && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.height}</p>
          )}
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
          {state?.fieldErrors?.weight && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.fieldErrors.weight}</p>
          )}
        </div>
      </div>

      <div className="flex gap-6">
        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
          <span className="relative inline-flex items-center">
            <input
              type="checkbox"
              name="smoker"
              className="peer sr-only"
            />
            <span className="h-6 w-11 rounded-full bg-zinc-300 transition-colors peer-checked:bg-teal-600 peer-focus-visible:ring-2 peer-focus-visible:ring-teal-500 peer-focus-visible:ring-offset-2 dark:bg-zinc-600 dark:peer-checked:bg-teal-500" />
            <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
          </span>
          Current smoker
        </label>
        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
          <span className="relative inline-flex items-center">
            <input
              type="checkbox"
              name="diabetes"
              className="peer sr-only"
            />
            <span className="h-6 w-11 rounded-full bg-zinc-300 transition-colors peer-checked:bg-teal-600 peer-focus-visible:ring-2 peer-focus-visible:ring-teal-500 peer-focus-visible:ring-offset-2 dark:bg-zinc-600 dark:peer-checked:bg-teal-500" />
            <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
          </span>
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
