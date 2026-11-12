import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f3a30] bg-forest px-6 py-6 text-sm text-mint">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <a href="/#top" className="inline-flex min-h-[44px] items-center font-semibold hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
