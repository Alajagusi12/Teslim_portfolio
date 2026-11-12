"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import { site, stats } from "@/data/site";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 pb-16 pt-16 md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex min-w-0 flex-1 basis-[480px] flex-col gap-5"
        >
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink/80">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to remote opportunities
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
            AI Evaluation · Software QA · Frontend
          </p>
          <h1 className="break-words font-serif text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            ABDULWAHAB TESLIM
          </h1>
          <p className="text-lg font-medium text-ink/80">
            AI Evaluation Specialist | Software QA | Test Automation | Frontend
            Development
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            I evaluate AI-generated responses, test software for reliability,
            and build modern web applications with a focus on accuracy,
            usability, and quality.
          </p>
          <p className="max-w-xl text-base text-muted">
            Explore my projects, technical skills, evaluation approach, and
            software quality work.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-[46px] items-center rounded-lg bg-accent px-5 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-dark"
            >
              Explore My Work
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-line bg-surface px-5 text-[15px] font-semibold text-ink transition-colors hover:border-accent"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[46px] items-center rounded-lg border border-line bg-surface px-5 text-[15px] font-semibold text-ink transition-colors hover:border-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-medium text-muted">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent"
            >
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent"
            >
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1 break-all hover:text-accent"
            >
              <Mail size={14} aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </motion.div>

        {/* --- THE IMAGE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-1 basis-[260px] justify-center"
        >
          <div className="group relative h-80 w-[270px] overflow-hidden rounded-[20px] bg-forest shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src="/profile.png"
              alt="Abdulwahab Teslim"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </motion.div>
      </section>

      <section aria-label="Highlights" className="border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-9 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-serif text-3xl font-bold text-accent md:text-4xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}