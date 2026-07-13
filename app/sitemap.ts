import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
