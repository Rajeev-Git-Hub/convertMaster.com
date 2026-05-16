const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function findPageFiles(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      const pagePath = path.join(full, 'page.tsx');
      if (fs.existsSync(pagePath)) results.push(pagePath);
      // also recurse deeper in case there are nested folders
      results.push(...findPageFiles(full));
    }
  }
  return results;
}

const files = findPageFiles(appDir);
console.log(`Found ${files.length} page.tsx files`);

const replacements = [
  { r: /\bYd2\b/gi, rep: 'yd²' },
  { r: /\byd2\b/gi, rep: 'yd²' },
  { r: /\bKm2\b/gi, rep: 'km²' },
  { r: /\bkm2\b/gi, rep: 'km²' },
  { r: /\bM2\b/gi, rep: 'm²' },
  { r: /\bm2\b/gi, rep: 'm²' },
  { r: /\bCm2\b/gi, rep: 'cm²' },
  { r: /\bcm2\b/gi, rep: 'cm²' },
  { r: /\bMm2\b/gi, rep: 'mm²' },
  { r: /\bmm2\b/gi, rep: 'mm²' },
  { r: /\bIn2\b/gi, rep: 'in²' },
  { r: /\bin2\b/gi, rep: 'in²' },
  { r: /\bFt2\b/gi, rep: 'ft²' },
  { r: /\bft2\b/gi, rep: 'ft²' },
  { r: /\bMi2\b/gi, rep: 'mi²' },
  { r: /\bmi2\b/gi, rep: 'mi²' }
];

let totalUpdated = 0;
let totalFiles = 0;

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace only inside JSX text nodes: between > and <
    content = content.replace(/>([^<>]+)</gms, (match, inner) => {
      let newInner = inner;
      for (const { r, rep } of replacements) {
        newInner = newInner.replace(r, rep);
      }
      if (newInner !== inner) {
        changed = true;
        return '>' + newInner + '<';
      }
      return match;
    });

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      totalUpdated++;
      console.log(`Updated: ${file}`);
    }
    totalFiles++;
  } catch (err) {
    console.error(`Failed: ${file} -> ${err.message}`);
  }
}

console.log(`\nDone. Files scanned: ${totalFiles}, files updated: ${totalUpdated}`);
