import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, basename } from "node:path";
import { readdirSync } from "node:fs";

const root = import.meta.dirname;

/* Every root-level .html file becomes a build entry automatically,
   so new pages only need their .html + main.tsx scaffold. */
const inputs: Record<string, string> = {};
for (const f of readdirSync(root)) {
  if (f.endsWith(".html")) inputs[basename(f, ".html")] = resolve(root, f);
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: inputs,
    },
  },
});
