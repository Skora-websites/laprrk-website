import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        chrome: resolve(root, "chrome-demo.html"),
        preview: resolve(root, "design-preview.html"),
      },
    },
  },
});
