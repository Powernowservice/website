import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const publicRoutes = [
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
];

const viewports = [
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

test("every public page renders without console errors or broken images", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of publicRoutes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    const brokenImages = await page.locator("img").evaluateAll((images) => images.filter((image) => {
      const htmlImage = image as HTMLImageElement;
      return htmlImage.complete && htmlImage.naturalWidth === 0;
    }).map((image) => image.getAttribute("src")));
    expect(brokenImages, route).toEqual([]);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    for (const schema of schemas) expect(() => JSON.parse(schema), route).not.toThrow();
  }

  expect(errors).toEqual([]);
});

for (const viewport of viewports) {
  test(`homepage has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const dimensions = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.client + 1);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    if (viewport.width <= 620) {
      const dock = page.getByRole("navigation", { name: "Quick contact actions" });
      await expect(dock).toBeVisible();
      const dockBox = await dock.boundingBox();
      expect(Math.round(dockBox?.y ?? 0)).toBeGreaterThanOrEqual(viewport.height - 80);
    }
  });
}

test("mobile menu, FAQs, and exact conversion links work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByLabel("Open navigation menu").click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Load Bank Repair" })).toHaveAttribute("href", "/load-bank-repair");

  const quickActions = page.getByRole("navigation", { name: "Quick contact actions" });
  await expect(quickActions.getByRole("link", { name: "Call" })).toHaveAttribute("href", "tel:+19364023202");
  await expect(quickActions.getByRole("link", { name: "Book Estimate" })).toHaveAttribute("href", "https://calendly.com/powernowservice/estimate");

  await page.goto("/load-bank-repair");
  const firstFaq = page.locator(".faq-list details").first();
  await firstFaq.locator("summary").click();
  await expect(firstFaq).toHaveAttribute("open", "");
});

test("homepage has no serious or critical axe findings", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  const results = await new AxeBuilder({ page }).analyze();
  const severe = results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
  expect(severe).toEqual([]);
});

test("reduced motion disables decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const animation = await page.locator(".current-path").first().evaluate((element) => getComputedStyle(element).animationDuration);
  expect(["0s", "0.00001s"]).toContain(animation);
});
