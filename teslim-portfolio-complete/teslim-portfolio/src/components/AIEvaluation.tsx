"use client";

import { useState } from "react";
import { Check, X, Bot, Sparkles, ExternalLink, Activity } from "lucide-react";
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
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  
  const current = criteria.find((c) => c.id === active) ?? criteria[0];

  return (
    <section id="ai-evaluation" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-8">
        <SectionHeading
          label="Demonstration"
          title="AI evaluation showcase"
          intro="How I review AI responses manually, and how I automated it with EvalOps."
        />

        {/* Toggle Buttons */}
        <div className="flex gap-2 p-1 bg-surface border border-line rounded-lg w-fit">
          <button
            onClick={() => setShowLiveDemo(false)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${!showLiveDemo ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"}`}
          >
            Manual Review
          </button>
          <button
            onClick={() => setShowLiveDemo(true)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-2 ${showLiveDemo ? "bg-accent text-white shadow-sm" : "text-muted hover:text-ink"}`}
          >
            <Sparkles size={16} /> Live EvalOps Demo
          </button>
        </div>

        {/* Manual Review Section */}
        {!showLiveDemo && (
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Prompt</p>
                <p className="mt-2 text-base">What is the capital of Australia?</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-amber-700">AI response (contains an error)</p>
                <p className="mt-2 text-base leading-relaxed">
                  The capital of Australia is <mark className="rounded bg-amber-100 px-1 text-ink">Sydney</mark>, its largest and most famous city.
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
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-mint">Improved response</p>
                  <p className="mt-2 text-base leading-relaxed">
                    The capital of Australia is Canberra. Sydney is the largest city, but it is not the capital.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Evaluation criteria</p>
              <div className="flex flex-wrap gap-2">
                {criteria.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={active === c.id}
                    onClick={() => setActive(c.id)}
                    className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-3 text-sm font-semibold ${
                      active === c.id ? "border-accent bg-accent text-white" : "border-line bg-paper text-ink hover:border-accent"
                    }`}
                  >
                    {c.pass ? <Check size={14} aria-hidden="true" /> : <X size={14} aria-hidden="true" />}
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="rounded-xl bg-paper p-4">
                <p className="text-sm font-semibold">{current.label}: {current.score}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{current.analysis}</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Final assessment: 2/5</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  The response is relevant and well formatted, but a factual question depends on the core fact being right. Because the main claim is wrong, the response should not be accepted without correction.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Live EvalOps Demo Section */}
        {showLiveDemo && (
          <div className="rounded-2xl border border-line bg-[#09090B] p-6 text-[#FAFAFA] shadow-2xl overflow-hidden relative">
            {/* Fake Window Header */}
            <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Activity className="text-[#10B981] h-5 w-5" />
                <span className="font-semibold">EvalOps Dashboard</span>
              </div>
              <a 
                href="https://evalops-eight.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-xs bg-[#18181B] border border-[#27272A] hover:border-[#10B981] px-3 py-1.5 rounded transition-colors"
              >
                Visit Live App <ExternalLink size={12} />
              </a>
            </div>

            {/* Fake Dashboard UI */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-[#27272A] bg-[#18181B] rounded p-4">
                <div className="text-xs font-mono text-[#A1A1AA] mb-2 uppercase">Agent Scoring</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span>Factuality</span><span className="text-[#EF4444] font-mono">1/5</span></div>
                    <div className="h-1.5 w-full bg-[#27272A] rounded-full"><div className="h-full bg-[#EF4444] w-1/5 rounded-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span>Reasoning</span><span className="text-[#10B981] font-mono">5/5</span></div>
                    <div className="h-1.5 w-full bg-[#27272A] rounded-full"><div className="h-full bg-[#10B981] w-full rounded-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span>Safety</span><span className="text-[#10B981] font-mono">5/5</span></div>
                    <div className="h-1.5 w-full bg-[#27272A] rounded-full"><div className="h-full bg-[#10B981] w-full rounded-full"></div></div>
                  </div>
                </div>
              </div>

              <div className="border border-[#27272A] bg-[#18181B] rounded p-4 flex flex-col">
                <div className="text-xs font-mono text-[#A1A1AA] mb-2 uppercase flex items-center gap-2">
                  <Bot size={14} /> AI Judge Rationale
                </div>
                <p className="text-sm text-[#A1A1AA] font-mono leading-relaxed flex-1">
                  The response incorrectly names Sydney as the capital. While the formatting is correct and safe, the factual hallucination is a critical failure.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/20 px-2 py-1 rounded w-fit">
                  Verdict: FAIL
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}