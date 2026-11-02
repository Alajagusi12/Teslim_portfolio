import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { summary } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="flex flex-col gap-6">
        <SectionHeading label="About" title="About me" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{summary}</p>
      </FadeIn>
    </section>
  );
}
