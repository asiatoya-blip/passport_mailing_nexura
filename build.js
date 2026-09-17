#!/usr/bin/env node

/**
 * MJML Build Script
 * Compiles all MJML templates in src/templates/ to HTML in dist/
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  // Ensure dist directory exists
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log('✓ Created dist/ directory');
  }

  // Find all MJML files in templates directory
  const templatesDir = path.join(__dirname, 'src', 'templates');
  const files = fs.readdirSync(templatesDir)
    .filter(file => file.endsWith('.mjml'));

  console.log(`\n📧 Compiling ${files.length} MJML templates...`);

  // Compile each file individually
  let successCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const inputPath = path.join(templatesDir, file);
      const outputFile = file.replace('.mjml', '.html');
      const outputPath = path.join(distDir, outputFile);

      execSync(`mjml "${inputPath}" -o "${outputPath}"`, {
        stdio: 'pipe',
        cwd: __dirname
      });

      console.log(`  ✓ ${file} → ${outputFile}`);
      successCount++;
    } catch (error) {
      console.error(`  ✗ ${file} - ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\n📊 Build Summary:`);
  console.log(`  ✓ Success: ${successCount}/${files.length}`);
  if (errorCount > 0) {
    console.log(`  ✗ Failed: ${errorCount}/${files.length}`);
    process.exit(1);
  }

  console.log(`\n✅ All templates compiled successfully!`);
  console.log(`📁 Output: ${distDir}\n`);

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
