import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { award, certifications, education, languages } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="border-y border-line bg-surface">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <SectionHeading label="Learning" title="Education, certifications and awards" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.title} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl font-bold">{e.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{e.school}</p>
              <p className="mt-1 text-sm text-muted">{e.period}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-line bg-paper p-6">
            <h3 className="font-serif text-xl font-bold">Certifications</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl font-bold">{award.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{award.body}</p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl font-bold">Languages</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {languages.map((l) => (
                  <li key={l.name}>
                    <span className="font-semibold text-ink">{l.name}</span>: {l.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
