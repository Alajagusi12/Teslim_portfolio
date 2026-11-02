import Link from "next/link";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="flex flex-col gap-8">
        <SectionHeading label="Work" title="Featured projects" />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5"
            >
              <div
                className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-forest"
                aria-hidden="true"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-mint/30" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-mint/20" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.12em] text-mint">
                  {p.name}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold">{p.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-x-5 text-sm font-semibold text-accent">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:underline"
                >
                  Live demo
                </a>
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:underline"
                >
                  Source code
                </a>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex min-h-[44px] items-center hover:underline"
                >
                  Case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
