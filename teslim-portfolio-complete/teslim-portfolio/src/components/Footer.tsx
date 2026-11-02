import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f3a30] bg-forest px-6 py-6 text-center text-sm text-mint">
      © {new Date().getFullYear()} {site.name} · {site.location}
    </footer>
  );
}
