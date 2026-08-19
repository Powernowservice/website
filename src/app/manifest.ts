import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Power Now Service",
    short_name: "Power Now",
    description: "Nationwide load bank repair and electrical service based in North Houston.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101114",
    icons: [{ src: "/brand/power-now-mark.png", sizes: "512x512", type: "image/png" }],
  };
}
