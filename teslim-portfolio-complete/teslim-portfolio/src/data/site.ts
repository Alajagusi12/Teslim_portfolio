export const site = {
  name: "Abdulwahab Teslim",
  email: "alajagusiteslim@gmail.com",
  github: "https://github.com/Alajagusi12",
  linkedin: "https://linkedin.com/in/teslim-alajagusi-3ab347438",
  resume: "/Abdulwahab_Teslim_Resume_Final.pdf",
  location: "Nigeria (Remote)",
};

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#ai-evaluation", label: "AI Evaluation" },
  { href: "/#qa", label: "QA" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export const stats = [
  { to: 5, suffix: "+ years", label: "AI evaluation, QA, and engineering" },
  { to: 40, suffix: "+", label: "Automated Playwright test specifications" },
  { to: 340, suffix: "+", label: "Automated and manual test specifications authored" },
  { to: 50, suffix: "%", label: "Faster release verification" },
];

export const summary =
  "Full-Stack Software Engineer and AI Evaluation Specialist pursuing an M.Sc. in Computer Science, with 5+ years of experience bridging production web engineering, QA test automation, and frontier LLM alignment. Proven expert in building scalable web systems (Next.js, TypeScript, PostgreSQL, Prisma), automated testing frameworks (Playwright E2E), and programmatic AI evaluation pipelines. Consistently rated in the top agreement band against reference solves across Turing, TELUS International, and Micro1, excelling in Golden Dataset curation, agentic tool-use auditing, RAG context grounding, rubric stress-testing, and defensible written rationales. Creator of EvalOps, a live full-stack AI benchmarking and regression detection platform. Bilingual in English and Yoruba.";

export const skills = [
  {
    title: "AI Evaluation, Alignment & Safety",
    items: ["LLM Model Output Evaluation", "Golden Dataset Curation", "Agentic Trajectory & Tool-Use Auditing", "RAG Context Grounding & Faithfulness", "Rubric Application & Stress-Testing", "Inter-Rater Reliability (IRR) & Calibration", "Defensible Rationale Writing", "RLHF/SFT Data Validation", "Side-by-Side (SxS) Benchmarking", "Automated Evaluation Pipelines (LLM-as-a-Judge)", "Adversarial Red-Teaming", "AI Guardrails & PII Leakage Detection"],
  },
  {
    title: "Full-Stack & Backend Engineering",
    items: ["TypeScript", "JavaScript", "Python", "React", "Next.js (App Router, SSR, API Routes)", "Node.js", "PostgreSQL", "Prisma ORM", "Supabase Realtime", "WebSockets", "REST APIs", "NextAuth"],
  },
  {
    title: "QA Automation & Testing Frameworks",
    items: ["Playwright", "End-to-End Testing", "Page Object Model (POM)", "Network Mocking", "Regression & Smoke Testing", "API Testing", "Jest", "Cross-Browser Testing"],
  },
  {
    title: "DevOps, CI/CD & Tooling",
    items: ["Git", "GitHub Actions", "CI/CD Pipelines", "Docker", "Deterministic JSON Schema Validation", "Jira", "Agile/Scrum Methodologies"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  plain?: string;
};

export const experience: { group: string; jobs: Job[] }[] = [
  {
    group: "",
    jobs: [
      {
        role: "AI Evaluation & Automation Specialist",
        company: "Turing & TELUS International (Contract, Remote)",
        plain: "I review and score the answers AI models give, check them against reference answers and rubrics, and write a clear explanation for every judgment. I also built Python and TypeScript scripts that automatically check model output and catch drops in quality.",
        period: "January 2021 - Present",
        bullets: [
          "Top-Band Alignment & Defensible Rationales: Sustained top-band agreement against reference solves across high-volume programming and multi-step reasoning queues, accompanying judgments with structured, evidence-backed written rationales and earning formal promotion to the TELUS International Top Contributor Tier.",
          "Rubric Stress-Testing & Inter-Rater Reliability: Applied, stress-tested, and refined complex evaluation rubrics, resolving edge-case ambiguities and improving scoring calibration across multi-turn conversational prompts.",
          "RAG Context Grounding & Safety Guardrails: Audited model responses for source-document faithfulness, citation accuracy, and logic hallucinations while enforcing safety guardrails against PII leakage and policy violations.",
          "Automated Evaluation & Regression Pipelines: Engineered Python and TypeScript validation scripts to curate gold-standard evaluation suites, programmatically verifying code execution, deterministic JSON schemas, and model drift across evaluation batches.",
          "Side-by-Side Benchmarking: Executed comparative A/B model assessments across coding, reasoning, and instruction-adherence tasks to identify performance regressions.",
        ],
      },
      {
        role: "Software QA & Test Automation Engineer",
        company: "Elite Tech Solutions (Contract, Remote)",
        plain: "I write automated browser tests that click through an application the way a real user would, so problems are caught before release. These test suites cut release verification time by 50%.",
        period: "January 2024 - Present",
        bullets: [
          "Test Automation Architecture: Engineered end-to-end automated testing suites using Playwright, TypeScript, and JavaScript, authoring 40+ automated test specifications implementing the Page Object Model.",
          "CI/CD Pipeline Optimization: Reduced release verification time by 50% by integrating automated regression and smoke-testing suites into continuous integration workflows.",
          "Defect Mitigation & API Validation: Executed functional, regression, and API endpoint testing, documenting and resolving 30+ critical bugs to protect production stability.",
        ],
      },
      {
        role: "Full-Stack & AI Codebase Reviewer",
        company: "Micro1 (Freelance, Part-Time)",
        plain: "I review the code behind web applications, and the step-by-step actions of AI coding agents, to confirm they are correct, safe, and well structured.",
        period: "October 2026 - Present",
        bullets: [
          "Full-Stack Codebase Auditing: Evaluated complex React, Next.js, and TypeScript codebases, identifying rendering regressions, reviewing component architectures, and validating state management logic.",
          "Agentic Trajectory & Tool-Use Verification: Audited multi-step AI coding agents for function-calling accuracy, error recovery, architectural constraint adherence, and code safety, providing detailed technical justifications.",
        ],
      },
      {
        role: "AI Response Reviewer & Quality Auditor",
        company: "RWS (Contract, Remote)",
        plain: "I audited AI answers for accuracy, wording, and safety, flagged harmful or policy-breaking content, and checked that reviewers scored consistently.",
        period: "September 2025 - October 2026",
        bullets: [
          "High-Precision Factuality & Grounding Audits: Audited complex LLM outputs across high-volume evaluation queues, verifying factual grounding, linguistic precision, and strict instruction adherence against established evaluation rubrics.",
          "Safety Guardrails & Harm Classification: Identified logic hallucinations, potential PII leakage, and policy violations across multi-turn prompts, applying established safety and harm-classification standards.",
          "Calibration & Inter-Rater Reliability: Conducted multi-pass annotation quality audits and edge-case reviews to identify scoring inconsistencies and maintain high inter-annotator agreement across evaluation datasets.",
        ],
      },
      {
        role: "Technical Project & Operations Lead",
        company: "Horizon Digital Operations (Contract, Remote)",
        plain: "I coordinated engineering, QA, and annotation teams so milestones shipped on time, and I redesigned the Jira workflow to speed up task turnaround by 35%.",
        period: "January 2024 - December 2025",
        bullets: [
          "Cross-Functional Engineering Delivery: Coordinated remote technical workflows across software engineering, QA, and data annotation teams, ensuring 100% on-time delivery of development milestones.",
          "Workflow & QA Intake Optimization: Redesigned sprint tracking and quality-assurance intake pipelines in Jira, reducing communication bottlenecks and improving task turnaround speed by 35%.",
        ],
      },
      {
        role: "Software QA Specialist",
        company: "Apex Digital Systems (Contract, Part-Time)",
        plain: "I tested software by hand across browsers, phones, and operating systems, and tracked every defect through to resolution in Jira.",
        period: "January 2022 - December 2023",
        bullets: [
          "Comprehensive Test Execution: Designed and executed 300+ detailed manual test cases across operating systems, mobile devices, and desktop browser environments.",
          "Agile Defect Tracking: Managed end-to-end defect lifecycles in Jira, logging 50+ production defects and collaborating with engineering teams to accelerate sprint resolution.",
        ],
      },
      {
        role: "Independent Full-Stack & AI Systems Engineer",
        company: "Self-Employed (Freelance)",
        plain: "I build and deploy my own full-stack applications (EvalOps and Nexus) and the testing tools that keep them reliable.",
        period: "January 2021 - Present",
        bullets: [
          "Full-Stack Application Delivery: Architected and deployed full-stack web applications, including EvalOps and Nexus, utilizing Next.js, TypeScript, and PostgreSQL.",
          "Automated Reliability Tooling: Built custom E2E testing utilities and network-mocking scripts to improve application reliability and support zero-downtime deployments.",
        ],
      },
    ],
  },
];

export const education = [
  { title: "M.Sc. in Computer Science", school: "Al-Hikmah University", period: "2025 - Expected 2027" },
  { title: "B.Sc. in Computer Science", school: "Kwara State University (KWASU)", period: "2021 - 2025" },
  { title: "Diploma in Civil Engineering", school: "CAILS, Kwara State", period: "2020 - 2022" },
];

export const certifications = [
  "Micro1: Frontend Engineering Certification (November 2026)",
  "TestAutomationU: Automated End-to-End Testing with Playwright & TypeScript",
  "Postman: API Fundamentals Student Expert Certification",
  "freeCodeCamp: Quality Assurance & Automated Testing Certification",
  "DeepLearning.AI: Evaluating and Debugging Generative AI",
  "Mercor Academy: Mastering Model Mechanics, AI with Human Expertise, Introduction to Agents",
  "Hugging Face: AI Agents & Natural Language Processing Certification",
];

export const awards = [
  {
    title: "Top Contributor Tier",
    body: "TELUS International, 2023.",
  },
  {
    title: "NACOSS Award of Excellence",
    body: "KWASU Chapter, 2024. Awarded by the Nigerian Association of Computer Science Students for leadership, academic excellence, and contribution to the computer science student community.",
  },
];

export const languages = [
  { name: "English", level: "Professional / Fluent" },
  { name: "Yoruba", level: "Native (Expert in multilingual evaluation & localization)" },
];

export const testCases = [
  { id: "TC-001", feature: "Login", steps: "Enter valid email and password on the Nexus login page; click Log in.", expected: "User is signed in and reaches the workspace.", actual: "User is signed in and reaches the workspace.", status: "Pass" },
  { id: "TC-002", feature: "Login", steps: "Enter valid email and a wrong password; click Log in.", expected: "Error message is shown and access is denied.", actual: "Error message is shown and access is denied.", status: "Pass" },
  { id: "TC-003", feature: "Login (basic page)", steps: "Enter correct email and password; click Log in.", expected: "User gains access to account.", actual: "Button does not respond.", status: "Fail" },
  { id: "TC-004", feature: "Messaging", steps: "Open a channel, type a message, and press Send.", expected: "Message appears in the conversation.", actual: "Message appears in the conversation.", status: "Pass" },
  { id: "TC-005", feature: "Kanban", steps: "Create a task with a title in the To Do column.", expected: "Task card appears in the column.", actual: "Task card appears in the column.", status: "Pass" },
  { id: "TC-006", feature: "Kanban", steps: "Try to create a task with an empty title.", expected: "Validation message prevents creation.", actual: "Validation message prevents creation.", status: "Pass" },
];

export const playwrightSample = `import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test("user can log in with valid credentials", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.signIn("user@example.com", "correct-password");
  await expect(page).toHaveURL(/dashboard/);
});

test("shows an error for a wrong password", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.signIn("user@example.com", "wrong-password");
  await expect(login.errorMessage).toBeVisible();
});`;

export const methodologies = [
  "Agile/Scrum",
  "Root Cause Analysis",
  "Defect Lifecycle Management",
  "Structured Quality Assurance",
  "Test Case Design and Execution",
  "Cross-Functional Collaboration",
  "Technical Documentation",
  "Evaluation Rubric Adherence",
  "Data Quality Control",
];

export const achievements = [
  {
    label: "Top-Band AI Alignment",
    text: "Sustained top-band agreement against reference solves across 5+ years of multi-platform LLM evaluation (Turing, TELUS International, Micro1), earning formal promotion to the TELUS Top Contributor Tier.",
  },
  {
    label: "50% Faster Release Cycles",
    text: "Reduced deployment verification time by half through automated Playwright E2E regression suites integrated directly into CI/CD pipelines.",
  },
  {
    label: "35% Faster Sprint Turnaround",
    text: "Streamlined cross-functional software engineering and QA intake workflows in Jira across remote technical teams.",
  },
  {
    label: "Production AI & SaaS Delivery",
    text: "Architected and deployed two full-stack applications (EvalOps and Nexus) and authored 340+ automated and manual test specifications.",
  },
];

export const strengths = [
  {
    title: "Analytical thinking and attention to detail",
    body: "Ability to identify edge cases, AI hallucinations, logical inconsistencies, software defects, and subtle UI issues.",
  },
  {
    title: "Technical communication",
    body: "Skilled in producing clear, structured, evidence-based evaluation rationales, technical documentation, and reproducible bug reports.",
  },
  {
    title: "Remote collaboration",
    body: "Experienced in independent remote work, asynchronous communication, and collaborative workflows.",
  },
  {
    title: "Adaptability and continuous learning",
    body: "Continuously developing expertise in AI evaluation, frontend engineering, and software quality through practical projects and professional certifications.",
  },
];

export const resumeMeta = {
  headline:
    "Full-Stack Software Engineer | AI Evaluation & Alignment Specialist | QA Automation Engineer",
  location: "Remote – Nigeria (UTC+1, full UK / US timezone overlap)",
  phone: "+234 905 908 4323",
  phoneHref: "tel:+2349059084323",
  linkedinLabel: "linkedin.com/in/teslim-alajagusi-3ab347438",
  githubLabel: "github.com/Alajagusi12",
  portfolioLabel: "teslim-portfolio-dgxh.vercel.app",
  portfolioHref: "https://teslim-portfolio-dgxh.vercel.app",
};

export const resumeProjects = [
  {
    name: "EvalOps – AI Quality Engineering & Benchmarking Platform",
    period: "2025 – 2026",
    stack: "Next.js, TypeScript, PostgreSQL, Prisma, Gemini API, Playwright",
    bullets: [
      "Architected a full-stack AI evaluation and regression-detection platform using Next.js, featuring modular UI components, dynamic API route handlers, and performance tracking.",
      "Designed a normalized relational PostgreSQL schema through Prisma ORM, implementing structured foreign-key relationships and indexing for Golden Dataset query execution.",
      "Integrated the Google Gemini API into an asynchronous evaluation workflow for automated LLM-as-a-Judge scoring, RAG faithfulness checks, and model drift monitoring.",
      "Built Playwright E2E test suites with network mocking to validate critical evaluation workflows.",
    ],
    live: "https://evalops-eight.vercel.app",
  },
  {
    name: "Nexus – Real-Time Team Collaboration SaaS",
    period: "2024 – 2025",
    stack: "Next.js, TypeScript, Prisma, Supabase Realtime, Tailwind CSS",
    bullets: [
      "Engineered a collaboration platform featuring secure authentication through NextAuth and live bidirectional messaging through Supabase Realtime WebSockets.",
      "Built responsive, interactive application interfaces using Next.js and Tailwind CSS, resolving CSS layout issues across mobile and desktop viewports.",
    ],
    live: "https://nexus-iota-two-17.vercel.app",
  },
];

export const awardsResume = [
  "Top Contributor Tier – TELUS International | 2023",
  "NACOSS Award of Excellence – KWASU Chapter | 2024",
];

export const aboutPlain =
  "I check that AI gives correct, safe answers, I test software so it works before people use it, and I build web applications. Together, that means I can both build a product and judge its quality, which is valuable for any team working with AI.";

export const glossary = [
  { term: "Golden dataset curation", meaning: "A golden dataset is a trusted set of questions with verified correct answers. Curating it means building and maintaining that set so AI models can be tested against it fairly." },
  { term: "LLM-as-a-Judge", meaning: "Using one AI model to score the answers of another, so large batches of responses can be evaluated automatically and consistently." },
  { term: "RAG grounding and faithfulness", meaning: "RAG systems let an AI look up documents before answering. Grounding checks confirm the answer really follows those documents and does not invent facts." },
  { term: "Inter-rater reliability (IRR)", meaning: "A measure of how consistently different reviewers score the same item. High agreement means the scoring rules are clear and the results can be trusted." },
  { term: "Agentic tool-use auditing", meaning: "Checking AI agents that take multi-step actions, such as calling tools or functions, to confirm each step is correct, safe, and recovers properly from errors." },
  { term: "Adversarial red-teaming", meaning: "Deliberately trying to make a model fail with tricky or hostile prompts, so weaknesses are found before real users find them." },
  { term: "Hallucination detection", meaning: "Spotting when an AI states something false with confidence, such as an invented fact or source." },
  { term: "PII leakage detection", meaning: "Checking that a model does not reveal personal information such as names, phone numbers, or addresses." },
  { term: "Network mocking", meaning: "Replacing real server responses with controlled fake ones during a test, so failures and slow responses can be tested reliably." },
  { term: "Page Object Model", meaning: "A test design pattern that keeps each page's selectors and actions in one place, so tests stay short and easy to maintain." },
  { term: "Regression and smoke testing", meaning: "Regression tests confirm that old features still work after a change. Smoke tests are a fast first check that the most important features are alive." },
  { term: "CI/CD", meaning: "Pipelines that automatically build, test, and release code whenever it changes, so problems are caught early." },
];
