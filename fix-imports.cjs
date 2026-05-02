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
  
  // Fix the import path from '././components/ConverterCard' to '../../components/ConverterCard'
  if (content.includes("from '././components/ConverterCard'")) {
    content = content.replace("from '././components/ConverterCard'", "from '../../components/ConverterCard'");
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✓ Fixed import in ${dir}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n========================================`);
console.log('Fix Complete!');
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages`);
