import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { services, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "North Houston Load Bank Repair and Electrical Service Area",
  description: "Power Now Service serves North Houston, Spring, The Woodlands, Conroe, Tomball, Humble, and Kingwood for load bank and electrical work.",
  path: "/service-areas/north-houston",
});

const faqs = [
  { question: "Which North Houston communities are listed?", answer: "The published corridor includes North Houston, Spring, The Woodlands, Conroe, Tomball, Humble, and Kingwood. Call with the exact project address to confirm travel and service fit." },
  { question: "Do you travel outside the listed corridor?", answer: "This site only confirms the published North Houston corridor. A project outside it can be discussed by phone, but the website does not promise coverage until Power Now Service confirms the location and scope." },
  { question: "Is there a separate page for every city?", answer: "No. This is one substantive regional page rather than duplicated doorway pages. The service pages explain the actual work available throughout the confirmed corridor." },
];

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "North Houston Service Area", path: "/service-areas/north-houston" }])} />
      <main>
        <section className="page-hero dark-section">
          <div className="shell">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "North Houston Service Area" }]} />
            <span className="hero-kicker">One honest regional footprint</span>
            <h1>Load Bank Repair and Electrical Service Across North Houston</h1>
            <p>Power Now Service serves the confirmed north Houston corridor for specialized load-bank work and supporting commercial, generator, PCS, and residential electrical needs.</p>
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
              <h2>North Houston and the north corridor.</h2>
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
        <section className="content-section dark-section faq-section"><div className="shell faq-layout"><div><span className="section-label">Coverage questions</span><h2>Confirm the address before the visit.</h2><p>The website states the known corridor without inventing a larger service radius.</p></div><FaqList items={faqs} /></div></section>
      </main>
      <CtaBand />
    </>
  );
}
