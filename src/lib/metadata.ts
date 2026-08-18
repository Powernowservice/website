import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image = "/opengraph-image.jpg" }: PageMetadata): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      title,
      description,
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${siteConfig.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
