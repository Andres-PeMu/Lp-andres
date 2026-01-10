#!/usr/bin/env node

/**
 * Script para optimizar imágenes usando Sharp
 * Optimiza todas las imágenes en src/assets/images y las guarda en src/assets/images/optimized
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../src/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/optimized');

const ALLOWED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];
const MAX_WIDTH = 1920;
const QUALITY = 85;

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const metadata = await sharp(inputPath).metadata();

    let sharpInstance = sharp(inputPath);

    // Redimensionar si es necesario
    if (metadata.width > MAX_WIDTH) {
      sharpInstance = sharpInstance.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Optimizar según el formato
    if (ext === '.png') {
      await sharpInstance
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharpInstance
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outputPath);
    } else if (ext === '.webp') {
      await sharpInstance
        .webp({ quality: QUALITY })
        .toFile(outputPath);
    } else {
      await sharpInstance.toFile(outputPath);
    }

    const originalSize = (await fs.stat(inputPath)).size;
    const optimizedSize = (await fs.stat(outputPath)).size;
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(2);

    console.log(
      `✓ Optimizado: ${path.basename(inputPath)} - ${(originalSize / 1024).toFixed(2)}KB → ${(optimizedSize / 1024).toFixed(2)}KB (${reduction}% reducción)`
    );

    return { originalSize, optimizedSize, reduction };
  } catch (error) {
    console.error(`✗ Error optimizando ${inputPath}:`, error.message);
    return null;
  }
}

async function getAllImages(dirPath) {
  const files = await fs.readdir(dirPath, { withFileTypes: true });
  const images = [];

  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);

    if (file.isDirectory() && file.name !== 'optimized') {
      const subImages = await getAllImages(fullPath);
      images.push(...subImages);
    } else if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();
      if (ALLOWED_FORMATS.includes(ext)) {
        images.push(fullPath);
      }
    }
  }

  return images;
}

async function main() {
  try {
    console.log('🖼️  Iniciando optimización de imágenes...\n');

    await ensureDirectoryExists(OUTPUT_DIR);

    const images = await getAllImages(INPUT_DIR);

    if (images.length === 0) {
      console.log('ℹ️  No se encontraron imágenes para optimizar.');
      return;
    }

    console.log(`📸 Encontradas ${images.length} imagen(es) para optimizar.\n`);

    const results = [];

    for (const imagePath of images) {
      const relativePath = path.relative(INPUT_DIR, imagePath);
      const outputPath = path.join(OUTPUT_DIR, relativePath);

      // Crear directorio de salida si no existe
      await ensureDirectoryExists(path.dirname(outputPath));

      const result = await optimizeImage(imagePath, outputPath);
      if (result) {
        results.push(result);
      }
    }

    if (results.length > 0) {
      const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
      const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
      const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(2);

      console.log('\n📊 Resumen:');
      console.log(`   Total original: ${(totalOriginal / 1024).toFixed(2)}KB`);
      console.log(`   Total optimizado: ${(totalOptimized / 1024).toFixed(2)}KB`);
      console.log(`   Reducción total: ${totalReduction}%`);
      console.log(`\n✅ Optimización completada. Las imágenes están en: ${OUTPUT_DIR}`);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
