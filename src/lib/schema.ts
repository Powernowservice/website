import type { ArticleEntry } from "@/lib/articles";
import type { ServiceDefinition } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/brand/power-now-service-logo.png`,
        telephone: "+1-936-402-3202",
        areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}

export function serviceSchema(service: ServiceDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/${service.slug}#service`,
    name: service.name,
    description: service.description,
    url: `${siteConfig.siteUrl}/${service.slug}`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
    serviceType: service.shortName,
    image: `${siteConfig.siteUrl}${service.image}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function articleSchema(article: ArticleEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.modified,
    mainEntityOfPage: `${siteConfig.siteUrl}/articles/${article.slug}`,
    image: `${siteConfig.siteUrl}${article.image}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}
