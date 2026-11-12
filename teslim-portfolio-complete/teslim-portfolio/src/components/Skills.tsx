import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { methodologies, skills } from "@/data/site";

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6">
      <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-accent">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <SectionHeading label="Skills" title="Skills and expertise" />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <Group key={group.title} title={group.title} items={group.items} />
          ))}
          <Group title="Methodologies and practices" items={methodologies} />
        </div>
      </FadeIn>
    </section>
  );
}
