import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { projectMedia, services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-14");
  const core = ["", ...services.map((service) => `/${service.slug}`), "/projects", "/service-areas/nationwide", "/about", "/contact", "/articles"];
  return [
    ...core.map((path, index) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: updated,
      changeFrequency: index === 0 ? "weekly" as const : "monthly" as const,
      priority: index === 0 ? 1 : path === "/load-bank-repair" ? .9 : .7,
      images: path === "" ? projectMedia.slice(0, 5).map((item) => `${siteConfig.siteUrl}${item.src}`) : undefined,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.modified),
      changeFrequency: "monthly" as const,
      priority: .65,
      images: [`${siteConfig.siteUrl}${article.image}`],
    })),
  ];
}
