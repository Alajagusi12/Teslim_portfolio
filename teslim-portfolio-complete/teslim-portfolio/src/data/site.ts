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
];

export const stats = [
  { to: 5, suffix: " years", label: "AI evaluation and software QA" },
  { to: 40, suffix: "+", label: "Playwright end-to-end tests" },
  { to: 500, suffix: "+", label: "Prompts and responses evaluated at Turing" },
  { to: 30, suffix: "+", label: "Reproducible defects documented" },
];

export const summary =
  "AI Quality and LLM Evaluation Specialist with 5 years of experience across TELUS International, Turing, RWS, and Micro1. Consistently rated in the top agreement band against reference solves, with full marks across safety and harm categories. Skilled in factual verification, hallucination detection, adversarial edge-case testing, and writing evidence-based evaluation rationales. Also a QA Automation Engineer (Playwright, TypeScript) and frontend developer who built EvalOps, a live AI benchmarking platform. Bilingual in English and Yoruba, able to evaluate AI-generated content in both languages for accuracy, fluency, and cultural appropriateness.";

export const skills = [
  {
    title: "AI & LLM Evaluation",
    items: ["LLM Evaluation", "Response Rating", "Factuality Assessment", "Hallucination Detection", "Reasoning Evaluation", "AI Safety Review", "Harm & Safety Categorization", "Prompt Engineering", "Adversarial Testing", "Instruction Following", "Multi-turn Evaluation", "Error Classification", "Model Benchmarking"],
  },
  {
    title: "AI Code Evaluation",
    items: ["AI-Generated Code Review", "Code Quality Assessment", "React Code Evaluation", "TypeScript Code Analysis", "Prompt Effectiveness Assessment"],
  },
  {
    title: "QA & Automation",
    items: ["Playwright", "End-to-End Testing", "Regression Testing", "Smoke Testing", "Cross-Browser Testing", "API Testing", "Page Object Model", "Functional Testing", "Test Automation", "Jira"],
  },
  {
    title: "Development",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "HTML5", "CSS3", "Tailwind CSS", "PostgreSQL", "Prisma", "Git", "GitHub", "Vercel", "Gemini API", "REST APIs"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: { group: string; jobs: Job[] }[] = [
  {
    group: "",
    jobs: [
      {
        role: "Independent AI Evaluator & QA Engineer",
        company: "Self-Employed (Freelance, Part-time)",
        period: "January 2021 - Present",
        bullets: [
          "AI Evaluation: Conducted independent contract work for various AI training platforms, evaluating model outputs for factual accuracy, reasoning, and safety compliance.",
          "Quality Assurance: Performed manual and automated testing for independent web development clients, writing test cases and documenting reproducible defects.",
          "Continuous Development: Built and deployed full-stack web applications (EvalOps, Nexus) to continuously practice and demonstrate modern engineering and QA skills.",
        ],
      },
      {
        role: "AI Trainer & Frontend QA Reviewer",
        company: "Micro1 (Freelance, Remote, Part-time)",
        period: "October 2026 - Present",
        bullets: [
          "Model Behavior Analysis: Systematically evaluate complex AI outputs across diverse task types, assessing reasoning accuracy, logical consistency, and adherence to task instructions.",
          "Adversarial Prompt Engineering: Refine prompts and task designs, building complex scenarios intended to expose hidden model failure modes and test behavioral boundaries.",
          "Frontend Code Evaluation: Evaluate React and TypeScript codebases for technical quality, identifying rendering issues, assessing state management, and validating components against production standards.",
        ],
      },
      {
        role: "AI Evaluation Contributor",
        company: "Turing (Contract, Part-time)",
        period: "January 2025 - Present",
        bullets: [
          "Systematic Assessment: Evaluated 500+ prompts and responses across diverse tasks and domains, assessing reasoning quality, factual correctness, and multi-turn consistency, while maintaining top-tier scoring agreement.",
          "Adversarial Testing: Ran A/B comparative evaluations and developed complex edge-case scenarios to expose model weaknesses and failure patterns.",
          "Rubric Feedback: Applied and stress-tested evaluation rubrics, providing direct feedback to task designers where criteria were unclear, ambiguous, or under-specified.",
        ],
      },
      {
        role: "Software QA & Test Automation Engineer",
        company: "Elite Tech Solutions (Contract, Part-time)",
        period: "January 2024 - Present",
        bullets: [
          "Automation Architecture: Built end-to-end automated tests with Playwright, TypeScript, and JavaScript, authoring 40+ E2E tests with the Page Object Model (POM).",
          "Efficiency Optimization: Reduced release verification time by 50% by developing an optimized automated smoke-testing suite.",
          "Defect Discovery: Ran functional, regression, and cross-browser testing, validated API integrations, and documented 30+ reproducible defects.",
        ],
      },
      {
        role: "AI Response Reviewer / Annotator",
        company: "RWS (Contract, Part-time)",
        period: "September 2025 - October 2026",
        bullets: [
          "Safety & Compliance: Executed precise harm and safety categorization, systematically flagging policy violations, user harm, group harm, and societal harm across varied content types.",
          "Data Integrity: Applied rigorous annotation and quality-control procedures to ensure the absolute reliability of AI training datasets.",
        ],
      },
      {
        role: "Project Supervisor",
        company: "BM Group",
        period: "January 2024 - December 2024",
        bullets: [
          "Team Leadership: Supervised team members, managed project timelines, and reinforced quality standards to support on-time delivery.",
        ],
      },
      {
        role: "QA Specialist",
        company: "Apex Digital Systems (Contract)",
        period: "January 2022 - December 2023",
        bullets: [
          "Manual QA Mastery: Designed and executed 300+ manual test cases across Chrome, Safari, Firefox, Edge, iOS, and Android.",
          "Defect Tracking: Logged and tracked 50+ critical defects in Jira, working with developers to resolve them within Agile sprints.",
        ],
      },
      {
        role: "AI Evaluation Specialist",
        company: "TELUS International (Contract)",
        period: "January 2021 - December 2023",
        bullets: [
          "High-Volume Execution: Evaluated thousands of AI-generated responses for factual accuracy, logical reasoning, and instruction adherence, scoring full marks across all assessed harm and safety categories.",
          "Failure Analysis: Identified hallucinations, linguistic inconsistencies, and edge-case failures across ambiguous and adversarial scenarios.",
          "Quality Assurance: Authored evidence-based rationales cited by reviewers as among the strongest, resulting in a formal promotion to the Top Contributor Tier.",
        ],
      },
    ],
  },
];

export const education = [
  { title: "B.Sc. Computer Science", school: "Kwara State University (KWASU)", period: "Expected 2027" },
  { title: "Diploma in Civil Engineering", school: "CAILS, Kwara State", period: "Completed 2022" },
];

export const certifications = [
  "Micro1 Frontend Engineering Certification (November 2026)",
  "Mercor Academy: Mastering Model Mechanics",
  "Mercor Academy: AI with Human Expertise",
  "Mercor Academy: Introduction to Agents",
];

export const award = {
  title: "NACOSS Award of Excellence",
  body: "Nigerian Association of Computer Science Students (KWASU Chapter), for leadership, academic excellence, and contribution to the computer science student community.",
};

export const languages = [
  { name: "English", level: "Professional / Fluent" },
  { name: "Yoruba", level: "Native; fluent in reading, writing, and content evaluation" },
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
    label: "Automation efficiency",
    text: "Reduced manual QA verification time by 50% through automated Playwright testing workflows.",
  },
  {
    label: "Evaluation quality",
    text: "Maintained strong scoring consistency and produced evidence-based evaluation rationales across thousands of high-volume AI tasks.",
  },
  {
    label: "Technical innovation",
    text: "Designed, developed, and deployed EvalOps, a full-stack AI benchmarking platform integrating automated LLM evaluation.",
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
