import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const output = path.join(root, "public", "media");
const logoOutput = path.join(root, "public", "brand");

const jobs = [
  ["Images/Pictures/Load Bank/load bank repair 10.jpeg", "load-bank-cabinet-repair"],
  ["Images/Pictures/Load Bank/load bank repair.jpeg", "load-bank-field-testing"],
  ["Images/Pictures/Load Bank/load bank repair 9.JPG", "load-bank-failed-contactors"],
  ["Images/Pictures/Load Bank/load bank repair 8.jpeg", "load-bank-resistor-elements"],
  ["Images/Pictures/Load Bank/load bank repair 7.JPG", "load-bank-heat-damaged-elements"],
  ["Images/Pictures/Load Bank/load bank repair 6.jpeg", "load-bank-replacement-cooling-fans"],
  ["Images/Pictures/Load Bank/load bank repair 5.jpeg", "load-bank-damaged-cooling-fans"],
  ["Images/Pictures/Load Bank/load bank repair 4.jpeg", "transfer-switch-interior"],
  ["Images/Pictures/Load Bank/load bank repair 3.jpeg", "transfer-switch-controls"],
  ["Images/Pictures/Load Bank/load bank repair 2.jpeg", "switchgear-power-cabling"],
  ["Images/Pictures/PCS Gear/IMG_2800.jpeg", "pcs-generator-control-panel"],
  ["Images/Pictures/PCS Gear/image (1).png", "pcs-generator-system-display"],
];

await fs.mkdir(output, { recursive: true });
await fs.mkdir(logoOutput, { recursive: true });

for (const [source, name] of jobs) {
  const input = path.join(root, source);
  const base = sharp(input).rotate().resize({
    width: 1920,
    height: 1920,
    fit: "inside",
    withoutEnlargement: true,
  });

  await Promise.all([
    base.clone().avif({ quality: 60, effort: 6 }).toFile(path.join(output, `${name}.avif`)),
    base.clone().webp({ quality: 78, effort: 6 }).toFile(path.join(output, `${name}.webp`)),
    base.clone().jpeg({ quality: 84, progressive: true, mozjpeg: true }).toFile(path.join(output, `${name}.jpg`)),
  ]);
}

const logoPath = path.join(root, "Images/Logo/logo-no-background.png");
await sharp(logoPath)
  .resize({ width: 1000, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(path.join(logoOutput, "power-now-service-logo.png"));

await sharp(logoPath)
  .extract({ left: 0, top: 0, width: 255, height: 249 })
  .resize(192, 192, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(logoOutput, "power-now-mark.png"));

const hero = await sharp(path.join(output, "load-bank-resistor-elements.jpg"))
  .resize(580, 630, { fit: "cover", position: "attention" })
  .linear(0.72, -6)
  .toBuffer();

const ogOverlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="660" height="630" fill="#101114"/>
  <rect x="620" y="0" width="130" height="630" fill="url(#fade)"/>
  <defs>
    <linearGradient id="fade" x1="0" x2="1">
      <stop offset="0" stop-color="#101114" stop-opacity="1"/>
      <stop offset="1" stop-color="#101114" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="26" height="630" fill="#0037ff"/>
  <path d="M72 110 H540" stroke="#3347ff" stroke-width="4"/>
  <circle cx="74" cy="110" r="8" fill="#f4a62a"/>
  <text x="72" y="205" fill="#ffffff" font-family="Arial, sans-serif" font-size="78" font-weight="800">LOAD BANK</text>
  <text x="72" y="284" fill="#ffffff" font-family="Arial, sans-serif" font-size="78" font-weight="800">REPAIR</text>
  <text x="72" y="354" fill="#9da4ae" font-family="Arial, sans-serif" font-size="34">North Houston electrical service</text>
  <rect x="72" y="418" width="390" height="76" rx="8" fill="#0037ff"/>
  <text x="108" y="469" fill="#ffffff" font-family="Arial, sans-serif" font-size="31" font-weight="700">(936) 402-3202</text>
  <text x="72" y="566" fill="#f4a62a" font-family="Arial, sans-serif" font-size="25" font-weight="700">POWER NOW SERVICE</text>
</svg>`);

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#101114" },
})
  .composite([
    { input: hero, left: 620, top: 0 },
    { input: ogOverlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, progressive: true, mozjpeg: true })
  .toFile(path.join(root, "public", "opengraph-image.jpg"));

console.log(`Optimized ${jobs.length} approved field images and brand assets.`);
