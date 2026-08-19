import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { MobileActions } from "@/components/mobile-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const barlowHeadline = localFont({
  variable: "--font-barlow-headline",
  display: "swap",
  preload: true,
  src: [{ path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-800-normal.woff2", weight: "800", style: "normal" }],
});

const barlowCondensed = localFont({
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: false,
  src: [
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const sourceSans = localFont({
  variable: "--font-source-sans",
  display: "swap",
  preload: false,
  src: [
    { path: "../../node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Nationwide Load Bank Repair | Power Now Service",
    template: "%s | Power Now Service",
  },
  description:
    "Nationwide load bank repair, PCS gear service, and electrical troubleshooting across all 50 states. Based in North Houston.",
  applicationName: siteConfig.name,
  category: "Electrical service",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/brand/power-now-mark.png",
    apple: "/brand/power-now-mark.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    title: "Nationwide Load Bank Repair | Power Now Service",
    description: siteConfig.tagline,
    url: "/",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Power Now Service load bank repair" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nationwide Load Bank Repair | Power Now Service",
    description: siteConfig.tagline,
    images: ["/opengraph-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101114",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowHeadline.variable} ${barlowCondensed.variable} ${sourceSans.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <MobileActions />
      </body>
    </html>
  );
}
