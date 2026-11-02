import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="border-y border-line bg-surface">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <SectionHeading label="Learning" title="Education" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <h3 className="font-serif text-xl font-bold">{e.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{e.school}</p>
              <p className="mt-1 text-sm text-muted">{e.period}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
