import { CalendarCheck, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileActions() {
  return (
    <nav className="mobile-action-dock" aria-label="Quick contact actions">
      <a href={siteConfig.phoneHref}>
        <Phone aria-hidden="true" size={19} />
        Call
      </a>
      <a href={siteConfig.bookingUrl}>
        <CalendarCheck aria-hidden="true" size={19} />
        Book Estimate
      </a>
    </nav>
  );
}
