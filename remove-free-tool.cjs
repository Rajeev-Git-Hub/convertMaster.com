const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Get all converter directories
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name.includes('-to-') && !dirent.name.includes('blog'))
  .map(dirent => dirent.name);

console.log(`Found ${dirs.length} converter directories\n`);

let updated = 0;
let skipped = 0;

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    skipped++;
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if " | Free Tool" exists
  if (!content.includes(' | Free Tool')) {
    skipped++;
    continue;
  }
  
  // Remove " | Free Tool" from the content
  const newContent = content.replace(/ \| Free Tool/g, '');
  
  if (content !== newContent) {
    fs.writeFileSync(pagePath, newContent, 'utf8');
    console.log(`✓ Updated ${dir}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n========================================`);
console.log('Update Complete!');
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages`);
