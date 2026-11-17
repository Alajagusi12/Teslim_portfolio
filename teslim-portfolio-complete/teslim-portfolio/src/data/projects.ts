// Draft case study copy. Review each section against your real code and edit
// anything that does not match what you built.

export type Section = { title: string; body: string; points?: string[] };

export type Project = {
  slug: string;
  explainer: string;
  name: string;
  summary: string;
  stack: string[];
  live: string;
  source: string;
  overview: string;
  sections: Section[];
  // Optional real screen recording. Put the file in public/projects/ and set, for example:
  // media: { type: "image", src: "/projects/nexus.gif", alt: "Nexus demo" }
  media?: { type: "image" | "video"; src: string; alt?: string };
};

export const projects: Project[] = [
  {
    slug: "evalops",
    explainer: "EvalOps checks how good an AI model's answers are. It sends answers to Google's Gemini model, which acts as a judge and scores them for facts and reasoning, stores the results in a database, and helps spot when quality drops over time.",
    name: "EvalOps",
    summary:
      "Live AI benchmarking and regression-detection platform that uses the Gemini API for LLM-as-a-Judge scoring.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini API", "Playwright"],
    live: "https://evalops-eight.vercel.app",
    // TODO: replace with the exact EvalOps repository URL
    source: "https://github.com/Alajagusi12",
    overview:
      "EvalOps is a full-stack AI quality engineering and benchmarking platform (2025 - 2026) that I architected and deployed.",
    sections: [
      {
        title: "Why I built it",
        body: "I built EvalOps to combine my AI evaluation and QA engineering work in one live project that demonstrates modern engineering and testing skills.",
      },
      {
        title: "What it does",
        body: "It is a full-stack AI evaluation and regression-detection platform with modular UI components, dynamic API route handlers, and performance tracking. It integrates the Google Gemini API into an asynchronous evaluation workflow for automated LLM-as-a-Judge scoring, RAG faithfulness checks, and model drift monitoring.",
      },
      {
        title: "Data design",
        body: "A normalized relational PostgreSQL schema through Prisma ORM, with structured foreign-key relationships and indexing for Golden Dataset query execution.",
      },
      {
        title: "Tech used",
        body: "Next.js and TypeScript for the application, PostgreSQL with Prisma for data, the Google Gemini API for response evaluation, and Playwright for end-to-end testing. Deployed on Vercel.",
      },
      {
        title: "Testing and Quality Assurance",
        body: "Playwright end-to-end test suites with network mocking validate the critical evaluation workflows and error handling.",
      },
    ],
  },
  {
    slug: "nexus",
    explainer: "Nexus is a workspace where a team can chat in real time, plan work on Kanban boards, share documents, and hold video calls, all in one place.",
    name: "Nexus",
    summary:
      "Real-time team collaboration SaaS with live messaging, video, Kanban boards, and documents in one workspace.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase Realtime", "NextAuth", "Tailwind CSS"],
    live: "https://nexus-iota-two-17.vercel.app/",
    // TODO: replace with the exact Nexus repository URL
    source: "https://github.com/Alajagusi12",
    overview:
      "Nexus is a real-time team collaboration SaaS (2024 - 2025) with secure authentication through NextAuth and live bidirectional messaging through Supabase Realtime WebSockets.",
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
          "Secure sign-in with NextAuth.",
          "Live two-way messaging over Supabase Realtime WebSockets.",
          "Responsive, interactive interfaces built with Next.js and Tailwind CSS.",
        ],
      },
      {
        title: "Tech used",
        body: "Next.js and TypeScript for the application, Tailwind CSS for styling, Prisma for data access, NextAuth for authentication, and Supabase Realtime for live messaging. Deployed on Vercel.",
      },
      {
        title: "Challenges",
        body: "Combining several feature areas in one app meant keeping data models consistent across messaging, tasks, and documents. I also diagnosed and resolved CSS layout issues across mobile and desktop viewports, including around the 768px breakpoint.",
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
    explainer: "Task Manager lets you add tasks and track their progress, and a Python script turns the task data into a completion report.",
    name: "Task Manager",
    summary:
      "A task manager with interactive UI workflows, input validation, and a Python script that generates completion reports.",
    stack: ["Python", "HTML", "CSS", "JavaScript"],
    live: "https://alajagusi12.github.io/Task-Manager/",
    source: "https://github.com/Alajagusi12/Task-Manager",
    overview:
      "A task management web application with interactive UI workflows, task status updates, input validation, and a Python backend script that analyzes task data and generates completion reports.",
    sections: [
      { title: "Task creation", body: "Users add a task through a simple form. New tasks appear in the list immediately so the result of each action is clear." },
      { title: "UI interactions", body: "Tasks can be updated and managed directly from the list, with clear visual feedback for each state." },
      { title: "State management", body: "The task list is the single source of truth, and the interface re-renders from that data so what the user sees always matches the underlying state." },
      { title: "Input validation", body: "Empty or invalid input is rejected before a task is created, and the user sees a clear message explaining what to fix." },
      { title: "Data reporting with Python", body: "A Python script (report.py) analyzes the task data and generates completion reports, which adds a data-analysis side to the project." },
    ],
  },
  {
    slug: "weather-search",
    explainer: "Weather Search lets you type a city and see its current weather, with clear messages while the data loads or if something goes wrong.",
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
