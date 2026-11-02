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
  { value: "5 years", label: "AI evaluation and software QA" },
  { value: "40+", label: "Playwright end-to-end tests" },
  { value: "80+", label: "Manual test cases executed" },
  { value: "2h → 45m", label: "Release verification time" },
];

export const summary =
  "AI Evaluation Specialist and Software QA professional with 5 years of experience in AI response evaluation, data annotation, and software quality assurance. Skilled in assessing large language model (LLM) responses for factual accuracy, reasoning quality, instruction adherence, completeness, and safety. Experienced in comparing AI-generated responses, identifying hallucinations and logical errors, and writing clear, evidence-based evaluation rationales. Also experienced in manual testing, regression testing, defect reporting, and Playwright test automation.";

export const skills = [
  {
    title: "AI Evaluation",
    items: [
      "LLM response evaluation",
      "Factuality and hallucination detection",
      "Reasoning assessment",
      "Instruction-following scoring",
      "Side-by-side response comparison",
      "Completeness and relevance rating",
      "Safety and policy review",
      "Error classification",
      "Written rationales",
      "Rubric application",
      "Edge-case analysis",
      "Annotation quality control",
    ],
  },
  {
    title: "Software QA",
    items: [
      "Manual and functional testing",
      "Regression testing",
      "End-to-end testing",
      "Test case design",
      "Defect reproduction and reporting",
      "Cross-browser testing",
      "Test documentation",
    ],
  },
  {
    title: "Technical",
    items: [
      "JavaScript",
      "TypeScript",
      "Playwright",
      "Jira",
      "Git",
      "GitHub Actions",
      "PostgreSQL",
      "API testing",
      "React",
      "Next.js",
    ],
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
    group: "AI Evaluation Experience",
    jobs: [
      {
        role: "AI Evaluation Contributor",
        company: "Turing (Contract, Remote)",
        period: "Jan 2025 - Present",
        bullets: [
          "Evaluate LLM responses against client rubrics, scoring factual accuracy, reasoning, instruction adherence, and completeness.",
          "Compare competing model responses and write clear rationales explaining quality differences and ranking decisions.",
          "Identify hallucinations, logical inconsistencies, edge-case failures, and potential safety or policy violations.",
          "Apply task guidelines consistently and incorporate feedback from consensus and calibration reviews.",
        ],
      },
      {
        role: "AI Response Reviewer / Annotator",
        company: "RWS (Contract, Remote)",
        period: "Sep 2025 - Oct 2026",
        bullets: [
          "Review AI-generated responses for factual accuracy and guideline compliance, providing structured feedback.",
          "Flag ambiguous instructions and edge cases to help clarify task guidance.",
        ],
      },
      {
        role: "AI Evaluation Specialist",
        company: "TELUS International (Contract, Remote)",
        period: "Jan 2021 - Dec 2023",
        bullets: [
          "Assess AI search and assistant responses for relevance, factual accuracy, and instruction adherence across high-volume tasks.",
          "Document quality issues and reasoning errors using structured annotation formats to support model improvement.",
        ],
      },
    ],
  },
  {
    group: "Software QA Experience",
    jobs: [
      {
        role: "QA Engineer",
        company: "Elite Tech Solutions (Contract, Remote)",
        period: "Jan 2024 - Present",
        bullets: [
          "Created and maintained 40+ Playwright end-to-end tests for authentication, checkout, and profile-management workflows.",
          "Reduced release verification time from two hours to 45 minutes by improving the automated smoke-test suite.",
          "Reported 30+ defects and helped prevent five high-severity bugs from reaching production.",
          "Applied the Page Object Model (POM) to reduce duplication and make test code easier to maintain.",
        ],
      },
      {
        role: "QA Specialist",
        company: "Apex Digital Systems (Contract, Remote)",
        period: "Jan 2022 - Dec 2023",
        bullets: [
          "Designed and executed 80+ manual test cases across Chrome, Safari, Firefox, Edge, iOS, and Android.",
          "Tracked 50+ defects in Jira and worked with the team to support resolution within the same Agile sprint.",
          "Performed regression testing for biweekly releases, with zero critical regressions reported in production.",
          "Prepared test plans and documentation for new feature releases.",
        ],
      },
      {
        role: "Project Supervisor",
        company: "BM Group",
        period: "Jan 2024 - Dec 2024",
        bullets: [
          "Coordinated project activities and timelines, supervised team members, and reinforced quality standards.",
        ],
      },
    ],
  },
];

export const education = [
  {
    title: "B.Sc. Computer Science",
    school: "Kwara State University (KWASU)",
    period: "Expected graduation: 2027",
  },
  {
    title: "Diploma in Civil Engineering",
    school: "CAILS, Kwara State",
    period: "2022",
  },
];

export const testCases = [
  { id: "TC-001", feature: "Login", steps: "Enter valid email and password on the Nexus login page; click Log in.", expected: "User is signed in and reaches the workspace.", actual: "User is signed in and reaches the workspace.", status: "Pass" },
  { id: "TC-002", feature: "Login", steps: "Enter valid email and a wrong password; click Log in.", expected: "Error message is shown and access is denied.", actual: "Error message is shown and access is denied.", status: "Pass" },
  { id: "TC-003", feature: "Login (basic page)", steps: "Enter correct email and password; click Log in.", expected: "User gains access to account.", actual: "Button does not respond.", status: "Fail" },
  { id: "TC-004", feature: "Messaging", steps: "Open a channel, type a message, and press Send.", expected: "Message appears in the conversation.", actual: "Message appears in the conversation.", status: "Pass" },
  { id: "TC-005", feature: "Kanban", steps: "Create a task with a title in the To Do column.", expected: "Task card appears in the column.", actual: "Task card appears in the column.", status: "Pass" },
  { id: "TC-006", feature: "Kanban", steps: "Try to create a task with an empty title.", expected: "Validation message prevents creation.", actual: "Validation message prevents creation.", status: "Pass" },
];
