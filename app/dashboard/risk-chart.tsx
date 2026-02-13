"use client";

import { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { RISK_TYPES, type ConditionKey } from "@/lib/ui";

export interface AssessmentPoint {
  date: string;
  mi: number;
  stroke: number;
  hf: number;
}

const CONDITION_KEYS: ConditionKey[] = ["mi", "stroke", "hf"];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ dataKey: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm shadow-md dark:border-zinc-700 dark:bg-zinc-900">
      <p className="mb-1 font-medium text-slate-700 dark:text-zinc-200">
        {label}
      </p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ color: entry.color }}>
          {RISK_TYPES[entry.dataKey as ConditionKey]?.label ?? entry.dataKey}: {entry.value}%
        </p>
      ))}
    </div>
  );
}

export default function RiskChart({
  assessments,
}: {
  assessments: AssessmentPoint[];
}) {
  // Compute a tight Y domain with padding so small changes are visible
  const [yMin, yMax] = useMemo(() => {
    const allValues = assessments.flatMap((a) => [a.mi, a.stroke, a.hf]);
    const min = Math.min(...allValues);
    const max = Math.max(...allValues);
    const padding = Math.max((max - min) * 0.25, 2);
    return [Math.max(0, Math.floor(min - padding)), Math.ceil(max + padding)];
  }, [assessments]);

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={assessments}
          margin={{ top: 8, right: 16, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-teal-200 dark:stroke-zinc-700"
          />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            className="fill-slate-500 dark:fill-zinc-400"
          />
          <YAxis
            domain={[yMin, yMax]}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 12 }}
            className="fill-slate-500 dark:fill-zinc-400"
            width={45}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {CONDITION_KEYS.map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              name={RISK_TYPES[key].label}
              stroke={RISK_TYPES[key].chartColor}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
