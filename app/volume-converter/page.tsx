import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiDroplet, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiCoffee, FiPackage } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Volume Converter - Free Online Tool | Convert Liters, Gallons, Cubic Meters',
  description: 'Free online volume converter. Convert between liters, gallons, cubic meters, milliliters, fluid ounces. Accurate calculations, conversion tables, and practical examples.',
  keywords: 'volume converter, liters to gallons, cubic meters to liters, milliliters to ounces, fluid volume converter, online tool',
  openGraph: {
    title: 'Volume Converter - Free Online Tool',
    description: 'Convert between different units of volume instantly',
    type: 'website',
  },
};

export default function VolumeConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Volume Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between liters, gallons, cubic meters, milliliters, and more
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="volume" />
          </div>
        </section>

        {/* Understanding Volume Conversion */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Understanding Volume Conversion</h3>
            <p className="section-subtitle">Common volume measurement systems and their applications</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiDroplet className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Liters</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Metric system standard</p>
                <p className="mb-2">Used worldwide for liquids</p>
                <p>Base unit for metric volume measurements</p>
              </div>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiPackage className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Gallons</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">US and UK measurements differ</p>
                <p className="mb-2">Common for fuel and liquids</p>
                <p>Used in automotive and industrial applications</p>
              </div>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiPackage className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cubic Meters</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">SI unit for volume</p>
                <p className="mb-2">Used for large quantities</p>
                <p>Standard for shipping and construction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Volume Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Volume Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiDroplet className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Liters to Gallons</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 L = 0.264172 US gallons</li>
                <li>5 L = 1.32086 US gallons</li>
                <li>10 L = 2.64172 US gallons</li>
                <li>50 L = 13.2086 US gallons</li>
                <li>100 L = 26.4172 US gallons</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Gallons to Liters</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 US gallon = 3.78541 L</li>
                <li>5 US gallons = 18.9271 L</li>
                <li>10 US gallons = 37.8541 L</li>
                <li>50 US gallons = 189.271 L</li>
                <li>100 US gallons = 378.541 L</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Cubic Meters to Liters</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 m³ = 1,000 L</li>
                <li>0.1 m³ = 100 L</li>
                <li>0.5 m³ = 500 L</li>
                <li>2 m³ = 2,000 L</li>
                <li>10 m³ = 10,000 L</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Volume Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Volume Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement standards and applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Liter (L)</h5>
              <p className="text-sm text-gray-600">The metric unit of volume. Equal to 1 cubic decimeter. Used worldwide for measuring liquids and gases.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Milliliter (mL)</h5>
              <p className="text-sm text-gray-600">One thousandth of a liter. Commonly used for measuring small quantities of liquids, medications, and cooking ingredients.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Cubic Meter (m³)</h5>
              <p className="text-sm text-gray-600">The SI unit of volume. Equal to 1,000 liters. Used for large volumes in construction, shipping, and industry.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Cubic Centimeter (cm³)</h5>
              <p className="text-sm text-gray-600">Equal to 1 milliliter. Used in medical applications, engine displacement, and scientific measurements.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">US Gallon</h5>
              <p className="text-sm text-gray-600">Equal to 3.78541 liters. Used in the United States for measuring fuel, milk, and other liquids.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">UK Gallon</h5>
              <p className="text-sm text-gray-600">Equal to 4.54609 liters. Used in the United Kingdom and some Commonwealth countries.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Fluid Ounce (fl oz)</h5>
              <p className="text-sm text-gray-600">US fluid ounce equals 29.5735 mL. Used for measuring beverages, medicines, and cooking ingredients.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Cubic Foot (ft³)</h5>
              <p className="text-sm text-gray-600">Equal to 28.3168 liters. Used in the US for measuring gas volumes, refrigeration capacity, and storage.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Cubic Inch (in³)</h5>
              <p className="text-sm text-gray-600">Equal to 16.3871 mL. Used for engine displacement and small volume measurements.</p>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Applications</h3>
            <p className="section-subtitle">Where volume conversion is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiCoffee className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Kitchen & Cooking</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Water bottle:</strong> 500 mL = 0.5 L = 16.9 fl oz</p>
                <p><strong>Milk carton:</strong> 1 L = 33.8 fl oz = 0.264 gal</p>
                <p><strong>Coffee cup:</strong> 240 mL = 8.1 fl oz</p>
                <p><strong>Wine bottle:</strong> 750 mL = 25.4 fl oz</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiPackage className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Automotive & Fuel</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Gas tank:</strong> 50 L = 13.2 US gallons</p>
                <p><strong>Oil change:</strong> 5 L = 1.32 US gallons</p>
                <p><strong>Coolant:</strong> 10 L = 2.64 US gallons</p>
                <p><strong>Windshield fluid:</strong> 4 L = 1.06 US gallons</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiPackage className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Science & Medicine</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Blood donation:</strong> 500 mL = 0.5 L</p>
                <p><strong>IV drip:</strong> 1 L = 1,000 mL</p>
                <p><strong>Laboratory flask:</strong> 250 mL = 8.45 fl oz</p>
                <p><strong>Syringe:</strong> 5 mL = 0.169 fl oz</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiDroplet className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Home & Garden</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Watering can:</strong> 5 L = 1.32 US gallons</p>
                <p><strong>Bucket:</strong> 10 L = 2.64 US gallons</p>
                <p><strong>Aquarium:</strong> 100 L = 26.4 US gallons</p>
                <p><strong>Swimming pool:</strong> 50 m³ = 13,208 US gallons</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Volume Units</h3>
            <p className="section-subtitle">Simple steps for accurate volume conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Volume Value</h4>
              <p className="text-sm text-gray-600">Input the volume measurement you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Unit</h4>
              <p className="text-sm text-gray-600">Choose the current volume unit (L, gal, m³, etc.)</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Unit</h4>
              <p className="text-sm text-gray-600">Select the volume unit to convert to</p>
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
            <p className="section-subtitle">Common questions about volume conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many liters are in a US gallon?</h4>
              <p className="text-sm text-gray-600">One US gallon equals 3.78541 liters. Note that UK gallons are larger (4.54609 liters).</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between milliliters and cubic centimeters?</h4>
              <p className="text-sm text-gray-600">They are exactly equal: 1 mL = 1 cm³. Milliliters are typically used for liquids, while cubic centimeters are used for scientific measurements.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do US and UK gallons differ?</h4>
              <p className="text-sm text-gray-600">Historical reasons. The US gallon is based on the old British wine gallon (231 cubic inches), while the UK gallon was redefined in 1824.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this volume converter?</h4>
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
                href="/"
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
