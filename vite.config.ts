import tailwindcss from "tailwindcss";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import tailwindConfig from "./tailwind.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  define: {},
  build: {
    outDir: "./dist",
    sourcemap: "inline",
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./index.html", import.meta.url)),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: tailwindConfig,
        }),
      ],
    },
  },
});
