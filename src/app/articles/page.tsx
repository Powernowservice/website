import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FieldImage } from "@/components/field-image";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Load Bank and Critical-Power Articles",
  description: "Sourced Power Now Service guides about load bank failure signs, testing versus repair, and PCS gear maintenance fundamentals.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <main>
        <section className="page-hero dark-section"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Articles" }]} /><span className="hero-kicker">Sourced critical-power guidance</span><h1>Load Bank and PCS Gear Field Notes</h1><p>Direct answers built around published manufacturer and service documentation, visible limitations, and practical next steps.</p></div></section>
        <section className="content-section"><div className="shell"><div className="article-list">
          {articles.map((article) => <Link className="article-card reveal-up" href={`/articles/${article.slug}`} key={article.slug}><div className="article-card-image"><FieldImage src={article.image} alt={article.imageAlt} width={1440} height={1920} sizes="(max-width: 620px) 100vw, 33vw" /></div><div className="article-card-copy"><span className="article-meta">Published {article.published} · {article.readingTime}</span><h2>{article.title}</h2><p>{article.description}</p><span className="read-link">Read the guide <ArrowRight size={18} aria-hidden="true" /></span></div></Link>)}
        </div></div></section>
      </main>
      <CtaBand />
    </>
  );
}
