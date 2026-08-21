/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "node:path";

// FR-A01/A02: PWA manifest + service worker so the app installs and works
// offline on Android. NFR-11: `singlefile` mode packs everything into one
// HTML file runnable via file://, which is incompatible with a real service
// worker, so PWA is skipped in that mode. `gh-pages` mode deploys to a
// project subpath (github.io/<repo>/) rather than a domain root — it needs
// HashRouter (see App.tsx) and a relative base like singlefile does, but
// otherwise builds like a normal hosted PWA (multi-file, service worker on).
export default defineConfig(({ mode }) => {
  const isSingleFile = mode === "singlefile";
  const isGhPages = mode === "gh-pages";
  const needsRelativeBase = isSingleFile || isGhPages;

  const outDirByMode: Record<string, string> = {
    singlefile: "dist-singlefile",
    "gh-pages": "dist-gh-pages",
  };

  return {
    // NFR-11 (singlefile) has no server at all, so relative asset URLs are
    // the only option under file://. gh-pages has a server, but not at the
    // domain root, so an absolute "/assets/..." would 404 — relative works
    // for both because index.html and its assets always sit next to each
    // other, regardless of what subpath they're served from.
    base: needsRelativeBase ? "./" : "/",
    plugins: [
      react(),
      tailwindcss(),
      ...(isSingleFile
        ? [viteSingleFile()]
        : [
            VitePWA({
              registerType: "autoUpdate",
              includeAssets: ["icons/*.png"],
              manifest: {
                lang: "vi",
                name: "Ôn luyện Tiếng Việt vào lớp 6",
                short_name: "Ôn Tiếng Việt 6",
                description:
                  "Ứng dụng ôn luyện Tiếng Việt vào lớp 6 chất lượng cao: lý thuyết, luyện tập, thi thử, lộ trình.",
                display: "standalone",
                orientation: "portrait",
                theme_color: "#0f766e",
                background_color: "#ffffff",
                // Relative so it resolves correctly whether the manifest is
                // served from the domain root or a gh-pages subpath.
                start_url: needsRelativeBase ? "." : "/",
                scope: needsRelativeBase ? "." : "/",
                icons: [
                  { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
                  { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
                  {
                    src: "icons/icon-maskable-512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "maskable",
                  },
                ],
              },
              workbox: {
                globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
                // Content JSON is fetched at runtime, not part of the JS bundle graph.
                runtimeCaching: [
                  {
                    urlPattern: /\/content\/.*\.json$/,
                    handler: "CacheFirst",
                    options: { cacheName: "ol6v-content" },
                  },
                ],
              },
            }),
          ]),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Separate output dirs per mode so builds never clobber each other.
      outDir: outDirByMode[mode] ?? "dist",
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./tests/setup.ts"],
      coverage: {
        provider: "v8",
        reporter: ["text", "html"],
        include: ["src/core/**", "src/data-access/**"],
        thresholds: {
          "src/core/**": { lines: 90, branches: 90, functions: 90, statements: 90 },
        },
      },
      exclude: ["tests/e2e/**", "node_modules/**"],
    },
  };
});
