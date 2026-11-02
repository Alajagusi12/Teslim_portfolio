import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="flex flex-col gap-10">
        <SectionHeading label="Career" title="Professional experience" />
        {experience.map((group) => (
          <div key={group.group} className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
              {group.group}
            </h3>
            {group.jobs.map((job) => (
              <article
                key={`${job.role}-${job.company}`}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-serif text-xl font-bold">{job.role}</h4>
                  <p className="text-sm font-medium text-muted">{job.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
