import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return <main><section className="page-hero dark-section"><div className="shell"><span className="hero-kicker">404 — circuit open</span><h1>This Page Is Not Connected</h1><p>The address does not match a published Power Now Service page. Return to the service overview or call about the equipment.</p><div className="hero-actions"><Link className="button button-primary" href="/"><ArrowLeft size={19} aria-hidden="true" /> Return Home</Link><a className="button button-dark-outline" href={siteConfig.phoneHref}><Phone size={19} aria-hidden="true" /> Call {siteConfig.phoneDisplay}</a></div></div></section></main>;
}
