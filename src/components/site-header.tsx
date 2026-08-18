import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ChevronDown, Menu, Phone } from "lucide-react";
import { navItems, services, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Serving North Houston and the north corridor</span>
          <a href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand-link" href="/" aria-label="Power Now Service home">
            <Image
              src="/brand/power-now-service-logo.png"
              alt="Power Now Service"
              width={1000}
              height={249}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <details className="nav-services">
              <summary>
                Services <ChevronDown aria-hidden="true" size={16} />
              </summary>
              <div className="service-menu">
                <p>Electrical service built around real equipment.</p>
                {services.map((service) => (
                  <Link href={`/${service.slug}`} key={service.slug}>
                    <span>{service.shortName}</span>
                    <small>{service.description}</small>
                  </Link>
                ))}
              </div>
            </details>
            {navItems.slice(2).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="text-action" href={siteConfig.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a className="button button-primary button-compact" href={siteConfig.bookingUrl}>
              <CalendarCheck aria-hidden="true" size={18} />
              Book an Estimate
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <Menu aria-hidden="true" size={26} />
            </summary>
            <nav aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/commercial-electrical-services">Commercial Electrical</Link>
              <Link href="/residential-electrical-services">Residential Electrical</Link>
              <Link href="/generator-electrical-services">Generator Electrical</Link>
              <Link href="/contact">Contact</Link>
              <div className="mobile-menu-actions">
                <a className="button button-primary" href={siteConfig.bookingUrl}>
                  Book an Estimate
                </a>
                <a className="button button-outline" href={siteConfig.phoneHref}>
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
