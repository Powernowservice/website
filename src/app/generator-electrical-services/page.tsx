import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["generator-electrical-services"];

export const metadata = pageMetadata({ title: "Generator Electrical Services Nationwide", description: service.description, path: "/generator-electrical-services", image: service.image });

export default function Page() {
  return <><JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.shortName, path: `/${service.slug}` }])]} /><ServicePage service={service} /></>;
}
