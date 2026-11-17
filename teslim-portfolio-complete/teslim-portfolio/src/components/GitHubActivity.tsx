import { ArrowUpRight, Star } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/Alajagusi12/repos?sort=pushed&per_page=12",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as Repo[];
    return data.filter((r) => !r.fork).slice(0, 6);
  } catch {
    return [];
  }
}

export default async function GitHubActivity() {
  const repos = await getRepos();
  if (repos.length === 0) return null;

  return (
    <section id="github" className="border-y border-line bg-surface">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <SectionHeading
          label="Open source"
          title="Latest on GitHub"
          intro="My most recently updated public repositories, loaded live from GitHub."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-semibold">{r.name}</p>
                <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 text-accent" />
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {r.description ?? "No description yet."}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-muted">
                {r.language && (
                  <span className="rounded-full border border-line px-2 py-0.5 font-medium text-ink/80">
                    {r.language}
                  </span>
                )}
                {r.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} aria-hidden="true" />
                    {r.stargazers_count}
                  </span>
                )}
                <span>
                  Updated{" "}
                  {new Date(r.pushed_at).toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </a>
          ))}
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] w-fit items-center gap-1 text-sm font-semibold text-accent hover:underline"
        >
          See all repositories <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </FadeIn>
    </section>
  );
}
