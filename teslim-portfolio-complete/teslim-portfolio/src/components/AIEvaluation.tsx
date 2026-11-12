"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Segment = { text: string; flag?: boolean };
type Criterion = {
  id: string;
  label: string;
  score: string;
  pass: boolean;
  analysis: string;
};
type Scenario = {
  id: string;
  label: string;
  prompt: string;
  response: Segment[];
  criteria: Criterion[];
  finalScore: string;
  finalText: string;
  improved: string;
};

const scenarios: Scenario[] = [
  {
    id: "capital",
    label: "Wrong fact",
    prompt: "What is the capital of Australia?",
    response: [
      { text: "The capital of Australia is " },
      { text: "Sydney", flag: true },
      { text: ", its largest and most famous city." },
    ],
    criteria: [
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
          "The response stays on topic and answers the question that was asked, with one short supporting detail.",
      },
      {
        id: "instructions",
        label: "Instruction adherence",
        score: "5/5",
        pass: true,
        analysis:
          "The user asked a direct factual question and the response gives a direct, concise answer.",
      },
    ],
    finalScore: "2/5",
    finalText:
      "Relevant and well formatted, but a factual question depends on the core fact being right. Because the main claim is wrong, the response should not be accepted without correction.",
    improved:
      "The capital of Australia is Canberra. Sydney is the largest city, but it is not the capital.",
  },
  {
    id: "author",
    label: "Half right",
    prompt: "Who wrote the novel Things Fall Apart, and when was it first published?",
    response: [
      { text: "Things Fall Apart was written by " },
      { text: "Wole Soyinka", flag: true },
      { text: " and first published in 1958." },
    ],
    criteria: [
      {
        id: "accuracy",
        label: "Factual accuracy",
        score: "2/5",
        pass: false,
        analysis:
          "The publication year (1958) is correct, but the author is wrong. The novel was written by Chinua Achebe. Wole Soyinka is a different Nigerian author, so this looks like a plausible-sounding name substitution.",
      },
      {
        id: "relevance",
        label: "Relevance",
        score: "5/5",
        pass: true,
        analysis: "Everything in the response relates directly to the question.",
      },
      {
        id: "instructions",
        label: "Instruction adherence",
        score: "5/5",
        pass: true,
        analysis: "Both parts of the question were answered: the author and the year.",
      },
    ],
    finalScore: "2/5",
    finalText:
      "Half of the answer is right, but the author is the key fact and it is wrong. A partly correct answer with a confident error should still be marked down heavily.",
    improved: "Things Fall Apart was written by Chinua Achebe and first published in 1958.",
  },
  {
    id: "length",
    label: "Ignored instruction",
    prompt: "In one sentence, explain what photosynthesis is.",
    response: [
      {
        text: "Photosynthesis is the process by which plants turn light, water, and carbon dioxide into sugar and oxygen.",
      },
      {
        text: " It happens mainly in the chloroplasts of leaf cells. Without it, most life on Earth could not exist. Scientists have studied it for centuries.",
        flag: true,
      },
    ],
    criteria: [
      {
        id: "accuracy",
        label: "Factual accuracy",
        score: "5/5",
        pass: true,
        analysis: "Every statement in the response is correct.",
      },
      {
        id: "relevance",
        label: "Relevance",
        score: "4/5",
        pass: true,
        analysis:
          "The extra sentences are related to the topic, but they were not requested.",
      },
      {
        id: "instructions",
        label: "Instruction adherence",
        score: "1/5",
        pass: false,
        analysis:
          "The user asked for one sentence and the response gives four. This breaks an explicit length constraint.",
      },
    ],
    finalScore: "3/5",
    finalText:
      "Accurate and relevant, but it breaks a clear length instruction. Under an instruction-following rubric it should lose significant credit even though nothing in it is false.",
    improved:
      "Photosynthesis is the process by which plants turn light, water, and carbon dioxide into sugar and oxygen.",
  },
];

export default function AIEvaluation() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const [criterionId, setCriterionId] = useState(scenarios[0].criteria[0].id);
  const [showImproved, setShowImproved] = useState(false);

  const scenario = scenarios.find((s) => s.id === scenarioId) ?? scenarios[0];
  const current =
    scenario.criteria.find((c) => c.id === criterionId) ?? scenario.criteria[0];

  function pickScenario(id: string) {
    setScenarioId(id);
    setCriterionId("accuracy");
    setShowImproved(false);
  }

  return (
    <section id="ai-evaluation" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-8">
        <SectionHeading
          label="Demonstration"
          title="AI evaluation showcase"
          intro="These are invented examples, created to show how I review a response. They are not real client data."
        />

        <div className="flex flex-wrap gap-2" role="group" aria-label="Example responses">
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={scenarioId === s.id}
              onClick={() => pickScenario(s.id)}
              className={`inline-flex min-h-[44px] items-center rounded-lg border px-4 text-sm font-semibold ${
                scenarioId === s.id
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line bg-surface text-ink hover:border-accent"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Prompt</p>
              <p className="mt-2 text-base">{scenario.prompt}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-amber-700 dark:text-amber-300">
                AI response (contains an issue)
              </p>
              <p className="mt-2 text-base leading-relaxed">
                {scenario.response.map((seg, i) =>
                  seg.flag ? (
                    <mark key={i} className="rounded bg-amber-200 px-1 text-[#111827]">
                      {seg.text}
                    </mark>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
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
                <p className="mt-2 text-base leading-relaxed">{scenario.improved}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
              Evaluation criteria
            </p>
            <div className="flex flex-wrap gap-2">
              {scenario.criteria.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={current.id === c.id}
                  onClick={() => setCriterionId(c.id)}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-3 text-sm font-semibold ${
                    current.id === c.id
                      ? "border-accent bg-accent text-on-accent"
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
              <p className="mt-2 text-sm leading-relaxed text-muted">{current.analysis}</p>
            </div>
            <div className="border-t border-line pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                Final assessment: {scenario.finalScore}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{scenario.finalText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
