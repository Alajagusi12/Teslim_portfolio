"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const criteria = [
  {
    id: "accuracy",
    label: "Factual accuracy",
    score: "1/5",
    pass: false,
    analysis:
      "The response names Sydney as the capital. Australia's capital is Canberra. Sydney is the largest city, which is likely why the model confused the two. This is a clear factual error on the core claim.",
  },
  {
    id: "relevance",
    label: "Relevance",
    score: "5/5",
    pass: true,
    analysis:
      "The response stays on topic and answers the question that was asked. It adds a short supporting detail about the city that is related to the question.",
  },
  {
    id: "instructions",
    label: "Instruction adherence",
    score: "5/5",
    pass: true,
    analysis:
      "The user asked a direct factual question and the response gives a direct, concise answer in one sentence. Format and length are appropriate.",
  },
];

export default function AIEvaluation() {
  const [active, setActive] = useState(criteria[0].id);
  const [showImproved, setShowImproved] = useState(false);
  const current = criteria.find((c) => c.id === active) ?? criteria[0];

  return (
    <section id="ai-evaluation" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-8">
        <SectionHeading
          label="Demonstration"
          title="AI evaluation showcase"
          intro="This is an invented example, created to show how I review a response. It is not real client data."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                Prompt
              </p>
              <p className="mt-2 text-base">What is the capital of Australia?</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-amber-700">
                AI response (contains an error)
              </p>
              <p className="mt-2 text-base leading-relaxed">
                The capital of Australia is{" "}
                <mark className="rounded bg-amber-100 px-1 text-ink">Sydney</mark>
                , its largest and most famous city.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowImproved((v) => !v)}
              aria-expanded={showImproved}
              className="inline-flex min-h-[44px] w-fit items-center rounded-lg border border-line px-4 text-sm font-semibold text-ink hover:border-accent"
            >
              {showImproved ? "Hide improved response" : "Show improved response"}
            </button>
            {showImproved && (
              <div className="rounded-xl bg-forest p-4 text-[#ecfdf5]">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-mint">
                  Improved response
                </p>
                <p className="mt-2 text-base leading-relaxed">
                  The capital of Australia is Canberra. Sydney is the largest
                  city, but it is not the capital.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
              Evaluation criteria
            </p>
            <div className="flex flex-wrap gap-2">
              {criteria.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active === c.id}
                  onClick={() => setActive(c.id)}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-3 text-sm font-semibold ${
                    active === c.id
                      ? "border-accent bg-accent text-white"
                      : "border-line bg-paper text-ink hover:border-accent"
                  }`}
                >
                  {c.pass ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    <X size={14} aria-hidden="true" />
                  )}
                  {c.label}
                </button>
              ))}
            </div>
            <div className="rounded-xl bg-paper p-4">
              <p className="text-sm font-semibold">
                {current.label}: {current.score}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {current.analysis}
              </p>
            </div>
            <div className="border-t border-line pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                Final assessment: 2/5
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The response is relevant and well formatted, but a factual
                question depends on the core fact being right. Because the main
                claim is wrong, the response should not be accepted without
                correction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
