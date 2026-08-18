import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { FieldImage } from "@/components/field-image";
import { PowerCircuit } from "@/components/power-circuit";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { projectMedia, services, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Load Bank Repair and Electrical Service in North Houston",
  description:
    "Power Now Service repairs load banks and supports PCS gear, generator electrical systems, commercial facilities, and homes across North Houston.",
  path: "/",
});

const homeFaqs = [
  {
    question: "Does Power Now Service repair load banks in the Houston area?",
    answer:
      "Power Now Service serves the North Houston corridor, including Spring, The Woodlands, Conroe, Tomball, Humble, and Kingwood. Repair scope can include fans, resistive elements, contactors, wiring, controls, power supplies, and visible heat damage after the unit is evaluated.",
  },
  {
    question: "What information should I provide for a load bank estimate?",
    answer:
      "Provide the equipment location, manufacturer and model, nameplate photo, full cabinet photo, close-ups of the affected area, reported symptoms, and any displayed fault information. Do not open energized equipment solely to take photos.",
  },
  {
    question: "Is every damaged load bank repairable?",
    answer:
      "No. Repair depends on damage extent, equipment condition, parts availability, manufacturer support, access, and whether the repair is safe and economically practical.",
  },
  {
    question: "What other electrical services are available?",
    answer:
      "Published services include PCS gear support, commercial electrical troubleshooting, panels and breakers, lighting, outlets and switches, generator and transfer-equipment electrical work, and residential electrical service.",
  },
];

