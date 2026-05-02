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

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    skipped++;
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if "Platform Statistics" exists
  if (!content.includes('Platform Statistics')) {
    skipped++;
    continue;
  }
  
  // Remove the Platform Statistics section (from section start to next section)
  // Match the section that contains "Platform Statistics"
  const regex = /<section[^>]*>\s*<div[^>]*>\s*<h3[^>]*>Platform Statistics<\/h3>\s*<p[^>]*>Trusted by professionals worldwide<\/p>\s*<\/div>\s*<div[^>]*>\s*(?:<div[^>]*>\s*<div[^>]*>[^<]*<\/div>\s*<div[^>]*>[^<]*<\/div>\s*<div[^>]*>\s*<FiTrendingUp[^>]*><\/FiTrendingUp>\s*<span>[^<]*<\/span>\s*<\/div>\s*<\/div>\s*){2,}<\/div>\s*<\/section>/s;
  
  // Simpler approach: find and remove from "Platform Statistics" section to next section
  const startPattern = '<h3 className="section-title">Platform Statistics</h3>';
  const startIndex = content.indexOf(startPattern);
  
  if (startIndex === -1) {
    skipped++;
    continue;
  }
  
  // Find the section that contains Platform Statistics
  // Look backwards to find the <section opening
  let sectionStart = content.lastIndexOf('<section', startIndex);
  if (sectionStart === -1) sectionStart = startIndex;
  
  // Find the closing </section> tag after the stats grid
  // Look for the next section or the end of the stats
  let sectionEnd = content.indexOf('</section>', startIndex);
  if (sectionEnd === -1) {
    skipped++;
    continue;
  }
  sectionEnd += '</section>'.length;
  
  // Remove this section
  const newContent = content.substring(0, sectionStart) + content.substring(sectionEnd);
  
  fs.writeFileSync(pagePath, newContent, 'utf8');
  console.log(`✓ Removed Platform Statistics from ${dir}`);
  updated++;
}

console.log(`\n========================================`);
console.log('Removal Complete!');
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages`);
