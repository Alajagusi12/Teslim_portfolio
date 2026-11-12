"use client";

import { useState } from "react";

type TestCase = {
  id: string;
  feature: string;
  steps: string;
  expected: string;
  actual: string;
  status: string;
};

const filters = ["All", "Pass", "Fail"] as const;

export default function TestTable({ testCases }: { testCases: TestCase[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const passed = testCases.filter((t) => t.status === "Pass").length;
  const failed = testCases.length - passed;
  const rows = filter === "All" ? testCases : testCases.filter((t) => t.status === filter);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`inline-flex min-h-[44px] items-center rounded-lg border px-4 text-sm font-semibold ${
              filter === f
                ? "border-accent bg-accent text-on-accent"
                : "border-line bg-paper text-ink hover:border-accent"
            }`}
          >
            {f}
          </button>
        ))}
        <p className="text-sm text-muted">
          {passed} passed, {failed} failed
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="bg-paper text-xs uppercase tracking-[0.08em] text-muted">
            <tr>
              {["ID", "Feature", "Steps", "Expected result", "Actual result", "Status"].map((h) => (
                <th key={h} scope="col" className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((t) => (
              <tr key={t.id} className="border-t border-line align-top">
                <td className="px-4 py-3 font-semibold">{t.id}</td>
                <td className="px-4 py-3">{t.feature}</td>
                <td className="px-4 py-3 text-muted">{t.steps}</td>
                <td className="px-4 py-3 text-muted">{t.expected}</td>
                <td className="px-4 py-3 text-muted">{t.actual}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      t.status === "Pass"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
