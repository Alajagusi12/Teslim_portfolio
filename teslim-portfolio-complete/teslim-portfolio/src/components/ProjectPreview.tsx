"use client";

import { motion, useReducedMotion } from "framer-motion";

type Media = { type: "image" | "video"; src: string; alt?: string };
type Props = {
  slug: string;
  name: string;
  host: string;
  media?: Media;
  size?: "card" | "hero";
};

type SceneProps = { reduce: boolean | null };

function NexusScene({ reduce }: SceneProps) {
  const cols = ["To Do", "In Progress", "Done"];
  return (
    <div className="h-full p-4">
      <div className="grid grid-cols-3 gap-2">
        {cols.map((c, i) => (
          <div key={c} className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">{c}</p>
            {i === 0 ? (
              <motion.div
                className="relative z-10 h-8 rounded-md border border-accent bg-surface"
                animate={
                  reduce
                    ? undefined
                    : { x: ["0%", "0%", "106%", "106%", "212%", "212%", "0%"] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.3, 0.5, 0.65, 0.85, 1],
                }}
              >
                <span className="absolute inset-y-2 left-2 w-10 rounded bg-accent/40" />
              </motion.div>
            ) : (
              <div className="h-8 rounded-md border border-dashed border-line" />
            )}
            <div className="h-8 rounded-md border border-line bg-surface" />
            <div className="h-8 rounded-md border border-line bg-surface" />
          </div>
        ))}
      </div>
    </div>
  );
}

function EvalOpsScene({ reduce }: SceneProps) {
  const rows = [
    ["Factuality", 92],
    ["Reasoning", 78],
    ["Relevance", 85],
  ] as const;
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-5">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
        Scoring a model response
      </p>
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-center gap-3 text-[11px] font-medium">
          <span className="w-20 text-muted">{label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-full rounded-full bg-accent"
              style={reduce ? { width: `${value}%` } : undefined}
              animate={reduce ? undefined : { width: ["0%", `${value}%`, `${value}%`, "0%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.35, 0.85, 1],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TaskScene({ reduce }: SceneProps) {
  const tasks = ["Plan the week", "Review pull request", "Write test cases", "Ship the release"];
  return (
    <div className="flex h-full flex-col justify-center gap-2 p-4">
      {tasks.map((t, i) => {
        const start = 0.12 + i * 0.2;
        return (
          <div
            key={t}
            className="flex items-center gap-3 rounded-md border border-line bg-surface px-3 py-2 text-[12px] font-medium"
          >
            <span className="relative flex h-4 w-4 items-center justify-center rounded border border-accent">
              <motion.span
                className="h-2 w-2 rounded-sm bg-accent"
                style={reduce ? { opacity: 1 } : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, start, start + 0.05, 0.92, 1],
                }}
              />
            </span>
            <span>{t}</span>
          </div>
        );
      })}
    </div>
  );
}

function WeatherScene({ reduce }: SceneProps) {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-4">
      <div className="flex h-8 items-center gap-2 rounded-md border border-line bg-surface px-3 text-xs">
        <span className="text-muted">City:</span>
        <motion.span
          className="inline-block overflow-hidden whitespace-nowrap font-semibold"
          style={reduce ? { width: "5ch" } : { width: "0ch" }}
          animate={reduce ? undefined : { width: ["0ch", "5ch", "5ch", "0ch"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            times: [0, 0.25, 0.9, 1],
          }}
        >
          Lagos
        </motion.span>
      </div>
      <motion.div
        className="flex items-center gap-3 rounded-md border border-line bg-surface p-3"
        style={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, 8] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          times: [0, 0.3, 0.45, 0.9, 1],
        }}
      >
        <span className="h-8 w-8 rounded-full bg-amber-400" />
        <div className="text-xs">
          <p className="font-semibold">Current conditions</p>
          <p className="text-muted">Sample data</p>
        </div>
      </motion.div>
    </div>
  );
}

function Scene({ slug, reduce }: { slug: string; reduce: boolean | null }) {
  if (slug === "nexus") return <NexusScene reduce={reduce} />;
  if (slug === "task-manager") return <TaskScene reduce={reduce} />;
  if (slug === "weather-search") return <WeatherScene reduce={reduce} />;
  return <EvalOpsScene reduce={reduce} />;
}

export default function ProjectPreview({ slug, name, host, media, size = "card" }: Props) {
  const reduce = useReducedMotion();
  const height = size === "hero" ? "h-72" : "h-44";

  return (
    <figure className="m-0 overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line bg-paper px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
        </span>
        <span className="ml-2 truncate rounded-md border border-line bg-surface px-2 py-0.5 text-[11px] text-muted">
          {host}
        </span>
      </div>
      <div className={`${height} overflow-hidden bg-paper`}>
        {media ? (
          media.type === "video" ? (
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              aria-label={media.alt ?? `Screen recording of ${name}`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={media.src}
              alt={media.alt ?? `Screen recording of ${name}`}
              className="h-full w-full object-cover object-top"
            />
          )
        ) : (
          <div role="img" aria-label={`Animated preview of ${name}`} className="h-full">
            <Scene slug={slug} reduce={reduce} />
          </div>
        )}
      </div>
      <figcaption className="border-t border-line px-3 py-1.5 text-[11px] text-muted">
        {media ? "Screen recording" : "Animated preview (illustrative)"}
      </figcaption>
    </figure>
  );
}
