const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Category mapping
const categoryMap = {
  'cm': 'length', 'mm': 'length', 'meters': 'length', 'meter': 'length', 'km': 'length',
  'inch': 'length', 'inches': 'length', 'feet': 'length', 'foot': 'length',
  'mile': 'length', 'miles': 'length', 'dm': 'length', 'dam': 'length', 'hm': 'length',
  'gram': 'weight', 'grams': 'weight', 'kg': 'weight', 'kilogram': 'weight', 'lbs': 'weight',
  'lb': 'weight', 'pound': 'weight', 'pounds': 'weight', 'oz': 'weight', 'ounce': 'weight',
  'ton': 'weight', 'tons': 'weight',
  'celsius': 'temperature', 'fahrenheit': 'temperature', 'kelvin': 'temperature',
  'c': 'speed', 'mph': 'speed', 'kmh': 'speed', 'mps': 'speed', 'fts': 'speed',
  'bytes': 'data', 'kb': 'data', 'mb': 'data', 'gb': 'data', 'tb': 'data', 'pb': 'data',
  'bit': 'data', 'kbit': 'data', 'mbit': 'data', 'gbit': 'data',
  'second': 'time', 'minute': 'time', 'hour': 'time', 'day': 'time', 'week': 'time', 'month': 'time', 'year': 'time',
  'm2': 'area', 'ft2': 'area', 'acre': 'area', 'hectare': 'area'
};

const categoryPathMap = {
  'length': 'length-converter',
  'weight': 'weight-converter',
  'temperature': 'temperature-converter',
  'speed': 'speed-converter',
  'data': 'data-converter',
  'time': 'time-converter',
  'area': 'area-converter'
};

function getCategory(from, to) {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();
  
  for (const [key, value] of Object.entries(categoryMap)) {
    if (fromLower.includes(key) || toLower.includes(key)) {
      return value;
    }
  }
  return 'length';
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function generateNewContent(dirName, metadata) {
  const parts = dirName.split('-to-');
  const fromUnit = parts[0];
  const toUnit = parts[1] || '';
  
  const fromLabel = toTitleCase(fromUnit);
  const toLabel = toTitleCase(toUnit);
  
  const category = metadata.category || getCategory(fromUnit, toUnit);
  const categoryPath = categoryPathMap[category] || `${category}-converter`;
  const categoryTitle = toTitleCase(category);
  
  const title = metadata.title || `${fromLabel} to ${toLabel} Converter`;
  const description = metadata.description || `Free ${fromUnit} to ${toUnit} converter. Convert ${fromLabel} to ${toLabel} instantly.`;
  
  return `import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  openGraph: {
    title: '${title}',
    description: '${description}',
    type: 'website',
  },
};

export default function ConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">${title}</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            ${description}
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="${category}" defaultFrom="${fromUnit}" defaultTo="${toUnit}" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Conversions</h3>
            <p className="section-subtitle">Quick reference for ${fromLabel} to ${toLabel} conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">${fromLabel} to ${toLabel}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 ${fromUnit} = ? ${toUnit}</li>
                <li>10 ${fromUnit} = ? ${toUnit}</li>
                <li>100 ${fromUnit} = ? ${toUnit}</li>
                <li>1000 ${fromUnit} = ? ${toUnit}</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">${toLabel} to ${fromLabel}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 ${toUnit} = ? ${fromUnit}</li>
                <li>10 ${toUnit} = ? ${fromUnit}</li>
                <li>100 ${toUnit} = ? ${fromUnit}</li>
                <li>1000 ${toUnit} = ? ${fromUnit}</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Large Conversions</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>100 ${fromUnit} = ? ${toUnit}</li>
                <li>500 ${fromUnit} = ? ${toUnit}</li>
                <li>1000 ${fromUnit} = ? ${toUnit}</li>
                <li>5000 ${fromUnit} = ? ${toUnit}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert</h3>
            <p className="section-subtitle">Simple steps to convert ${fromLabel} to ${toLabel}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the number of ${fromLabel} you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Units</h4>
              <p className="text-sm text-gray-600">Choose ${fromLabel} as input and ${toLabel} as output</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">Click convert to see your result instantly</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about ${fromLabel} to ${toLabel} conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I convert ${fromLabel} to ${toLabel}?</h4>
              <p className="text-sm text-gray-600">Use our converter tool above. Simply enter the value, select the units, and click convert.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is the conversion formula?</h4>
              <p className="text-sm text-gray-600">The conversion depends on the specific units. Our calculator handles all the math for you automatically.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is this conversion accurate?</h4>
              <p className="text-sm text-gray-600">Yes, all conversions use standard conversion factors and provide accurate results.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Convert More Units?</h3>
            <p className="section-subtitle mb-8">
              Explore our other ${category} conversion tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/${categoryPath}/"
                className="btn btn-primary"
              >
                <span>All ${categoryTitle} Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
`;
}

function extractMetadata(content, dirName) {
  const metadata = {};
  
  // Extract title
  const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
  if (titleMatch) metadata.title = titleMatch[1];
  
  // Extract description
  const descMatch = content.match(/description:\s*['"](.+?)['"]/);
  if (descMatch) metadata.description = descMatch[1];
  
  // Extract category
  const catMatch = content.match(/category:\s*['"](.+?)['"]/);
  if (catMatch) metadata.category = catMatch[1];
  
  // Extract defaultFrom
  const fromMatch = content.match(/defaultFrom:\s*['"](.+?)['"]/);
  if (fromMatch) metadata.fromUnit = fromMatch[1];
  
  // Extract defaultTo
  const toMatch = content.match(/defaultTo:\s*['"](.+?)['"]/);
  if (toMatch) metadata.toUnit = toMatch[1];
  
  return metadata;
}

async function updateAllPages() {
  const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.includes('-to-') && !dirent.name.includes('blog'))
    .map(dirent => dirent.name)
    .sort();
  
  console.log(`Found ${dirs.length} converter directories\n`);
  console.log('========================================\n');
  
  let updated = 0;
  let skipped = 0;
  let errors = [];
  
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const pagePath = path.join(appDir, dir, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠ [${i+1}/${dirs.length}] ${dir} - no page.tsx`);
      skipped++;
      continue;
    }
    
    try {
      const content = fs.readFileSync(pagePath, 'utf8');
      
      // Skip if already updated
      if (content.includes('hero-gradient text-4xl')) {
        console.log(`✓ [${i+1}/${dirs.length}] ${dir} already updated`);
        skipped++;
        continue;
      }
      
      // Extract metadata
      const metadata = extractMetadata(content, dir);
      
      // Generate new content
      const newContent = generateNewContent(dir, metadata);
      
      // Write file
      fs.writeFileSync(pagePath, newContent, 'utf8');
      console.log(`✓ [${i+1}/${dirs.length}] Updated ${dir}`);
      updated++;
      
      // Add small delay to prevent overwhelming the system
      if (i % 50 === 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (err) {
      console.log(`✗ [${i+1}/${dirs.length}] Error updating ${dir}: ${err.message}`);
      errors.push(`${dir}: ${err.message}`);
    }
  }
  
  console.log('\n========================================');
  console.log('Update Complete!');
  console.log('========================================');
  console.log(`Updated: ${updated} pages`);
  console.log(`Skipped: ${skipped} pages`);
  console.log(`Errors: ${errors.length}`);
  
  if (errors.length > 0) {
    console.log('\nErrors encountered:');
    errors.forEach(err => console.log(`  - ${err}`));
  }
}

updateAllPages().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
