import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  server: {
    allowedHosts: true,
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Burako Counter",
        short_name: "Burako",
        start_url: "./",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2c2c2c",
      },
    }),
  ],
});
