const base = process.env.QA_BASE_URL || "http://127.0.0.1:3000";
const routes = [
  "/",
  "/load-bank-repair",
  "/pcs-gear-service",
  "/commercial-electrical-services",
  "/residential-electrical-services",
  "/generator-electrical-services",
  "/projects",
  "/service-areas/north-houston",
  "/about",
  "/contact",
  "/articles",
  "/articles/load-bank-failure-warning-signs",
  "/articles/load-bank-testing-vs-repair",
  "/articles/pcs-gear-maintenance-fundamentals",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
];

const errors = [];
const internalLinks = new Set();

for (const route of routes) {
  const response = await fetch(`${base}${route}`, { redirect: "manual" });
  const body = await response.text();
  if (response.status !== 200) errors.push(`${route}: expected 200, received ${response.status}`);

  if (route.endsWith(".txt") || route.endsWith(".xml") || route.endsWith(".webmanifest")) continue;

  if (!/<h1[ >]/i.test(body)) errors.push(`${route}: missing h1`);
  if (/LBJ General Hospital|IMG_8882/i.test(body)) errors.push(`${route}: excluded facility identifier was published`);

  const canonical = body.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const expected = `${base}${route === "/" ? "" : route}`;
  if (canonical !== expected) errors.push(`${route}: canonical ${canonical || "missing"}, expected ${expected}`);

  for (const match of body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1].replaceAll("&quot;", '"')); } catch (error) { errors.push(`${route}: invalid JSON-LD (${error.message})`); }
  }

  for (const match of body.matchAll(/href="(\/[^"]*)"/g)) {
    const link = match[1].split("#")[0].split("?")[0];
    if (link && !link.startsWith("//") && !link.startsWith("/_next")) internalLinks.add(link);
  }

  const telLinks = [...body.matchAll(/href="(tel:[^"]+)"/g)].map((match) => match[1]);
  if (telLinks.some((href) => href !== "tel:+19364023202")) errors.push(`${route}: non-approved telephone link found`);
  const calendlyLinks = [...body.matchAll(/href="(https:\/\/calendly\.com\/[^"]+)"/g)].map((match) => match[1]);
  if (calendlyLinks.some((href) => href !== "https://calendly.com/powernowservice/estimate")) errors.push(`${route}: non-approved Calendly link found`);
}

for (const link of internalLinks) {
  const response = await fetch(`${base}${link}`, { redirect: "manual" });
  if (response.status >= 400) errors.push(`broken internal link ${link}: ${response.status}`);
}

const notFound = await fetch(`${base}/this-route-does-not-exist`, { redirect: "manual" });
if (notFound.status !== 404) errors.push(`custom 404 returned ${notFound.status}`);
const notFoundBody = await notFound.text();
if (!notFoundBody.includes("This Page Is Not Connected")) errors.push("custom 404 content missing");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${routes.length} public endpoints and ${internalLinks.size} unique internal links.`);
