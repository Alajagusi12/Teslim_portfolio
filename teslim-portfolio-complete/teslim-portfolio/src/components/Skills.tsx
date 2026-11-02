import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <SectionHeading label="Skills" title="Skills and expertise" />
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
