import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["pcs-gear-service"];

export const metadata = pageMetadata({ title: "PCS Gear Service Nationwide", description: service.description, path: "/pcs-gear-service", image: service.image });

export default function Page() {
  return <><JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.shortName, path: `/${service.slug}` }])]} /><ServicePage service={service} /></>;
}
