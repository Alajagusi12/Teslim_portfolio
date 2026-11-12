import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { achievements, strengths, summary } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <SectionHeading label="About" title="About me" />
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{summary}</p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl font-bold">Key achievements</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((a) => (
              <div key={a.label} className="rounded-2xl border border-line bg-surface p-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                  {a.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl font-bold">Professional strengths</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-semibold">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
