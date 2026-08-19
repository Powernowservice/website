import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["load-bank-repair"];

export const metadata = pageMetadata({
  title: "Nationwide Load Bank Repair",
  description: "Load bank repair for fan, resistor, contactor, wiring, control-power, and heat-damage concerns nationwide.",
  path: "/load-bank-repair",
  image: service.image,
});

export default function Page() {
  return <><JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.shortName, path: `/${service.slug}` }])]} /><ServicePage service={service} /></>;
}
