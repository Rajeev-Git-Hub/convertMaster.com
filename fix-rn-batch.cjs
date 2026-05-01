const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  arrayOfFiles = arrayOfFiles || [];
  
  files.forEach((file) => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file.name), arrayOfFiles);
    } else if (file.name.endsWith('.tsx')) {
      arrayOfFiles.push(path.join(dirPath, file.name));
    }
  });
  
  return arrayOfFiles;
}

const files = getAllFiles('./app');
let fixed = 0;

files.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('`r`n')) {
    content = content.replace(/`r`n/g, '\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', path.basename(filePath));
    fixed++;
  }
});

console.log('Total files fixed:', fixed);
