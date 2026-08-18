import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FieldImage } from "@/components/field-image";
import { pageMetadata } from "@/lib/metadata";
import { projectMedia } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Load Bank and Critical-Power Field Work",
  description: "Real Power Now Service field photography showing load bank damage, repair activities, PCS gear, and commercial electrical systems.",
  path: "/projects",
  image: "/media/load-bank-heat-damaged-elements.jpg",
});

export default function ProjectsPage() {
  return (
    <>
      <main>
        <section className="page-hero dark-section">
          <div className="shell">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Field Work" }]} />
            <span className="hero-kicker">Power Now Service field evidence</span>
            <h1>Load Bank, PCS Gear, and Electrical Field Work</h1>
            <p>Real equipment is the proof. Each image below is a separate field example unless its caption explicitly says otherwise.</p>
          </div>
        </section>
        <section className="content-section">
          <div className="shell">
            <div className="project-gallery">
              {projectMedia.map((item) => (
                <figure className="project-card reveal-up" key={item.src}>
                  <div className="project-card-media">
                    <FieldImage src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 620px) 100vw, 50vw" />
                  </div>
                  <figcaption>
                    <span className="tag">{item.label}</span>
                    <h2>{item.title}</h2>
                    <p>{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
    </>
  );
}