export default function HomePage() {
  const evidence = [projectMedia[0], projectMedia[3], projectMedia[4], projectMedia[6]];

  return (
    <>
      <main>
        <section className="home-hero dark-section">
          <div className="shell home-hero-grid">
            <div className="home-hero-copy">
              <span className="hero-kicker">North Houston critical-power service</span>
              <h1>Load Bank Repair <span>and Electrical Service</span> in North Houston</h1>
              <p className="hero-lede">
                Field-focused troubleshooting for damaged load banks, PCS gear, generator electrical
                systems, commercial facilities, and homes across the north Houston corridor.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={siteConfig.bookingUrl}>
                  <CalendarCheck aria-hidden="true" size={20} /> Book an Estimate
                </a>
                <a className="button button-dark-outline" href={siteConfig.phoneHref}>
                  <Phone aria-hidden="true" size={20} /> Call {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="hero-microproof" aria-label="Service principles">
                <span><CheckCircle2 size={17} aria-hidden="true" /> Real field photography</span>
                <span><CheckCircle2 size={17} aria-hidden="true" /> Defined repair scope</span>
                <span><CheckCircle2 size={17} aria-hidden="true" /> Honest equipment limits</span>
              </div>
            </div>
            <figure className="home-hero-media">
              <FieldImage
                src="/media/load-bank-cabinet-repair.jpg"
                alt="Open load bank cabinet during electrical repair in the field"
                width={1440}
                height={1920}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption className="hero-photo-label">
                Actual load bank equipment photographed during Power Now Service field work.
              </figcaption>
            </figure>
          </div>
          <div className="hero-circuit" aria-hidden="true"><PowerCircuit /></div>
        </section>

        <section className="answer-strip" aria-label="Direct answer">
          <div className="shell answer-strip-inner">
            <strong>What does Power Now Service do?</strong>
            <p>
              Power Now Service specializes in load bank repair in North Houston and supports the
              connected electrical systems around critical power—from cooling fans and resistor banks
              to controls, contactors, transfer equipment, PCS gear, panels, circuits, and wiring.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="shell flagship-layout">
            <div className="flagship-copy reveal-up">
              <span className="section-label">Flagship service</span>
              <h2>When the load bank fails, inspect the whole failure path.</h2>
              <p>
                Burned parts rarely tell the full story. Airflow, switching, conductors, control power,
                protection, and surrounding heat exposure all help determine whether repair is safe and
                practical.
              </p>
              <Link className="button button-primary" href="/load-bank-repair">
                Explore Load Bank Repair <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
            <div className="flagship-media reveal-up">
              <FieldImage
                src="/media/load-bank-resistor-elements.jpg"
                alt="Rows of resistive load bank elements inside an equipment cabinet"
                width={1440}
                height={1920}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
              <span className="status-tag">Resistor bank + airflow path</span>
            </div>
          </div>
        </section>

        <section className="content-section surface-section">
          <div className="shell">
            <SectionHeading
              label="Field evidence"
              title="Real equipment. Separate examples. No manufactured before-and-after story."
              copy="These images document different equipment conditions and repair activities. They are presented as individual field examples, not as same-unit before-and-after pairs."
            />
            <div className="evidence-grid">
              {evidence.map((item) => (
                <figure className="evidence-item reveal-up" key={item.src}>
                  <div className="evidence-photo">
                    <FieldImage src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 620px) 100vw, 50vw" />
                  </div>
                  <figcaption className="evidence-copy">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="evidence-note">
              Repairability is equipment-specific. Parts, documentation, damage extent, access, and safe
              operating conditions affect the recommendation.
            </p>
          </div>
        </section>

        <section className="content-section dark-section">
          <div className="shell">
            <SectionHeading
              label="Electrical service lines"
              title="Load bank expertise first. Broader electrical support when the scope connects."
              copy="Choose the closest service, then share the equipment, symptoms, location, and access details during the estimate conversation."
            />
            <div className="service-index">
              {services.map((service, index) => (
                <Link href={`/${service.slug}`} key={service.slug}>
                  <span className="index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.shortName}</h3>
                  <p>{service.description}</p>
                  <ArrowRight aria-hidden="true" size={22} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pcs-band">
          <div className="shell pcs-grid">
            <div className="pcs-copy reveal-up">
              <span className="section-label">PCS gear and controls</span>
              <h2>Trace the signal. Confirm the operating sequence.</h2>
              <p>
                PCS service starts with alarms, documentation, controller state, breaker status,
                wiring, and the intended sequence. A screen is useful evidence, but it is only one view
                into the system.
              </p>
              <Link className="button button-outline" href="/pcs-gear-service">
                View PCS Gear Service <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
            <div className="pcs-media reveal-up">
              <FieldImage
                src="/media/pcs-generator-control-panel.jpg"
                alt="PCS gear cabinet with generator protection and power controls"
                width={1920}
                height={1440}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <span className="system-online">System status review</span>
            </div>
          </div>
        </section>

        <section className="content-section surface-section">
          <div className="shell process-layout">
            <div className="process-intro">
              <span className="section-label">A practical service path</span>
              <h2>From the reported symptom to a defined next step.</h2>
              <p>Useful photos and accurate equipment information make the first conversation more productive.</p>
            </div>
            <ol className="process-steps">
              <li><span>1</span><div><h3>Share the equipment and symptom</h3><p>Send the location, nameplate, full equipment view, visible condition, and what changed.</p></div></li>
              <li><span>2</span><div><h3>Confirm scope and access</h3><p>Discuss service fit, safe access, shutdown needs, documentation, and likely parts or coordination.</p></div></li>
              <li><span>3</span><div><h3>Inspect, define, and act</h3><p>The approved work follows the observed condition, honest limits, and a clearly stated next step.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="content-section dark-section">
          <div className="shell coverage-layout">
            <div className="coverage-copy">
              <span className="section-label">North Houston service corridor</span>
              <h2>One genuine regional service page—not a stack of thin city pages.</h2>
              <p>
                Power Now Service publishes one clear service-area page covering the confirmed north
                Houston corridor. Call with the exact project address to confirm travel and fit.
              </p>
              <Link className="button button-dark-outline" href="/service-areas/north-houston">View the Service Area</Link>
            </div>
            <div className="coverage-diagram">
              <ul className="area-list" aria-label="Published service areas">
                {siteConfig.serviceAreas.map((area) => <li key={area}>{area}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="shell">
            <SectionHeading
              label="Critical-power field notes"
              title="Direct answers for the next equipment decision."
              copy="Sourced guides explain the difference between testing and repair, common failure areas, and the fundamentals of PCS gear maintenance."
            />
            <div className="article-list">
              {articles.map((article) => (
                <Link className="article-card reveal-up" href={`/articles/${article.slug}`} key={article.slug}>
                  <div className="article-card-image">
                    <FieldImage src={article.image} alt={article.imageAlt} width={1440} height={1920} sizes="(max-width: 620px) 100vw, 33vw" />
                  </div>
                  <div className="article-card-copy">
                    <span className="article-meta">{article.readingTime}</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <span className="read-link">Read the guide <ArrowRight size={18} aria-hidden="true" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section dark-section faq-section">
          <div className="shell faq-layout">
            <div>
              <span className="section-label">Questions before you book</span>
              <h2>Load bank repair and electrical service answers.</h2>
              <p>Visible answers help people and answer engines understand the actual service without unsupported claims.</p>
            </div>
            <FaqList items={homeFaqs} />
          </div>
        </section>
      </main>
      <CtaBand />
    </>
  );
}
