import { CalendarCheck, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CtaBand({
  title = "Show us the equipment. Tell us what changed.",
  copy = "Book an estimate or call with the site, symptoms, equipment details, and safe-to-share photos.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="cta-band">
      <div className="shell cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="cta-actions">
          <a className="button button-amber" href={siteConfig.bookingUrl}>
            <CalendarCheck aria-hidden="true" size={20} /> Book an Estimate
          </a>
          <a className="button button-dark-outline" href={siteConfig.phoneHref}>
            <Phone aria-hidden="true" size={20} /> Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
