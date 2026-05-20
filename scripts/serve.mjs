// Usage: node scripts/serve.mjs [port=5332] [dir=site]
// Local preview that behaves like Netlify: "/x" → 301 "/x/" when x/ is a folder, "/x/" → x/index.html,
// anything missing → 404.html with status 404, byte ranges for media.
// The pages use absolute links to the Netlify URL and page transitions only run for same-origin links, so text responses
// get that URL swapped for this server's address on the fly (files untouched).
// POST /wp-json/tubwell/v1/request (booking + pickup-bag forms) answers {"ok":true}, like netlify/functions/request.mjs.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = Number(process.argv[2] || 5332);
const ROOT = path.resolve(import.meta.dirname, "..", process.argv[3] || "site");
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".mjs": "application/javascript",
  ".json": "application/json", ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif",
  ".ico": "image/x-icon", ".mp4": "video/mp4", ".webm": "video/webm", ".woff2": "font/woff2", ".woff": "font/woff",
  ".ttf": "font/ttf", ".txt": "text/plain", ".xml": "application/xml", ".pdf": "application/pdf", ".vtt": "text/vtt",
};

const ORIGINS = ["https://tubwell-by-elmehdi.netlify.app"]; // the URL written in the pages
const TEXTEXT = /\.(html|css|js|mjs|json|xml|xsl|svg|webmanifest|txt)$/i;
function swap(buf, req) {
  const me = "http://" + (req.headers.host || "localhost:" + port);
  const esc = (u) => u.replace(/\//g, "\\/"); // JSON-escaped form: https:\/\/host
  let s = buf.toString("utf8");
  for (const o of ORIGINS) s = s.split(o).join(me).split(esc(o)).join(esc(me)).split(encodeURIComponent(o)).join(encodeURIComponent(me));
  return Buffer.from(s);
}
function send(req, res, file, status = 200) {
  const stat = fs.statSync(file);
  const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
  if (TEXTEXT.test(file)) {
    const body = swap(fs.readFileSync(file), req);
    res.writeHead(status, { "content-type": type, "content-length": body.length, "cache-control": "no-cache" });
    return res.end(req.method === "HEAD" ? undefined : body);
  }
  const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
  if (range && status === 200) {
    const start = range[1] ? Number(range[1]) : stat.size - Number(range[2]);
    const end = range[1] && range[2] ? Math.min(Number(range[2]), stat.size - 1) : stat.size - 1;
    res.writeHead(206, { "content-type": type, "accept-ranges": "bytes", "content-length": end - start + 1, "content-range": `bytes ${start}-${end}/${stat.size}` });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(status, { "content-type": type, "content-length": stat.size, "accept-ranges": "bytes", "cache-control": "no-cache" });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(file).pipe(res);
}

http.createServer((req, res) => {
  if (req.method === "POST" && req.url.startsWith("/wp-json/tubwell/v1/request")) {
    req.resume(); res.writeHead(200, { "content-type": "application/json" }); return res.end('{"ok":true}');
  }
  let p;
  try { p = decodeURIComponent(new URL(req.url, "http://x").pathname); } catch { p = "/"; }
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT)) { res.writeHead(400); return res.end(); }
  try {
    const st = fs.statSync(f);
    if (st.isDirectory()) {
      if (!p.endsWith("/")) { res.writeHead(301, { location: p + "/" + (new URL(req.url, "http://x").search) }); return res.end(); }
      const idx = path.join(f, "index.html");
      if (fs.existsSync(idx)) return send(req, res, idx);
    } else return send(req, res, f);
  } catch {}
  if (process.env.LOG404) console.log("404", req.url);
  send(req, res, path.join(ROOT, "404.html"), 404);
}).listen(port, () => console.log(`Tubwell → http://localhost:${port}`));
