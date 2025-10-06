const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const distRoot = path.join(root, "dist");
if (!fs.existsSync(distRoot)) {
  console.error("dist not found — run `astro build` first");
  process.exit(1);
}

// try to read base from astro.config.mjs or src/consts.* (simple heuristics)
function readBase(p) {
  try {
    const s = fs.readFileSync(p, "utf8");
    const m = s.match(/base\s*[:=]\s*['"`](\/[^'"`]*?)['"`]/) || s.match(/base\s*:\s*['"`](\/[^'"`]*?)['"`]/);
    return m ? m[1] : "";
  } catch (e) { return ""; }
}

let base = readBase(path.join(root, "astro.config.mjs")) || readBase(path.join(root, "src", "consts.ts")) || "";
if (!base) {
  // fallback: if dist has a single non-meta directory, treat it as base
  const dirs = fs.readdirSync(distRoot, { withFileTypes: true }).filter(d => d.isDirectory()).map(d=>d.name).filter(n=>!["pagefind","~partytown","assets"].includes(n));
  if (dirs.length === 1) base = `/${dirs[0]}`;
}

const baseDir = (base || "").replace(/^\//, "").replace(/\/$/,"");
const siteDist = baseDir ? path.join(distRoot, baseDir) : distRoot;

if (!fs.existsSync(siteDist)) {
  console.warn("Target site folder not found:", siteDist, "— creating it");
  fs.mkdirSync(siteDist, { recursive: true });
}

console.log("Running pagefind for:", siteDist);
const out = path.join(siteDist, "pagefind");
const res = spawnSync("npx", ["pagefind", "--site", siteDist, "--output-path", out, "--verbose"], { stdio: "inherit", shell: true });
if (res.error || res.status !== 0) {
  console.error("pagefind failed");
  process.exit(res.status || 1);
}

console.log("pagefind done ->", out);
process.exit(0);