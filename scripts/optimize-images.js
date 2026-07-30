/*
 * One-time build asset pipeline for public/images.
 *
 * - Shrinks the oversized source PNGs to WebP at sane display dimensions.
 * - Downloads the Unsplash gallery placeholders so the gallery works offline
 *   and doesn't depend on a third-party host at runtime.
 * - Removes dead assets: sgsits_seal.png (byte-identical dup of the logo),
 *   ref_layout.jpg (the design mock-up, never referenced) and qr.svg (unused).
 *
 * Run with: node scripts/optimize-images.js
 */
const fs = require("fs")
const path = require("path")
const https = require("https")
const sharp = require("sharp")

const imagesDir = path.join(__dirname, "..", "public", "images")
const galleryDir = path.join(imagesDir, "gallery")

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchBuffer(res.headers.location).then(resolve, reject)
          return
        }
        if (res.statusCode !== 200) {
          reject(new Error(`GET ${url} failed: ${res.statusCode}`))
          return
        }
        const chunks = []
        res.on("data", (c) => chunks.push(c))
        res.on("end", () => resolve(Buffer.concat(chunks)))
        res.on("error", reject)
      })
      .on("error", reject)
  })
}

async function reportSavings(label, beforePath, afterPath) {
  const before = fs.statSync(beforePath).size
  const after = fs.statSync(afterPath).size
  const pct = (100 * (1 - after / before)).toFixed(0)
  console.log(`${label}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB (-${pct}%)`)
}

async function main() {
  // 1. Logo: 1024x766 RGBA PNG shown at 64-96px tall. Resize to 2x the
  // largest display size (96px -> ~192px tall) and keep alpha as WebP.
  {
    const src = path.join(imagesDir, "sgsits_logo.png")
    const out = path.join(imagesDir, "sgsits_logo.webp")
    await sharp(src)
      .resize({ height: 192, withoutEnlargement: true })
      .webp({ quality: 92, alphaQuality: 100 })
      .toFile(out)
    await reportSavings("sgsits_logo", src, out)
  }

  // 2. Hero stage photo: source is already only 633x471 (it is displayed
  // upscaled in hero.tsx today). Don't upscale further here -- hero.tsx is
  // adjusted separately to render nearer this native size. Just recompress.
  {
    const src = path.join(imagesDir, "udaan_stage.png")
    const out = path.join(imagesDir, "udaan_stage.webp")
    await sharp(src).webp({ quality: 82 }).toFile(out)
    await reportSavings("udaan_stage", src, out)
  }

  // 3. Group photo: 597x399, displayed around 370x208 -- already has enough
  // headroom, just recompress.
  {
    const src = path.join(imagesDir, "udaan_group.png")
    const out = path.join(imagesDir, "udaan_group.webp")
    await sharp(src).webp({ quality: 82 }).toFile(out)
    await reportSavings("udaan_group", src, out)
  }

  // 4. Gallery: download the 4 remote Unsplash placeholders once, convert to
  // WebP sized for the gallery grid card (displayed ~416x208), and drop the
  // network dependency at runtime.
  fs.mkdirSync(galleryDir, { recursive: true })
  const remoteGalleryImages = [
    { id: "gallery-01", url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800" },
    { id: "gallery-02", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800" },
    { id: "gallery-03", url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800" },
    { id: "gallery-04", url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800" },
  ]
  for (const { id, url } of remoteGalleryImages) {
    const out = path.join(galleryDir, `${id}.webp`)
    const buf = await fetchBuffer(url)
    await sharp(buf).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out)
    console.log(`${id}: downloaded + converted (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`)
  }

  // 5. Delete dead assets.
  const deadAssets = ["sgsits_seal.png", "ref_layout.jpg", "qr.svg", "udaan_stage.png", "udaan_group.png", "sgsits_logo.png"]
  for (const name of deadAssets) {
    const p = path.join(imagesDir, name)
    if (fs.existsSync(p)) {
      fs.unlinkSync(p)
      console.log(`removed ${name}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
