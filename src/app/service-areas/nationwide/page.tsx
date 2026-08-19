import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { services, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nationwide Load Bank Repair and Electrical Service Area",
  description: "Power Now Service serves all 50 states for load bank and electrical work, with on-call support nationwide.",
  path: "/service-areas/nationwide",
});

const faqs = [
  { question: "Do you serve all 50 states?", answer: "Yes, Power Now Service provides nationwide on-call service. While we are based in North Houston, we travel anywhere across the country to support critical power systems." },
  { question: "Is there a travel fee for out-of-state projects?", answer: "Travel logistics and costs are discussed upfront during the estimate process. Call with your project location to define the travel details." },
  { question: "Do you respond to emergencies nationwide?", answer: "We offer on-call service nationwide. Contact us immediately to coordinate travel and emergency repair response." },
];

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Nationwide Service Area", path: "/service-areas/nationwide" }])} />
      <main>
        <section className="page-hero dark-section">
          <div className="shell">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Nationwide Service Area" }]} />
            <span className="hero-kicker">All 50 states. On call.</span>
            <h1>Nationwide Load Bank Repair and Electrical Service</h1>
            <p>Power Now Service is based in North Houston but deploys globally and serves all 50 states for specialized load-bank work and critical-power needs.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={siteConfig.bookingUrl}><CalendarCheck size={20} aria-hidden="true" /> Book an Estimate</a>
              <a className="button button-dark-outline" href={siteConfig.phoneHref}><Phone size={20} aria-hidden="true" /> Call {siteConfig.phoneDisplay}</a>
            </div>
          </div>
        </section>
        <section className="content-section">
          <div className="shell two-column-content">
            <div>
              <span className="section-label">Published coverage</span>
              <h2>Nationwide. All 50 states.</h2>
              <p>Exact travel, scheduling, access, and equipment fit are confirmed during the estimate conversation.</p>
            </div>
            <ul className="check-rows">
              {siteConfig.serviceAreas.map((area) => <li key={area}><MapPin size={19} aria-hidden="true" /> {area}</li>)}
            </ul>
          </div>
        </section>
        <section className="content-section surface-section">
          <div className="shell">
            <div className="section-heading"><span className="section-label">Services throughout the corridor</span><h2>One regional page. Deep service pages.</h2><p>Use the individual service routes for scope, repair areas, limits, and next steps.</p></div>
            <div className="service-index" style={{ borderColor: "var(--line)" }}>
              {services.map((service, index) => <a href={`/${service.slug}`} key={service.slug} style={{ borderColor: "var(--line)" }}><span className="index">{String(index + 1).padStart(2, "0")}</span><h3>{service.shortName}</h3><p style={{ color: "#59616b" }}>{service.description}</p><span aria-hidden="true">→</span></a>)}
            </div>
          </div>
        </section>
        <section className="content-section dark-section faq-section"><div className="shell faq-layout"><div><span className="section-label">Coverage questions</span><h2>Nationwide deployment details.</h2><p>We provide clear expectations for travel, scheduling, and on-call support across all 50 states.</p></div><FaqList items={faqs} /></div></section>
      </main>
      <CtaBand />
    </>
  );
}
