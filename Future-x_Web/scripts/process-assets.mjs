import { mkdir, readdir } from "node:fs/promises";
import sharp from "sharp";

await mkdir("play-store-assets/screenshots", { recursive: true });

const sourceLogo = "public/logo512.png";
await sharp(sourceLogo).resize(192, 192).png().toFile("public/logo192.tmp.png");
await sharp(sourceLogo).resize(512, 512).png().toFile("public/logo512.tmp.png");
await sharp(sourceLogo).resize(180, 180).png().toFile("public/apple-touch-icon.tmp.png");
await sharp(sourceLogo).resize(512, 512).png().toFile("play-store-assets/app-icon-512.png");

const screenshots = (await readdir("public/screenshots")).filter((name) => name.endsWith(".png"));
for (const name of screenshots) {
  const input = `public/screenshots/${name}`;
  await sharp(input).png({ compressionLevel: 9 }).toFile(`${input}.tmp`);
  await sharp(input).png({ compressionLevel: 9 }).toFile(`play-store-assets/screenshots/${name}`);
}

const background = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#080b10"/>
  <g stroke="#39d8e8" stroke-opacity=".08"><path d="M0 70H1200M0 140H1200M0 210H1200M0 280H1200M0 350H1200M0 420H1200M0 490H1200M0 560H1200"/><path d="M80 0V630M160 0V630M240 0V630M320 0V630M400 0V630M480 0V630M560 0V630M640 0V630M720 0V630M800 0V630M880 0V630M960 0V630M1040 0V630M1120 0V630"/></g>
  <text x="90" y="245" fill="#ffffff" font-family="Arial, sans-serif" font-size="94" font-weight="800">FUTURE<tspan fill="#39d8e8">-X</tspan></text>
  <text x="94" y="315" fill="#f6c45a" font-family="Arial, sans-serif" font-size="31" font-weight="700">PLAY · LEARN · ENGAGE · EARN X-COINS</text>
  <text x="94" y="372" fill="#a9b3bf" font-family="Arial, sans-serif" font-size="24">Responsible rewards. Clear eligibility. Your choice.</text>
</svg>`);

await sharp(background).composite([{ input: await sharp(sourceLogo).resize(270, 270).png().toBuffer(), left: 835, top: 180 }]).png().toFile("public/og-image.tmp.png");
await sharp(background).resize(1024, 538, { fit: "cover" }).extract({ left: 0, top: 19, width: 1024, height: 500 }).composite([{ input: await sharp(sourceLogo).resize(210, 210).png().toBuffer(), left: 710, top: 145 }]).png().toFile("play-store-assets/feature-graphic-1024x500.png");
