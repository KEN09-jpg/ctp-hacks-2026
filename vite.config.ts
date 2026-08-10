import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
// https://vitejs.dev/config/
export default defineConfig({
  base: "/ctp-hacks-2026/",
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
 