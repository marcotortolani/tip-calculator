import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      includeAssets: [
        "/img/calc-logo-192.png",
        "/img/calc-logo-512.png",
      ],
      manifest: {
        name: "Tip Calculator",
        short_name: "TipCalc",
        lang: "en",
        description:
          "App for calculating tips, designed by Frontend Mentor, developed by Marco Tortolani.",
        theme_color: "#000",
        icons: [
          {
            src: "/img/calc-logo-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/calc-logo-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  base: "/",
});
