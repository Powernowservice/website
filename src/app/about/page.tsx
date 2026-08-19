import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FieldImage } from "@/components/field-image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Power Now Service",
  description: "Power Now Service is a nationwide electrical company focused on load bank repair, critical-power systems, and evidence-led field service. Based in North Houston.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="page-hero dark-section"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} /><span className="hero-kicker">Field-tested electrical service</span><h1>Built Around the Equipment in Front of Us</h1><p>Power Now Service presents what can be supported with real field evidence: load bank repair, PCS and generator electrical systems, and practical electrical troubleshooting nationwide.</p></div></section>
        <section className="content-section"><div className="shell flagship-layout"><div className="flagship-copy"><span className="section-label">How the company is represented</span><h2>Precise about the work. Honest about the boundary.</h2><p>The site does not invent years in business, licenses, certifications, reviews, response times, warranties, addresses, or manufacturer authorizations. It shows real equipment and explains how scope is defined.</p><ul className="check-rows"><li><Check size={19} aria-hidden="true" /> Field evidence over stock imagery</li><li><Check size={19} aria-hidden="true" /> Equipment-specific estimates</li><li><Check size={19} aria-hidden="true" /> Repair-versus-replacement honesty</li><li><Check size={19} aria-hidden="true" /> Clear next actions by phone or calendar</li></ul></div><div className="flagship-media"><FieldImage src="/media/load-bank-cabinet-repair.jpg" alt="Open load bank equipment cabinet during Power Now Service field work" width={1440} height={1920} sizes="(max-width: 900px) 100vw, 55vw" /><span className="status-tag">Real field equipment</span></div></div></section>
        <section className="content-section surface-section"><div className="shell process-layout"><div className="process-intro"><span className="section-label">The operating approach</span><h2>See the system, not just the failed part.</h2><p>Load bank and critical-power equipment often links heat, airflow, controls, protection, conductors, and operating sequences.</p></div><ol className="process-steps"><li><span>1</span><div><h3>Observe</h3><p>Start with what changed, what is visible, and what the equipment is doing now.</p></div></li><li><span>2</span><div><h3>Trace</h3><p>Follow the connected failure path instead of treating one damaged part as the entire diagnosis.</p></div></li><li><span>3</span><div><h3>Define</h3><p>Separate approved work, limitations, parts, coordination, and the next decision.</p></div></li></ol></div></section>
        <section className="related-services"><div className="shell"><div className="related-heading"><h2>See the work behind the position</h2><Link href="/projects">View field work <ArrowRight size={18} aria-hidden="true" /></Link></div></div></section>
      </main>
      <CtaBand />
    </>
  );
}
