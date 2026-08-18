import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarCheck, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { FieldImage } from "@/components/field-image";
import { JsonLd } from "@/components/json-ld";
import { articleBySlug, articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) return {};
  return pageMetadata({ title: article.title, description: article.description, path: `/articles/${article.slug}`, image: article.image });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) notFound();

  return (
    <>
      <JsonLd data={[articleSchema(article), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Articles", path: "/articles" }, { name: article.title, path: `/articles/${article.slug}` }])]} />
      <main>
        <section className="page-hero article-hero dark-section"><div className="shell article-hero-grid"><div><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Articles", href: "/articles" }, { label: article.title }]} /><span className="hero-kicker">Power Now Service field guide</span><h1>{article.title}</h1><p>{article.description}</p><div className="article-meta" style={{ color: "#b9c0ca", marginTop: "18px" }}>Published {article.published} · Updated {article.modified} · {article.readingTime}</div></div><div className="article-hero-media"><FieldImage src={article.image} alt={article.imageAlt} width={1440} height={1920} priority sizes="(max-width: 900px) 100vw, 48vw" /></div></div></section>
        <section className="content-section article-body"><div className="shell prose-layout"><article className="prose-main"><p className="article-direct-answer"><strong>Direct answer:</strong> {article.directAnswer}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p><strong>{section.answer}</strong></p>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}<section><h2>Frequently asked questions</h2><FaqList items={article.questions} /></section><aside className="article-sources"><h2>Sources and further reading</h2><ol>{article.sources.map((source) => <li key={source.href}><a href={source.href} rel="noreferrer">{source.label}</a></li>)}</ol><p>External source details can change. Manufacturer instructions for the installed equipment take priority over this general article.</p></aside></article><aside className="sticky-aside"><h2>Discuss the equipment</h2><p>Share the location, equipment information, symptom, and safe-to-share photos.</p><a className="button button-primary" href={siteConfig.bookingUrl}><CalendarCheck size={19} aria-hidden="true" /> Book an Estimate</a><a className="button button-outline" href={siteConfig.phoneHref}><Phone size={19} aria-hidden="true" /> Call {siteConfig.phoneDisplay}</a></aside></div></section>
      </main>
      <CtaBand />
    </>
  );
}
