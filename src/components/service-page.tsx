import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Phone } from "lucide-react";
import type { ServiceDefinition } from "@/lib/site";
import { services, siteConfig } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { FieldImage } from "@/components/field-image";
import { PowerCircuit } from "@/components/power-circuit";

export function ServicePage({ service }: { service: ServiceDefinition }) {
  return (
    <>
      <main>
        <section className="service-hero dark-section">
          <div className="shell">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: service.shortName }]} />
            <div className="service-hero-grid">
              <div className="service-hero-copy reveal-up">
                <span className="hero-kicker">North Houston electrical service</span>
                <h1>{service.name}</h1>
                <p className="hero-lede">{service.answer}</p>
                <div className="hero-actions">
                  <a className="button button-primary" href={siteConfig.bookingUrl}>
                    <CalendarCheck aria-hidden="true" size={20} /> Book an Estimate
                  </a>
                  <a className="button button-dark-outline" href={siteConfig.phoneHref}>
                    <Phone aria-hidden="true" size={20} /> Call {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <figure className="service-hero-media reveal-up">
                <FieldImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={service.imageWidth}
                  height={service.imageHeight}
                  priority
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
                <figcaption>Real equipment photographed during Power Now Service field work.</figcaption>
              </figure>
            </div>
          </div>
          <div className="service-circuit" aria-hidden="true"><PowerCircuit compact /></div>
        </section>

        <section className="content-section">
          <div className="shell two-column-content">
            <div>
              <span className="section-label">What the scope can include</span>
              <h2>Start with the reported fault. Inspect the connected system.</h2>
              <p>
                The work is defined by the installed equipment, what changed, what can be accessed
                safely, and what the estimate confirms—not by a one-size-fits-all package.
              </p>
            </div>
            <ul className="check-rows">
              {service.includes.map((item) => (
                <li key={item}><Check aria-hidden="true" size={20} /> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section surface-section">
          <div className="shell fit-grid">
            <div className="fit-title">
              <span className="section-label">Who this is for</span>
              <h2>Clear fit. Honest boundaries.</h2>
            </div>
            <div className="fit-list">
              {service.bestFor.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <aside className="limit-note">
              <strong>Important limit</strong>
              <p>{service.limits}</p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="shell process-layout">
            <div className="process-intro">
              <span className="section-label">How the estimate works</span>
              <h2>Three steps from symptom to defined scope.</h2>
              <p>Bring useful information early so the service conversation starts closer to the equipment.</p>
            </div>
            <ol className="process-steps">
              <li><span>1</span><div><h3>Describe what changed</h3><p>Share the location, symptoms, timing, equipment details, and safe-to-share photos.</p></div></li>
              <li><span>2</span><div><h3>Confirm fit and access</h3><p>Power Now Service reviews the request, service area, access, and likely inspection needs.</p></div></li>
              <li><span>3</span><div><h3>Define the work</h3><p>The estimate separates known scope, limitations, parts, coordination, and next steps.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="content-section dark-section faq-section">
          <div className="shell faq-layout">
            <div>
              <span className="section-label">Questions before booking</span>
              <h2>Direct answers about {service.shortName.toLowerCase()}.</h2>
              <p>These answers describe the published service without inventing guarantees.</p>
            </div>
            <FaqList items={service.questions} />
          </div>
        </section>

        <section className="related-services">
          <div className="shell">
            <div className="related-heading">
              <h2>Related electrical services</h2>
              <Link href="/contact">Discuss the scope <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
            <div className="service-link-list">
              {services.filter((item) => item.slug !== service.slug).map((item) => (
                <Link href={`/${item.slug}`} key={item.slug}>
                  <span>{item.shortName}</span>
                  <ArrowRight aria-hidden="true" size={20} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
    </>
  );
}
