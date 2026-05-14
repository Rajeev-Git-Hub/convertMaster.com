const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Find all page.tsx files
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        files.push(pagePath);
      }
    }
  }
  
  return files;
}

const files = findFiles(appDir);
console.log(`Found ${files.length} page.tsx files`);

// Filter files that contain "100% Accurate"
const affectedFiles = files.filter(f => {
  const content = fs.readFileSync(f, 'utf-8');
  return content.includes('100% Accurate');
});

console.log(`Total files to update: ${affectedFiles.length}`);

const oldPattern = `        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">100% Accurate</h4>
              <p className="text-xs text-gray-600 mt-1">Standard formulas</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Instant Results</h4>
              <p className="text-xs text-gray-600 mt-1">Real-time conversion</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Easy to Use</h4>
              <p className="text-xs text-gray-600 mt-1">Simple interface</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Always Available</h4>
              <p className="text-xs text-gray-600 mt-1">24/7 access</p>
            </div>
          </div>
        </section>`;

const newPattern = `        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-3xl">
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Instant Results</h4>
              <p className="text-xs text-gray-600 mt-1">Real-time conversion</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Easy to Use</h4>
              <p className="text-xs text-gray-600 mt-1">Simple interface</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Always Available</h4>
              <p className="text-xs text-gray-600 mt-1">24/7 access</p>
            </div>
          </div>
        </section>`;

let replacedCount = 0;
let failedCount = 0;

for (const file of affectedFiles) {
  try {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes(oldPattern)) {
      content = content.replace(oldPattern, newPattern);
      fs.writeFileSync(file, content, 'utf-8');
      replacedCount++;
      console.log(`Success: ${path.basename(path.dirname(file))}`);
    } else {
      console.log(`Skipped (pattern not found): ${path.basename(path.dirname(file))}`);
    }
  } catch (error) {
    failedCount++;
    console.log(`Error: ${path.basename(path.dirname(file))} - ${error.message}`);
  }
}

console.log(`\nReplacement Complete!`);
console.log(`Files updated: ${replacedCount}`);
if (failedCount > 0) {
  console.log(`Failed: ${failedCount}`);
}
