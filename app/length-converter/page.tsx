import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Length Converter - Free Online Tool | Convert Meters, Feet, Inches, km, miles',
  description: 'Free online length converter. Convert between meters, feet, inches, kilometers, miles, centimeters. Accurate calculations, conversion tables, and step-by-step examples.',
  keywords: 'length converter, meter to feet, feet to inches, km to miles, cm to inches, measurement converter, online tool, unit conversion',
  openGraph: {
    title: 'Length Converter - Free Online Tool',
    description: 'Convert between different units of length instantly with our free online tool',
    type: 'website',
  },
};

export default function LengthConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Length Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between meters, feet, inches, kilometers, miles, and more
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="length" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Length Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Meter to Feet</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 meter = 3.28084 feet</li>
                <li>2 meters = 6.56168 feet</li>
                <li>5 meters = 16.4042 feet</li>
                <li>10 meters = 32.8084 feet</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Feet to Meters</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 foot = 0.3048 meters</li>
                <li>5 feet = 1.524 meters</li>
                <li>10 feet = 3.048 meters</li>
                <li>100 feet = 30.48 meters</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Inches to Centimeters</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 inch = 2.54 centimeters</li>
                <li>5 inches = 12.7 centimeters</li>
                <li>10 inches = 25.4 centimeters</li>
                <li>12 inches = 30.48 centimeters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metric Length Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Length Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement systems and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Meter (m)</h4>
              <p className="text-sm text-gray-600">The SI unit of length. Defined as the distance light travels in a vacuum in 1/299,792,458 seconds.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kilometer (km)</h4>
              <p className="text-sm text-gray-600">Equal to 1,000 meters. Commonly used for measuring long distances such as road lengths and geographical distances.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Centimeter (cm)</h4>
              <p className="text-sm text-gray-600">One hundredth of a meter. Used for measuring small objects, clothing sizes, and everyday items.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Millimeter (mm)</h4>
              <p className="text-sm text-gray-600">One thousandth of a meter. Used for precise measurements in engineering, manufacturing, and medical applications.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Micrometer (m)</h4>
              <p className="text-sm text-gray-600">One millionth of a meter. Used in microscopy, semiconductor manufacturing, and precision engineering.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Nanometer (nm)</h4>
              <p className="text-sm text-gray-600">One billionth of a meter. Used in nanotechnology, molecular biology, and measuring wavelengths of light.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Decimeter (dm)</h4>
              <p className="text-sm text-gray-600">One tenth of a meter. Equal to 10 centimeters. Occasionally used in scientific contexts.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Dekameter (dam)</h4>
              <p className="text-sm text-gray-600">Equal to 10 meters. Rarely used in practice, but part of the metric system hierarchy.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Hectometer (hm)</h4>
              <p className="text-sm text-gray-600">Equal to 100 meters. Sometimes used in agricultural land measurement and surveying.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Inch (in)</h4>
              <p className="text-sm text-gray-600">Equal to 2.54 centimeters. Commonly used in the United States for measuring screen sizes, carpentry, and everyday objects.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Foot (ft)</h4>
              <p className="text-sm text-gray-600">Equal to 12 inches or 30.48 centimeters. Used for measuring height, room dimensions, and construction in the US.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Yard (yd)</h4>
              <p className="text-sm text-gray-600">Equal to 3 feet or 0.9144 meters. Used in sports fields, textile measurements, and construction.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mile (mi)</h4>
              <p className="text-sm text-gray-600">Equal to 5,280 feet or 1.609 kilometers. Used for road distances and speed limits in the United States and UK.</p>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the Length Converter</h3>
            <p className="section-subtitle">Simple steps to get accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the length value you want to convert in the input field</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Units</h4>
              <p className="text-sm text-gray-600">Choose the from and to units from the dropdown menus</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">View your converted result instantly with high precision</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about length conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many feet are in a meter?</h4>
              <p className="text-sm text-gray-600">There are 3.28084 feet in one meter. This is based on the international foot definition.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between meters and yards?</h4>
              <p className="text-sm text-gray-600">One meter equals 1.09361 yards. Meters are part of the metric system, while yards are part of the imperial system.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this length converter?</h4>
              <p className="text-sm text-gray-600">Our converter provides results with up to 10 decimal places, ensuring high precision for professional and educational use.</p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Choose ConvertMaster?</h3>
            <p className="section-subtitle">Professional features designed for precision and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4">
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h4>
              <p className="text-sm text-gray-600 mb-4">
                Bank-level encryption with GDPR compliance and complete data privacy protection.
              </p>
              <div className="flex items-center justify-center text-blue-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#10b981' }}>
                <FiUsers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Trust</h4>
              <p className="text-sm text-gray-600 mb-4">
                50M+ active users worldwide trust our platform for accurate, instant conversions.
              </p>
              <div className="flex items-center justify-center text-green-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#8b5cf6' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-sm text-gray-600 mb-4">
                0.1s response time with instant calculations and real-time results.
              </p>
              <div className="flex items-center justify-center text-purple-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
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
                href="/weight-converter/"
                className="btn btn-primary"
              >
                <span>Weight Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/temperature-converter/"
                className="btn btn-secondary"
              >
                <span>Temperature Converter</span>
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
