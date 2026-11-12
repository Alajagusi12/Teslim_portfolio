import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://teslim-portfolio-dgxh.vercel.app/sitemap.xml",
  };
}
