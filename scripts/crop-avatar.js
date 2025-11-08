#!/usr/bin/env node

// scripts/crop-avatar.js
// Usage: node scripts/crop-avatar.js <inputPath> <outputPath> [size]
// Example (PowerShell): node .\scripts\crop-avatar.js .\public\img\jobs\job1.jpg .\public\jobopening\avatars\job1-avatar.png 512

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const smartcrop = require('smartcrop-sharp');

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node scripts/crop-avatar.js <inputPath> <outputPath> [size]');
    process.exit(2);
  }

  const [inputPath, outputPath] = args;
  const size = parseInt(args[2], 10) || 512;

  if (!fs.existsSync(inputPath)) {
    console.error('Input file does not exist:', inputPath);
    process.exit(3);
  }

  try {
    const inputBuf = await fs.promises.readFile(inputPath);

    // Use smartcrop to find the best crop focusing on faces/subjects
    const cropResult = await smartcrop.crop(inputBuf, { width: size, height: size });
    const crop = cropResult.topCrop || cropResult.crops && cropResult.crops[0];

    // Fallback if smartcrop returns nothing
    if (!crop) {
      console.warn('Smartcrop returned no crop; falling back to center-crop.');
      const metadata = await sharp(inputBuf).metadata();
      const minDim = Math.min(metadata.width || size, metadata.height || size);
      const left = Math.max(0, Math.floor(((metadata.width || minDim) - minDim) / 2));
      const top = Math.max(0, Math.floor(((metadata.height || minDim) - minDim) / 2));
      await sharp(inputBuf)
        .extract({ left, top, width: minDim, height: minDim })
        .resize(size, size)
        .png({ quality: 90 })
        .toFile(outputPath);
      console.log('Saved (center fallback):', outputPath);
      return;
    }

    // Ensure crop coordinates and dims are integers and constrained within image bounds
    const metadata = await sharp(inputBuf).metadata();
    const imgW = metadata.width || size;
    const imgH = metadata.height || size;

    let left = Math.max(0, Math.floor(crop.x));
    let top = Math.max(0, Math.floor(crop.y));
    let width = Math.min(imgW - left, Math.floor(crop.width));
    let height = Math.min(imgH - top, Math.floor(crop.height));

    // If crop dimensions are zero or invalid, fallback to center crop
    if (width <= 0 || height <= 0) {
      console.warn('Invalid crop returned; using center fallback.');
      const minDim = Math.min(imgW, imgH);
      left = Math.max(0, Math.floor((imgW - minDim) / 2));
      top = Math.max(0, Math.floor((imgH - minDim) / 2));
      width = minDim;
      height = minDim;
    }

    await sharp(inputBuf)
      .extract({ left, top, width, height })
      .resize(size, size)
      .png({ quality: 90 })
      .toFile(outputPath);

    console.log('Cropped avatar saved to:', outputPath);
  } catch (err) {
    console.error('Error during cropping:', err);
    process.exit(4);
  }
}

main();
