const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const entries = fs.readdirSync(appDir, { withFileTypes: true });

// Get all converter directories
const converterDirs = entries
  .filter(entry => entry.isDirectory() && entry.name.includes('-to-') && !entry.name.includes('blog'))
  .map(entry => entry.name)
  .sort();

console.log(`Total converter directories found: ${converterDirs.length}`);

// Parse batch number from command line (default to batch 1)
const batchNum = parseInt(process.argv[2]) || 1;
const batchSize = 100;
const startIdx = (batchNum - 1) * batchSize;
const endIdx = Math.min(startIdx + batchSize, converterDirs.length);

const batchDirs = converterDirs.slice(startIdx, endIdx);
console.log(`\nProcessing batch ${batchNum}: directories ${startIdx + 1} to ${endIdx} (${batchDirs.length} directories)`);
console.log('========================================\n');

let updated = 0;
let skipped = 0;
let errors = [];

// Category mapping
const categoryMap = {
  'cm': 'length', 'mm': 'length', 'meters': 'length', 'meter': 'length', 'km': 'length',
  'inch': 'length', 'inches': 'length', 'feet': 'length', 'foot': 'length',
  'mile': 'length', 'miles': 'length', 'dm': 'length', 'dam': 'length', 'hm': 'length',
  'yard': 'length', 'yards': 'length', 'nautical': 'length', 'nm': 'length',
  'gram': 'weight', 'grams': 'weight', 'kg': 'weight', 'kilogram': 'weight', 'lbs': 'weight',
  'lb': 'weight', 'pound': 'weight', 'pounds': 'weight', 'oz': 'weight', 'ounce': 'weight',
  'ton': 'weight', 'tons': 'weight', 'tonne': 'weight', 'tonnes': 'weight',
  'celsius': 'temperature', 'fahrenheit': 'temperature', 'kelvin': 'temperature', 'rankine': 'temperature',
  'reaumur': 'temperature',
  'c': 'speed', 'mph': 'speed', 'kmh': 'speed', 'mps': 'speed', 'fts': 'speed', 'knot': 'speed',
  'knots': 'speed',
  'bytes': 'data', 'kb': 'data', 'mb': 'data', 'gb': 'data', 'tb': 'data', 'pb': 'data',
  'bit': 'data', 'kbit': 'data', 'mbit': 'data', 'gbit': 'data', 'eb': 'data', 'zb': 'data',
  'second': 'time', 'minute': 'time', 'hour': 'time', 'day': 'time', 'week': 'time', 'month': 'time', 'year': 'time',
  'm2': 'area', 'ft2': 'area', 'acre': 'area', 'hectare': 'area', 'km2': 'area', 'mi2': 'area',
  'in2': 'area', 'cm2': 'area', 'mm2': 'area', 'yd2': 'area',
  'liter': 'volume', 'liters': 'volume', 'ml': 'volume', 'gal': 'volume', 'gallon': 'volume',
  'pascal': 'pressure', 'pa': 'pressure', 'bar': 'pressure', 'psi': 'pressure', 'atm': 'pressure',
  'joule': 'energy', 'joules': 'energy', 'cal': 'energy', 'calorie': 'energy', 'kcal': 'energy',
  'btu': 'energy', 'wh': 'energy', 'kwh': 'energy',
  'watt': 'power', 'watts': 'power', 'kw': 'power', 'hp': 'power',
  'degree': 'angle', 'radian': 'angle', 'gradian': 'angle',
  'percentage': 'basic', 'decimal': 'basic', 'fraction': 'basic',
};

const categoryPathMap = {
  'length': 'length-converter',
  'weight': 'weight-converter',
  'temperature': 'temperature-converter',
  'speed': 'speed-converter',
  'data': 'data-converter',
  'time': 'time-converter',
  'area': 'area-converter',
  'volume': 'volume-converter',
  'pressure': 'pressure-converter',
  'energy': 'energy-converter',
  'power': 'power-converter',
  'angle': 'angle-converter',
  'basic': 'basic-converter',
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function getCategory(from, to) {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();
  
  for (const [key, cat] of Object.entries(categoryMap)) {
    if (fromLower.includes(key) || toLower.includes(key)) {
      return cat;
    }
  }
  return 'length';
}

for (const dir of batchDirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠ Skipping ${dir} - no page.tsx found`);
    skipped++;
    continue;
  }
  
  try {
    const content = fs.readFileSync(pagePath, 'utf-8');
    
    // Skip if already updated (has hero-gradient)
    if (content.includes('hero-gradient text-4xl')) {
      console.log(`✓ ${dir} already updated - skipping`);
      updated++;
      continue;
    }
    
    // Extract metadata
    const titleMatch = content.match(/title:\s*["'](.+?)["']/);
    const descMatch = content.match(/description:\s*["'](.+?)["']/);
    const categoryMatch = content.match(/category:\s*["'](.+?)["']/);
    const fromMatch = content.match(/defaultFrom:\s*["'](.+?)["']/);
    const toMatch = content.match(/defaultTo:\s*["'](.+?)["']/);
    
    const title = titleMatch ? titleMatch[1] : toTitleCase(dir.replace(/-/g, ' '));
    const description = descMatch ? descMatch[1] : `Convert ${dir.replace(/-/g, ' ')} instantly`;
    const category = categoryMatch ? categoryMatch[1] : getCategory(fromMatch?.[1] || '', toMatch?.[1] || '');
    const fromUnit = fromMatch ? fromMatch[1] : dir.split('-to-')[0];
    const toUnit = toMatch ? toMatch[1] : dir.split('-to-')[1];
    
    const fromLabel = toTitleCase(fromUnit);
    const toLabel = toTitleCase(toUnit);
    const categoryPath = categoryPathMap[category] || `${category}-converter`;
    const categoryTitle = toTitleCase(category);
    
    const newContent = `import { Metadata } from 'next';
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
    
    fs.writeFileSync(pagePath, newContent);
    console.log(`✓ Updated ${dir}`);
    updated++;
  } catch (err) {
    console.log(`✗ Error updating ${dir}: ${err.message}`);
    errors.push(`${dir}: ${err.message}`);
  }
}

console.log('\n========================================');
console.log(`Batch ${batchNum} Complete!`);
console.log('========================================');
console.log(`Updated: ${updated} pages`);
console.log(`Already done: ${updated > 0 ? updated - batchDirs.length + batchDirs.filter(d => {
  const p = path.join(appDir, d, 'page.tsx');
  if (!fs.existsSync(p)) return false;
  const c = fs.readFileSync(p, 'utf-8');
  return c.includes('hero-gradient text-4xl');
}).length : 0} pages`);
console.log(`Skipped: ${skipped} pages`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nErrors encountered:');
  errors.forEach(e => console.log(`  - ${e}`));
}

console.log(`\nNext batch: node update-batch.js ${batchNum + 1}`);
