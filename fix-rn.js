const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fixed = 0;
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      fixed += fixFiles(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('`r`n')) {
        content = content.replace(/`r`n/g, '\n');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed:', fullPath);
        fixed++;
      }
    }
  }
  return fixed;
}

const total = fixFiles('./app');
console.log('Total fixed:', total);
