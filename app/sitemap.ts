import type { MetadataRoute } from "next";
import { site, diseases } from "@/data/site";

export const dynamic = "force-static";

/**
 * Fixed content date. Using `new Date()` here would stamp every URL with the
 * build time on each deploy, which tells crawlers the whole site changed when
 * it did not — bump this only when the content actually changes.
 */
const lastModified = new Date("2026-09-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/diseases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/achievements`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const diseaseRoutes: MetadataRoute.Sitemap = diseases.map((disease) => ({
    url: `${site.url}/diseases/${disease.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...diseaseRoutes];
}
