import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["residential-electrical-services"];

export const metadata = pageMetadata({ title: "Residential Electrical Services in North Houston", description: service.description, path: "/residential-electrical-services", image: service.image });

export default function Page() {
  return <><JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.shortName, path: `/${service.slug}` }])]} /><ServicePage service={service} /></>;
}
