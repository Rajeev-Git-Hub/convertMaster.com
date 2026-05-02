const fs = require('fs');
const path = require('path');

// Get all converter directories
const appDir = path.join(__dirname, 'app');
const entries = fs.readdirSync(appDir, { withFileTypes: true });

// Filter for converter directories (pattern: *-to-*)
const converterDirs = entries
  .filter(entry => entry.isDirectory() && entry.name.includes('-to-') && !entry.name.includes('blog'))
  .map(entry => entry.name);

console.log(`Found ${converterDirs.length} converter directories`);

// Template for new page format
const getTemplate = (title, description, category, fromUnit, toUnit, fromLabel, toLabel, categoryPath) => `import { Metadata } from 'next';
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
                <span>All ${category.charAt(0).toUpperCase() + category.slice(1)} Converters</span>
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

// Category mapping
const categoryMap = {
  'cm': 'length', 'mm': 'length', 'meters': 'length', 'meter': 'length', 'km': 'length', 'kilometer': 'length',
  'inch': 'length', 'inches': 'length', 'feet': 'length', 'foot': 'length', 'yard': 'length', 'yards': 'length',
  'mile': 'length', 'miles': 'length', 'dm': 'length', 'dam': 'length', 'hm': 'length',
  'gram': 'weight', 'grams': 'weight', 'kg': 'weight', 'kilogram': 'weight', 'kilograms': 'weight',
  'lb': 'weight', 'lbs': 'weight', 'pound': 'weight', 'pounds': 'weight', 'oz': 'weight', 'ounce': 'weight', 'ounces': 'weight',
  'ton': 'weight', 'tons': 'weight',
  'celsius': 'temperature', 'fahrenheit': 'temperature', 'kelvin': 'temperature',
  'c': 'speed', 'mph': 'speed', 'kmh': 'speed', 'mps': 'speed', 'fts': 'speed',
  'bytes': 'data', 'kb': 'data', 'mb': 'data', 'gb': 'data', 'tb': 'data', 'pb': 'data', 'eb': 'data',
  'bit': 'data', 'kbit': 'data', 'mbit': 'data', 'gbit': 'data',
  'second': 'time', 'minute': 'time', 'hour': 'time', 'day': 'time', 'week': 'time', 'month': 'time', 'year': 'time',
  'm2': 'area', 'ft2': 'area', 'acre': 'area', 'hectare': 'area', 'km2': 'area', 'mi2': 'area',
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
  'basic': 'basic-converter',
};

// Helper to determine category from units
function getCategory(from, to) {
  for (const [key, cat] of Object.entries(categoryMap)) {
    if (from.toLowerCase().includes(key) || to.toLowerCase().includes(key)) {
      return cat;
    }
  }
  return 'length'; // default
}

// Process each converter directory
let updatedCount = 0;
let skippedCount = 0;

for (const dir of converterDirs.slice(0, 10)) { // Process first 10 for testing
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`Skipping ${dir} - no page.tsx found`);
    skippedCount++;
    continue;
  }
  
  // Read existing file to extract metadata
  const existingContent = fs.readFileSync(pagePath, 'utf-8');
  
  // Extract title from metadata
  const titleMatch = existingContent.match(/title:\s*['"](.+?)['"]/);
  const descMatch = existingContent.match(/description:\s*['"](.+?)['"]/);
  const categoryMatch = existingContent.match(/category:\s*['"](.+?)['"]/);
  const fromMatch = existingContent.match(/defaultFrom:\s*['"](.+?)['"]/);
  const toMatch = existingContent.match(/defaultTo:\s*['"](.+?)['"]/);
  
  const title = titleMatch ? titleMatch[1] : dir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = descMatch ? descMatch[1] : `Convert ${dir.replace(/-/g, ' ')} instantly`;
  const category = categoryMatch ? categoryMatch[1] : getCategory(fromMatch?.[1] || '', toMatch?.[1] || '');
  const fromUnit = fromMatch ? fromMatch[1] : dir.split('-to-')[0];
  const toUnit = toMatch ? toMatch[1] : dir.split('-to-')[1];
  
  const fromLabel = fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1);
  const toLabel = toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
  const categoryPath = categoryPathMap[category] || `${category}-converter`;
  
  // Generate new content
  const newContent = getTemplate(title, description, category, fromUnit, toUnit, fromLabel, toLabel, categoryPath);
  
  // Write new file
  fs.writeFileSync(pagePath, newContent);
  console.log(`✓ Updated ${dir}`);
  updatedCount++;
}

console.log(`\nSummary: ${updatedCount} updated, ${skippedCount} skipped`);
console.log(`Total directories found: ${converterDirs.length}`);
