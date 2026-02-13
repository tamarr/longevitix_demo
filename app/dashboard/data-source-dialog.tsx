"use client";

import { useRef } from "react";

interface DataSourceDialogProps {
  labsData: Record<string, number> | null;
  lifestyleData: Record<string, number> | null;
  labsDate: string | null;
  lifestyleDate: string | null;
}

const LABS_LABELS: Record<string, string> = {
  sbp: "Blood Pressure",
  ldl: "LDL Cholesterol",
  hdl: "HDL Cholesterol",
  glucose: "Fasting Glucose",
  triglycerides: "Triglycerides",
};

const LABS_UNITS: Record<string, string> = {
  sbp: "mmHg",
  ldl: "mg/dL",
  hdl: "mg/dL",
  glucose: "mg/dL",
  triglycerides: "mg/dL",
};

const LIFESTYLE_LABELS: Record<string, string> = {
  restingHr: "Resting Heart Rate",
  vo2max: "VO2 Max",
  activeMinutes: "Active Minutes/Week",
  sleepHours: "Sleep Hours",
  spo2: "SpO2",
};

const LIFESTYLE_UNITS: Record<string, string> = {
  restingHr: "bpm",
  vo2max: "mL/kg/min",
  activeMinutes: "min",
  sleepHours: "hrs",
  spo2: "%",
};

function DataList({
  data,
  labels,
  units,
}: {
  data: Record<string, number>;
  labels: Record<string, string>;
  units: Record<string, string>;
}) {
  const entries = Object.entries(data).filter(
    ([key]) => labels[key] !== undefined,
  );
  if (entries.length === 0) return <p className="text-sm text-slate-500 dark:text-zinc-500">No data recorded.</p>;
  return (
    <dl className="space-y-1">
      {entries.map(([key, value]) => (
        <div key={key} className="flex justify-between text-sm">
          <dt className="text-slate-600 dark:text-zinc-400">{labels[key]}</dt>
          <dd className="font-medium text-slate-900 dark:text-zinc-100">
            {value} {units[key]}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function DataSourceDialog({
  labsData,
  lifestyleData,
  labsDate,
  lifestyleDate,
}: DataSourceDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const hasLabs = labsData && Object.keys(labsData).length > 0;
  const hasLifestyle = lifestyleData && Object.keys(lifestyleData).length > 0;

  if (!hasLabs && !hasLifestyle) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="text-xs underline text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
      >
        Based on:{" "}
        {[
          hasLabs && `Lab Results${labsDate ? ` (${labsDate})` : ""}`,
          hasLifestyle && `Lifestyle${lifestyleDate ? ` (${lifestyleDate})` : ""}`,
        ]
          .filter(Boolean)
          .join(" + ")}
      </button>

      <dialog
        ref={dialogRef}
        className="w-full max-w-md m-auto rounded-xl border border-teal-100 bg-white p-0 shadow-lg backdrop:bg-black/40 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-50">
              Data Sources
            </h3>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-lg p-1 text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>

          <div className="space-y-5">
            {hasLabs && (
              <div>
                <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-zinc-300">
                  Lab Results{labsDate ? ` — ${labsDate}` : ""}
                </h4>
                <DataList data={labsData} labels={LABS_LABELS} units={LABS_UNITS} />
              </div>
            )}

            {hasLifestyle && (
              <div>
                <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-zinc-300">
                  Lifestyle Data{lifestyleDate ? ` — ${lifestyleDate}` : ""}
                </h4>
                <DataList data={lifestyleData} labels={LIFESTYLE_LABELS} units={LIFESTYLE_UNITS} />
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="mt-5 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
