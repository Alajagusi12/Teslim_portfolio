import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const base = "https://teslim-portfolio-dgxh.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
