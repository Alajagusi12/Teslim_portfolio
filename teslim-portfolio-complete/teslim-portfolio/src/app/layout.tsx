import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

const title = "Abdulwahab Teslim | AI Evaluation, Software QA & Frontend Development";
const description =
  "Portfolio of Abdulwahab Teslim: AI evaluation specialist, software QA engineer, and frontend developer. Projects, skills, and quality work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://teslim-portfolio-dgxh.vercel.app"),
  title: { default: title, template: "%s | Abdulwahab Teslim" },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Abdulwahab Teslim",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <Providers>
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  );
}
