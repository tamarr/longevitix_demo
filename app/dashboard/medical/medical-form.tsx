"use client";

import { useActionState } from "react";
import { submitMedical } from "./actions";

export default function MedicalForm() {
  const [error, formAction, isPending] = useActionState(submitMedical, null);

  return (
    <form action={formAction} className="space-y-5">
      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {error}
        </p>
      )}

      <div>
        <label
          htmlFor="sbp"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Systolic Blood Pressure
        </label>
        <input
          type="number"
          id="sbp"
          name="sbp"
          min="60"
          max="250"
          step="1"
          placeholder="120"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          Top number, typically 90–140 mmHg
        </p>
      </div>

      <div>
        <label
          htmlFor="ldl"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          LDL Cholesterol
        </label>
        <input
          type="number"
          id="ldl"
          name="ldl"
          min="20"
          max="400"
          step="1"
          placeholder="100"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          Bad cholesterol, typically 70–160 mg/dL
        </p>
      </div>

      <div>
        <label
          htmlFor="hdl"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          HDL Cholesterol
        </label>
        <input
          type="number"
          id="hdl"
          name="hdl"
          min="10"
          max="150"
          step="1"
          placeholder="55"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          Good cholesterol, typically 40–90 mg/dL
        </p>
      </div>

      <div>
        <label
          htmlFor="glucose"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Fasting Glucose
        </label>
        <input
          type="number"
          id="glucose"
          name="glucose"
          min="30"
          max="600"
          step="1"
          placeholder="95"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          Measured after 8+ hours fasting, typically 70–110 mg/dL
        </p>
      </div>

      <div>
        <label
          htmlFor="triglycerides"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Triglycerides
        </label>
        <input
          type="number"
          id="triglycerides"
          name="triglycerides"
          min="20"
          max="2000"
          step="1"
          placeholder="120"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">
          Part of lipid panel, typically 50–150 mg/dL
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
