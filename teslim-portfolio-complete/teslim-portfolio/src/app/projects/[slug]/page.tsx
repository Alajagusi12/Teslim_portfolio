import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} case study | Abdulwahab Teslim`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/#projects"
          className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.1em] text-accent">
          Case study
        </p>
        <h1 className="mt-2 font-serif text-5xl font-bold tracking-tight">
          {project.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {project.overview}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink/80"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center rounded-lg bg-accent px-5 text-[15px] font-semibold text-white hover:bg-accent-dark"
          >
            Live demo
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center rounded-lg border border-line bg-surface px-5 text-[15px] font-semibold text-ink hover:border-accent"
          >
            Source code
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {project.sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-serif text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              {s.points && (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
