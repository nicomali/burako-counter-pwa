import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  plugins: [
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
