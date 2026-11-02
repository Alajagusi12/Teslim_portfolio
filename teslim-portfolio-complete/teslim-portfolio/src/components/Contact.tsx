import { Download, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest text-[#ecfdf5]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-20">
        <h2 className="font-serif text-4xl font-bold tracking-tight">
          Let’s work together
        </h2>
        <p className="max-w-xl text-lg text-mint">
          Open to AI evaluation, software QA, test automation, and frontend
          roles.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-[#ecfdf5] px-5 text-[15px] font-semibold text-forest"
          >
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <a
            href={site.resume}
            download
            className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-mint/40 px-5 text-[15px] font-semibold text-[#ecfdf5] hover:border-mint"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-mint">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
