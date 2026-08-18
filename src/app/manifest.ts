import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Power Now Service",
    short_name: "Power Now",
    description: "Load bank repair and electrical service in North Houston.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101114",
    icons: [{ src: "/brand/power-now-mark.png", sizes: "512x512", type: "image/png" }],
  };
}
