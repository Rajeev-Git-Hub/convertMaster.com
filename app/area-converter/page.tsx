import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiHome, FiMap, FiCrop } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Area Converter - Free Online Tool | Convert Square Meters, Square Feet, Acres',
  description: 'Free online area converter. Convert between square meters, square feet, acres, hectares, square yards. Accurate calculations, conversion tables, and real estate examples.',
  keywords: 'area converter, square meters to square feet, acres to hectares, square yard to square meter, land area converter, real estate, online tool',
  openGraph: {
    title: 'Area Converter - Free Online Tool',
    description: 'Convert between different units of area instantly',
    type: 'website',
  },
};

export default function AreaConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="h-16" />
          <h1 className="hero-gradient text-4xl font-bold mb-4">Area Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between square meters, square feet, acres, hectares, and more
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="area" />
          </div>
        </section>

        {/* Understanding Area Conversion */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Understanding Area Conversion</h3>
            <p className="section-subtitle">Common area measurement systems and their applications</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiMaximize className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Square Meters</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">International standard unit</p>
                <p className="mb-2">Used in most countries worldwide</p>
                <p>Base unit for metric area measurements</p>
              </div>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiHome className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Square Feet</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Common in US and UK real estate</p>
                <p className="mb-2">Used for residential and commercial</p>
                <p>Standard for interior measurements</p>
              </div>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiCrop className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Acres & Hectares</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Large land measurements</p>
                <p className="mb-2">Used in agriculture and real estate</p>
                <p>Standard for property transactions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Area Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Area Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Square Meters to Square Feet</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 m² = 10.764 ft²</li>
                <li>10 m² = 107.64 ft²</li>
                <li>50 m² = 538.2 ft²</li>
                <li>100 m² = 1,076.4 ft²</li>
                <li>500 m² = 5,382 ft²</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiHome className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Square Feet to Square Meters</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 ft² = 0.0929 m²</li>
                <li>100 ft² = 9.29 m²</li>
                <li>500 ft² = 46.45 m²</li>
                <li>1,000 ft² = 92.9 m²</li>
                <li>2,000 ft² = 185.8 m²</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiCrop className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Acres to Hectares</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 acre = 0.4047 hectares</li>
                <li>5 acres = 2.023 hectares</li>
                <li>10 acres = 4.047 hectares</li>
                <li>50 acres = 20.23 hectares</li>
                <li>100 acres = 40.47 hectares</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Area Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Area Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement standards and applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Meter (m²)</h5>
              <p className="text-sm text-gray-600">The SI unit of area. Equal to the area of a square with sides of 1 meter. Used worldwide for scientific and commercial measurements.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Foot (ft²)</h5>
              <p className="text-sm text-gray-600">Imperial unit equal to the area of a square with sides of 1 foot. Commonly used in US real estate and construction.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Kilometer (km²)</h5>
              <p className="text-sm text-gray-600">Equal to 1,000,000 square meters. Used for measuring large geographical areas like cities and regions.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Centimeter (cm²)</h5>
              <p className="text-sm text-gray-600">Equal to 0.0001 square meters. Used for small measurements in science and engineering.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Millimeter (mm²)</h5>
              <p className="text-sm text-gray-600">Equal to 0.000001 square meters. Used for precise measurements in manufacturing and microscopy.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Inch (in²)</h5>
              <p className="text-sm text-gray-600">Equal to 6.452 square centimeters. Used in the US for small area measurements.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Yard (yd²)</h5>
              <p className="text-sm text-gray-600">Equal to 9 square feet or 0.836 square meters. Used in UK and US for larger measurements.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Square Mile (mi²)</h5>
              <p className="text-sm text-gray-600">Equal to 640 acres or 2.59 square kilometers. Used for measuring large land areas.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Hectare (ha)</h5>
              <p className="text-sm text-gray-600">Equal to 10,000 square meters or 2.471 acres. Used in agriculture and land measurement worldwide.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Acre</h5>
              <p className="text-sm text-gray-600">Equal to 43,560 square feet or 4,047 square meters. Common in US real estate and agriculture.</p>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Applications</h3>
            <p className="section-subtitle">Where area conversion is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiHome className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Real Estate & Construction</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>House sizes:</strong> 2,000 ft² = 185.8 m²</p>
                <p><strong>Apartment:</strong> 800 ft² = 74.3 m²</p>
                <p><strong>Land plots:</strong> 0.25 acre = 1,011.7 m²</p>
                <p><strong>Commercial space:</strong> 5,000 ft² = 464.5 m²</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiCrop className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Agriculture & Land</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Farms:</strong> 100 acres = 40.47 hectares</p>
                <p><strong>Orchards:</strong> 50 acres = 20.23 hectares</p>
                <p><strong>Vineyards:</strong> 10 acres = 4.047 hectares</p>
                <p><strong>Gardens:</strong> 0.1 acre = 404.7 m²</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Geography & Mapping</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>City area:</strong> 100 km² = 38.6 mi²</p>
                <p><strong>Parks:</strong> 5 km² = 1.93 mi²</p>
                <p><strong>Lakes:</strong> 50 km² = 19.3 mi²</p>
                <p><strong>Islands:</strong> 10 km² = 3.86 mi²</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiMaximize className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Interior Design</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Living room:</strong> 300 ft² = 27.9 m²</p>
                <p><strong>Bedroom:</strong> 150 ft² = 13.9 m²</p>
                <p><strong>Kitchen:</strong> 200 ft² = 18.6 m²</p>
                <p><strong>Office:</strong> 120 ft² = 11.1 m²</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Area Units</h3>
            <p className="section-subtitle">Simple steps for accurate area conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Area Value</h4>
              <p className="text-sm text-gray-600">Input the area measurement you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Unit</h4>
              <p className="text-sm text-gray-600">Choose the current area unit (m², ft², acres, etc.)</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Unit</h4>
              <p className="text-sm text-gray-600">Select the area unit to convert to</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">View instant, accurate conversion results</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about area conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many square feet are in a square meter?</h4>
              <p className="text-sm text-gray-600">There are 10.764 square feet in one square meter. This is the standard conversion used worldwide.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between an acre and a hectare?</h4>
              <p className="text-sm text-gray-600">One acre equals 43,560 square feet, while one hectare equals 10,000 square meters (2.471 acres). Hectares are used in most countries, while acres are common in the US.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do different countries use different area units?</h4>
              <p className="text-sm text-gray-600">Historical reasons and established systems. The metric system is used globally, while imperial units persist in the US and UK for traditional reasons.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this area converter?</h4>
              <p className="text-sm text-gray-600">Our converter provides results with up to 10 decimal places, using standard international conversion factors for professional accuracy.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Convert More Units?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free conversion tools for all your measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/length-converter/"
                className="btn btn-primary"
              >
                <span>Length Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/weight-converter/"
                className="btn btn-secondary"
              >
                <span>Weight Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/all-converters/"
                className="btn btn-secondary"
              >
                <span>All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
