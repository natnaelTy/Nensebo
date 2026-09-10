import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "public/images";
const files = readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));

let before = 0,
  after = 0,
  changed = 0,
  failures = 0;
const rows = [];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

for (const name of files) {
  const p = join(DIR, name);
  const input = readFileSync(p);
  const origSize = input.length;
  let out = null;

  try {
    if (/\.jpe?g$/i.test(name)) {
      out = await sharp(input)
        .rotate() // respect EXIF orientation
        .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 82, progressive: true, mozjpeg: true })
        .toBuffer({ resolveWithObject: true });
    } else if (/\.png$/i.test(name)) {
      out = await sharp(input)
        .png({ compressionLevel: 9, palette: true, quality: 80 })
        .toBuffer({ resolveWithObject: true });
    }
  } catch (e) {
    console.error(`FAIL ${name}: ${e.message}`);
    failures++;
  }

  if (!out) {
    before += origSize;
    after += origSize;
    continue;
  }

  // Only overwrite if meaningfully smaller (≥2% saving) to avoid churn
  if (out.data.length < origSize * 0.98) {
    writeFileSync(p, out.data);
    changed++;
  }
  const newSize = out.data.length < origSize * 0.98 ? out.data.length : origSize;
  before += origSize;
  after += newSize;
  rows.push({ File: name, Before: kb(origSize), After: kb(newSize), Saved: kb(origSize - newSize) });
}

console.table(rows);
console.log(
  `\n✅ ${changed}/${files.length} files rewritten · ` +
    `${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(1)} MB ` +
    `(${(100 - (after / before) * 100).toFixed(0)}% smaller)` +
    (failures ? ` · ${failures} failed` : "")
);
