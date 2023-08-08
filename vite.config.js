import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      injectRegister: "inline",
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      includeAssets: ["./public/logo-app.png"],
      manifest: {
        name: "Tip Calculator",
        short_name: "TipCalc",
        lang: "en",
        description:
          "App for calculating tips, designed by Frontend Mentor, developed by Marco Tortolani.",
        theme_color: "#000",
        icons: [
          {
            src: "./public/logo-app.png",
            sizes: "144x144",
            type: "image",
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
