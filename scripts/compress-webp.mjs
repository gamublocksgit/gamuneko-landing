import sharp from 'sharp';
import { readdir, mkdir, copyFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SRC = 'public/assets';
const BACKUP = 'public/assets/_original';

const targets = {
  'app_background.webp': { width: 1920, quality: 62, effort: 6 },
  'munchkin_cat_idle_0.webp': { width: 640, quality: 78, effort: 6 },
  'munchkin_cat_sleep_1.webp': { width: 640, quality: 78, effort: 6 },
  'munchkin_cat_angry_0.webp': { width: 640, quality: 78, effort: 6 },
};

if (!existsSync(BACKUP)) await mkdir(BACKUP, { recursive: true });

for (const [name, opts] of Object.entries(targets)) {
  const src = path.join(SRC, name);
  const backup = path.join(BACKUP, name);
  if (!existsSync(backup)) await copyFile(src, backup);

  const before = (await stat(backup)).size;
  const { width, ...webpOpts } = opts;
  let pipeline = sharp(backup);
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  const buf = await pipeline.webp(webpOpts).toBuffer();
  await sharp(buf).toFile(src);
  const after = (await stat(src)).size;
  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(`${name}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB (-${pct}%)`);
}
