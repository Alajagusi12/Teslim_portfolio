import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIEvaluation from "@/components/AIEvaluation";
import QAShowcase from "@/components/QAShowcase";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: "https://teslim-portfolio-dgxh.vercel.app",
  jobTitle: "AI Evaluation Specialist and Software QA Engineer",
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIEvaluation />
        <QAShowcase />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
