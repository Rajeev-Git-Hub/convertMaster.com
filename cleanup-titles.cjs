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
  let originalContent = content;
  
  // Remove patterns like " – hm to yd" from titles (everything from space+en-dash to the end of quote)
  content = content.replace(/ – [^'"]+/g, '');
  
  // Remove the word "Free" or "free" from descriptions (case insensitive)
  content = content.replace(/Free /gi, '');
  content = content.replace(/\.Free /gi, '. ');
  
  // Clean up double spaces
  content = content.replace(/  +/g, ' ');
  
  // Clean up ".." that might have been created
  content = content.replace(/\.\./g, '.');
  
  // Clean up ". ." pattern
  content = content.replace(/\. \./g, '.');
  
  if (content !== originalContent) {
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✓ Updated ${dir}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n========================================`);
console.log('Cleanup Complete!');
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages`);
