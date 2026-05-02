const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Get all directories
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${dirs.length} directories\n`);

let updated = 0;
let skipped = 0;

// Pattern to match the entire Trust Indicators section
const startMarker = '        {/* Quick Stats */}';
const endMarker = '        {/* CTA Section */}';

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    skipped++;
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if the pattern exists
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);
  
  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    skipped++;
    continue;
  }
  
  // Remove everything from startMarker to just before endMarker
  const newContent = content.substring(0, startIndex) + endMarker + '\n' + content.substring(endIndex + endMarker.length);
  
  fs.writeFileSync(pagePath, newContent, 'utf8');
  console.log(`✓ Removed Trust Indicators from ${dir}`);
  updated++;
}

console.log(`\n========================================`);
console.log('Removal Complete!');
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages`);
