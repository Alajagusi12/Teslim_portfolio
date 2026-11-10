export type Section = { title: string; body: string; points?: string[] };

export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  live: string;
  source: string;
  overview: string;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "evalops",
    name: "EvalOps",
    summary:
      "Production-grade AI quality engineering platform. Uses an AI Judge to automatically grade LLM outputs on Factuality, Reasoning, and Safety.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Playwright", "Tailwind CSS", "Gemini API"],
    live: "https://evalops-eight.vercel.app",
    source: "https://github.com/Alajagusi12/evalops",
    overview:
      "EvalOps is an autonomous AI evaluation platform. It provides a centralized dashboard where QA engineers and AI researchers can benchmark models side-by-side, detect hallucinations, and maintain a historical record of evaluation rationales.",
    sections: [
      {
        title: "The problem it solves",
        body: "As AI models become more complex, ensuring their factual accuracy, reasoning, and safety is critical. Manual evaluation is slow and inconsistent. EvalOps solves this by automating the scoring process using a secondary AI agent (the AI Judge) and logging the results in a PostgreSQL database.",
      },
      {
        title: "Design decisions",
        body: "The UI was built to feel like a serious enterprise SaaS tool (inspired by Datadog and Linear), prioritizing data density over friendly chat bubbles.",
        points: [
          "A strict dark-mode design system using Tailwind CSS with sharp corners and monospace fonts for metrics.",
          "Replaced Prisma ORM with raw SQL via node-postgres (pg) to ensure zero build-time deployment failures on Vercel.",
          "Integrated Recharts for real-time data visualization of hallucination rates and agent activity.",
        ],
      },
      {
        title: "Tech used",
        body: "Next.js 14 (App Router) and TypeScript for the application, Tailwind CSS for the custom design system, PostgreSQL (Neon.tech) for the database, and the Google Gemini API for the AI evaluation engine.",
      },
      {
        title: "Testing and Quality Assurance",
        body: "Because this platform was built by a QA Engineer, it was developed with a 'test-first' mindset. The repository includes a robust automated testing suite.",
        points: [
          "Playwright End-to-End tests validating the core evaluation workflow.",
          "Network mocking to simulate API latency and ensure the UI remains stable under load.",
          "Raw SQL queries tested to ensure data is inserted and retrieved without vulnerabilities.",
        ],
      },
    ],
  },
  {
    slug: "nexus",
    name: "Nexus",
    summary:
      "Full-stack collaboration app with messaging, video, Kanban boards, and documents in one workspace.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Tailwind CSS"],
    live: "https://nexus-iota-two-17.vercel.app/",
    source: "https://github.com/Alajagusi12",
    overview:
      "Nexus is a full-stack collaboration app that brings messaging, video, Kanban task boards, and documents into a single workspace.",
    sections: [
      {
        title: "The problem it solves",
        body: "Teams often split chat, tasks, documents, and calls across separate tools, which scatters context. Nexus puts these in one place so conversations, work items, and documents stay connected.",
      },
      {
        title: "Design decisions",
        body: "The interface keeps navigation simple so each feature is one click away.",
        points: [
          "A shared workspace layout for chat, tasks, and documents.",
          "Typed data access with TypeScript and Prisma to catch mistakes early.",
          "PostgreSQL through Supabase for relational data and authentication.",
        ],
      },
      {
        title: "Tech used",
        body: "Next.js and TypeScript for the application, Tailwind CSS for styling, Prisma with PostgreSQL for data, and Supabase for the hosted backend. Deployed on Vercel.",
      },
      {
        title: "Challenges",
        body: "Combining several feature areas in one app meant keeping data models consistent across messaging, tasks, and documents, and managing the connection between the app and the hosted database.",
      },
      {
        title: "Testing and Quality Assurance",
        body: "I use Nexus as a test bed for Playwright end-to-end testing, exercising the same kinds of flows I test professionally.",
        points: [
          "Login and authentication flows, including invalid credentials.",
          "Sending a message in a channel.",
          "Creating Kanban tasks, including empty-title validation.",
          "Repeatable tests that can run in a pipeline such as GitHub Actions.",
        ],
      },
    ],
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    summary:
      "A task manager that covers task creation, UI interactions, state management, and input validation.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://alajagusi12.github.io/Task-Manager/",
    source: "https://github.com/Alajagusi12/Task-Manager",
    overview:
      "A focused task manager built to practice clean UI interactions, predictable state, and careful input handling.",
    sections: [
      { title: "Task creation", body: "Users add a task through a simple form. New tasks appear in the list immediately so the result of each action is clear." },
      { title: "UI interactions", body: "Tasks can be updated and managed directly from the list, with clear visual feedback for each state." },
      { title: "State management", body: "The task list is the single source of truth, and the interface re-renders from that data so what the user sees always matches the underlying state." },
      { title: "Input validation", body: "Empty or invalid input is rejected before a task is created, and the user sees a clear message explaining what to fix." },
    ],
  },
  {
    slug: "weather-search",
    name: "Weather Search",
    summary:
      "A weather lookup app showing API integration, asynchronous JavaScript, and clear loading and error states.",
    stack: ["JavaScript", "HTML", "CSS", "Weather API"],
    live: "https://alajagusi12.github.io/weather-search/",
    source: "https://github.com/Alajagusi12/weather-search",
    overview:
      "A weather search app that fetches live data for a city and presents it in a clean, readable layout.",
    sections: [
      { title: "API integration", body: "The app sends the searched city to a weather API and reads the response to display current conditions." },
      { title: "Asynchronous JavaScript", body: "Requests run asynchronously so the page stays responsive while data loads." },
      { title: "Data presentation", body: "Results are shaped into a short, readable summary instead of showing raw API output." },
      { title: "Loading and error states", body: "A loading indicator shows while the request is in flight, and a friendly message appears if the city is not found or the request fails." },
    ],
  },
];