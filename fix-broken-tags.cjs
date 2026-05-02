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
  
  // Fix the broken pattern: Converter"text-base -> Converter</h1>\n<p className="text-base
  if (content.includes('Converter"text-base text-gray-600 max-w-2xl mx-auto">')) {
    content = content.replace(
      /Converter"text-base text-gray-600 max-w-2xl mx-auto">/g,
      'Converter</h1>\n<p className="text-base text-gray-600 max-w-2xl mx-auto">'
    );
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✓ Fixed ${dir}`);
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
