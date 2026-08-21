// One-off dev utility: emits solid-color placeholder PNG icons so the PWA
// manifest (FR-A01) is installable before real branded icons are designed.
// Re-run with `node scripts/generate-placeholder-icons.mjs` if sizes change.
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

const OUT_DIR = new URL("../public/icons/", import.meta.url);
mkdirSync(OUT_DIR, { recursive: true });

const BRAND = [15, 118, 110]; // #0f766e (teal-700), matches theme_color

function crc32(buf) {
  let c;
  const table = crc32.table ?? (crc32.table = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c;
    }
    return t;
  })());
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

// Flat-color square with a lighter rounded "chữ V" glyph-ish mark, kept
// intentionally minimal — this is a placeholder, not final branding.
function makePng(size, { maskableSafeZone = false } = {}) {
  const [r, g, b] = BRAND;
  const rowBytes = size * 4 + 1; // filter byte + RGBA per pixel
  const raw = Buffer.alloc(rowBytes * size);
  const pad = maskableSafeZone ? Math.round(size * 0.1) : 0; // 10% safe margin

  for (let y = 0; y < size; y++) {
    const rowStart = y * rowBytes;
    raw[rowStart] = 0; // filter type 0 = None
    for (let x = 0; x < size; x++) {
      const px = rowStart + 1 + x * 4;
      const inSafe = x >= pad && x < size - pad && y >= pad && y < size - pad;
      if (!maskableSafeZone || inSafe) {
        raw[px] = r;
        raw[px + 1] = g;
        raw[px + 2] = b;
        raw[px + 3] = 255;
      } else {
        raw[px] = r;
        raw[px + 1] = g;
        raw[px + 2] = b;
        raw[px + 3] = 255; // maskable background must fill edge-to-edge too
      }
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const idat = deflateSync(raw);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const targets = [
  ["icon-192.png", 192, {}],
  ["icon-512.png", 512, {}],
  ["icon-maskable-512.png", 512, { maskableSafeZone: true }],
];

for (const [name, size, opts] of targets) {
  writeFileSync(new URL(name, OUT_DIR), makePng(size, opts));
  console.log(`wrote ${name} (${size}x${size})`);
}
