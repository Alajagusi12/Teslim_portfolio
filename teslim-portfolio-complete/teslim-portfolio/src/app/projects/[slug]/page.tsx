import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Activity, CheckCircle2 } from "lucide-react";
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
    title: `${project.name} Case Study | Abdulwahab Teslim`,
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
      <main className="bg-paper min-h-screen">
        {/* Header Section */}
        <div className="border-b border-line bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <Link
              href="/#projects"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to all projects
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Activity className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                Engineering Case Study
              </p>
            </div>

            <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight text-ink">
              {project.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted max-w-3xl">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] font-medium text-ink/80"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-accent px-6 text-[15px] font-semibold text-white hover:bg-accent-dark transition-colors"
                >
                  View Live App <ExternalLink size={18} />
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-line bg-paper px-6 text-[15px] font-semibold text-ink hover:border-accent transition-colors"
                >
                  Source Code <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-16">
            {project.sections.map((s, index) => (
              <section key={s.title} className="relative">
                {/* Section Number Badge */}
                <div className="absolute -left-12 top-1 hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-sm font-mono text-muted font-bold">
                  0{index + 1}
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted text-lg">
                  {s.body}
                </p>
                
                {s.points && (
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 leading-relaxed text-muted">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}