import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Phone } from "lucide-react";
import { services, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-power-line" aria-hidden="true">
        <span />
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image
            src="/brand/power-now-service-logo.png"
            alt="Power Now Service"
            width={1000}
            height={249}
          />
          <p>
            Load bank repair, PCS gear support, and electrical
            service nationwide across all 50 states.
          </p>
          <div className="footer-actions">
            <a href={siteConfig.phoneHref}>
              <Phone aria-hidden="true" size={18} /> {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.bookingUrl}>
              <CalendarCheck aria-hidden="true" size={18} /> Book an Estimate
            </a>
          </div>
        </div>
        <div>
          <h2>Electrical Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`}>{service.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Power Now</h2>
          <ul>
            <li><Link href="/projects">Field Work</Link></li>
            <li><Link href="/service-areas/nationwide">Service Area</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-coverage">
          <h2>Nationwide Coverage</h2>
          <p className="footer-area-list">
            <Link href="/service-areas/nationwide">
              {siteConfig.serviceAreas.join(", ")}
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Power Now Service</span>
        <span>Service availability and scope are confirmed during estimating.</span>
      </div>
    </footer>
  );
}
