const steps = [
  {
    n: "01",
    title: "Read the task",
    body: "Study the prompt and the rubric first, so I know exactly what a good answer has to do.",
  },
  {
    n: "02",
    title: "Verify the facts",
    body: "Check claims and reasoning against reliable references, looking for hallucinations, logic gaps, and unsafe content.",
  },
  {
    n: "03",
    title: "Compare and score",
    body: "Score each criterion separately, and compare responses side by side when ranking models.",
  },
  {
    n: "04",
    title: "Write the rationale",
    body: "Explain the judgment with evidence so another reviewer could reach the same score, and flag unclear instructions.",
  },
];

export default function EvaluationProcess() {
  return (
    <div>
      <h3 className="mb-2 font-serif text-xl font-bold">How I evaluate a response</h3>
      <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted">
        AI evaluation means checking whether a model&apos;s answers are accurate, safe, and follow
        the instructions given, then explaining each judgment clearly. This is my process.
      </p>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-2xl border border-line bg-surface p-5">
            <p className="font-serif text-3xl font-bold text-accent">{s.n}</p>
            <p className="mt-2 font-semibold">{s.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
