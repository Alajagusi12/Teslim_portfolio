"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { projects } from "@/data/projects";

type Item = { id: string; label: string; hint: string; run: () => void };

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const items = useMemo<Item[]>(
    () => [
      ...navLinks.map((l) => ({
        id: `s-${l.href}`,
        label: l.label,
        hint: "Section",
        run: () => {
          window.location.href = l.href;
        },
      })),
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        label: `${p.name} case study`,
        hint: "Project",
        run: () => router.push(`/projects/${p.slug}`),
      })),
      {
        id: "gh",
        label: "GitHub",
        hint: "Link",
        run: () => {
          window.open(site.github, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "li",
        label: "LinkedIn",
        hint: "Link",
        run: () => {
          window.open(site.linkedin, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "mail",
        label: "Email me",
        hint: "Link",
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        id: "cv",
        label: "Download resume",
        hint: "Link",
        run: () => {
          window.location.href = site.resume;
        },
      },
      {
        id: "theme",
        label: "Toggle dark mode",
        hint: "Action",
        run: () => {
          const next = !document.documentElement.classList.contains("dark");
          document.documentElement.classList.toggle("dark", next);
          try {
            localStorage.setItem("theme", next ? "dark" : "light");
          } catch {
            // storage can be unavailable; the theme still changes for this visit
          }
        },
      },
    ],
    [router]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function choose(item: Item) {
    close();
    item.run();
  }

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      const item = results[active];
      if (item) choose(item);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 px-4 pt-[15vh]"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={16} aria-hidden="true" className="text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Search sections, projects, links..."
            aria-label="Search"
            className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-muted">No results</li>
          )}
          {results.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(item)}
                className={`flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 text-left text-sm ${
                  i === active ? "bg-accent text-on-accent" : "text-ink"
                }`}
              >
                <span>{item.label}</span>
                <span className={`text-xs ${i === active ? "text-on-accent/80" : "text-muted"}`}>
                  {item.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
