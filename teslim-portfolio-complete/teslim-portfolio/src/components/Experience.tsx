import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/site";

export default function Experience() {
  const jobs = experience.flatMap((g) => g.jobs);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="flex flex-col gap-10">
        <SectionHeading label="Career" title="Professional experience" />
        <div className="relative flex flex-col gap-6 border-l border-line pl-6 md:pl-8">
          {jobs.map((job) => {
            const current = job.period.includes("Present");
            return (
              <article
                key={`${job.role}-${job.company}`}
                className="relative rounded-2xl border border-line bg-surface p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-accent bg-paper md:-left-[39px]"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold">{job.role}</h3>
                  <p className="flex items-center gap-2 text-sm font-medium text-muted">
                    {current && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold text-on-accent">
                        Current
                      </span>
                    )}
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
