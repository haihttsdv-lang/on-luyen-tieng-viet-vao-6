// One-off dev utility: serves a build output directory under a URL prefix,
// simulating GitHub Pages' project-site subpath (github.io/<repo>/) so the
// gh-pages build's relative base + HashRouter can be verified locally
// before trusting CI with it. Not part of the app itself.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const [, , distDir = "dist-gh-pages", prefix = "/on-luyen-tieng-viet-vao-6", portArg = "4174"] = process.argv;
const port = Number(portArg);

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  if (!url.pathname.startsWith(prefix)) {
    res.writeHead(404).end(`Only ${prefix}/* is served (simulating a gh-pages project site)`);
    return;
  }
  let rel = url.pathname.slice(prefix.length) || "/";
  if (rel.endsWith("/")) rel += "index.html";
  const filePath = path.join(process.cwd(), distDir, rel);
  try {
    await stat(filePath);
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
    res.end(await readFile(filePath));
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(port, () => {
  console.log(`Serving ${distDir} at http://localhost:${port}${prefix}/`);
});
