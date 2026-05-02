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
  
  // Check if "Why Choose ConvertMaster?" exists
  if (!content.includes('Why Choose ConvertMaster?')) {
    skipped++;
    continue;
  }
  
  // Find the section containing "Why Choose ConvertMaster?"
  const startPattern = '{/* Trust Indicators */}';
  const startIndex = content.indexOf(startPattern);
  
  if (startIndex === -1) {
    // Try alternative pattern
    const altPattern = '<h3 className="section-title">Why Choose ConvertMaster?</h3>';
    const altIndex = content.indexOf(altPattern);
    if (altIndex === -1) {
      skipped++;
      continue;
    }
    // Find section start from alt index
    let sectionStart = content.lastIndexOf('<section', altIndex);
    if (sectionStart === -1) sectionStart = altIndex;
    
    // Find the closing </section> tag
    let sectionEnd = content.indexOf('</section>', altIndex);
    if (sectionEnd === -1) {
      skipped++;
      continue;
    }
    sectionEnd += '</section>'.length;
    
    // Remove this section
    const newContent = content.substring(0, sectionStart) + content.substring(sectionEnd);
    fs.writeFileSync(pagePath, newContent, 'utf8');
    console.log(`✓ Removed "Why Choose ConvertMaster?" from ${dir}`);
    updated++;
  } else {
    // Find the closing </section> tag after the start pattern
    let sectionEnd = content.indexOf('</section>', startIndex);
    if (sectionEnd === -1) {
      skipped++;
      continue;
    }
    sectionEnd += '</section>'.length;
    
    // Remove this section
    const newContent = content.substring(0, startIndex) + content.substring(sectionEnd);
    fs.writeFileSync(pagePath, newContent, 'utf8');
    console.log(`✓ Removed "Why Choose ConvertMaster?" from ${dir}`);
    updated++;
  }
}

console.log(`\n========================================`);
console.log('Removal Complete!');
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages`);
