import { Jimp } from 'jimp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = join(__dirname, '..', 'src', 'assets');

const CREAM = { r: 253, g: 251, b: 247 };

// luminance helper
const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

// Turn near-white background into transparency, feathering mid-tone edges.
function knockoutWhite(img) {
  const { data } = img.bitmap;
  for (let i = 0; i < data.length; i += 4) {
    const l = lum(data[i], data[i + 1], data[i + 2]);
    let a;
    if (l >= 245) a = 0;
    else if (l <= 200) a = 255;
    else a = Math.round((245 - l) / 45 * 255);
    data[i + 3] = a;
  }
}

// Opaque bounding box (alpha > threshold)
function opaqueBounds(img, aMin = 16) {
  const { data, width, height } = img.bitmap;
  let minX = width, minY = height, maxX = -1, maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > aMin) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, minY, maxX, maxY };
}

// Rows that contain any opaque pixel → used to find emblem / wordmark bands
function opaqueRows(img, aMin = 16) {
  const { data, width, height } = img.bitmap;
  const rows = new Array(height).fill(false);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > aMin) { rows[y] = true; break; }
    }
  }
  return rows;
}

// Contiguous runs of opaque rows
function rowBands(rows) {
  const bands = [];
  let start = -1;
  for (let y = 0; y < rows.length; y++) {
    if (rows[y] && start === -1) start = y;
    else if (!rows[y] && start !== -1) { bands.push([start, y - 1]); start = -1; }
  }
  if (start !== -1) bands.push([start, rows.length - 1]);
  return bands;
}

// Horizontal opaque extent within a row range
function colExtent(img, y0, y1, aMin = 16) {
  const { data, width } = img.bitmap;
  let minX = width, maxX = -1;
  for (let y = y0; y <= y1; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > aMin) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  return { minX, maxX };
}

function recolor(img, c) {
  const { data } = img.bitmap;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) { data[i] = c.r; data[i + 1] = c.g; data[i + 2] = c.b; }
  }
}

const PAD = 12; // breathing room around the cropped marks

async function main() {
  const src = await Jimp.read(join(assets, 'logo-source.jpg'));
  knockoutWhite(src);

  const rows = opaqueRows(src);
  const bands = rowBands(rows).filter(([a, b]) => b - a > 8); // ignore stray noise
  bands.sort((a, b) => a[0] - b[0]);
  console.log('bands (y ranges):', bands);

  const W = src.bitmap.width, H = src.bitmap.height;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // Emblem = first (topmost) band; full lockup = whole opaque area
  const emblemBand = bands[0];
  const full = opaqueBounds(src);

  const cropTo = (y0, y1) => {
    const { minX, maxX } = colExtent(src, y0, y1);
    const x = clamp(minX - PAD, 0, W);
    const y = clamp(y0 - PAD, 0, H);
    const w = clamp(maxX - minX + PAD * 2, 1, W - x);
    const h = clamp(y1 - y0 + PAD * 2, 1, H - y);
    return { x, y, w, h };
  };

  const emblemRect = cropTo(emblemBand[0], emblemBand[1]);
  const lockupRect = {
    x: clamp(full.minX - PAD, 0, W),
    y: clamp(full.minY - PAD, 0, H),
    w: clamp(full.maxX - full.minX + PAD * 2, 1, W),
    h: clamp(full.maxY - full.minY + PAD * 2, 1, H),
  };
  lockupRect.w = clamp(lockupRect.w, 1, W - lockupRect.x);
  lockupRect.h = clamp(lockupRect.h, 1, H - lockupRect.y);

  console.log('emblem rect:', emblemRect);
  console.log('lockup rect:', lockupRect);

  // Green (original color) versions
  const emblemGreen = src.clone().crop(emblemRect);
  const lockupGreen = src.clone().crop(lockupRect);
  await emblemGreen.write(join(assets, 'logo-mark.png'));
  await lockupGreen.write(join(assets, 'logo-lockup.png'));

  // Cream versions for dark backgrounds
  const emblemCream = src.clone().crop(emblemRect);
  recolor(emblemCream, CREAM);
  await emblemCream.write(join(assets, 'logo-mark-cream.png'));

  const lockupCream = src.clone().crop(lockupRect);
  recolor(lockupCream, CREAM);
  await lockupCream.write(join(assets, 'logo-lockup-cream.png'));

  console.log('done.');
}

main().catch((e) => { console.error(e); process.exit(1); });
