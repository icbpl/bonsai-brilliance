import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/bonsai-brilliance/" : "/",  // ✅ Auto-detect GitHub Pages
  server: {
    host: "::",  // IPv6 support
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",  // ✅ Fix missing assets
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
