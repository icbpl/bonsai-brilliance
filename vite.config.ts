import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/bonsai-brilliance/",  // ✅ REQUIRED for GitHub Pages (use your repo name)
  server: {
    host: "::",  // IPv6 support
    port: 8080,
  },
  build: {
    outDir: "dist",  // ✅ Make sure GitHub Pages serves from 'dist'
    emptyOutDir: true,
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
