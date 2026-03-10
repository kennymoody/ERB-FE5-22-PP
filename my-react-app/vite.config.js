import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["reactserver.kennymoody.net"], // DANGER: Allows requests from any host
    port: 5600,
  },
  base: "https://kennymoody.github.io/ERB-FE5-22-PP/",
});
