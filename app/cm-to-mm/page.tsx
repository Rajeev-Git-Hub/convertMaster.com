import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Centimeter to Millimeter Converter (Free & Instant) | ConvertMaster',
  description: 'Convert centimeters to millimeters instantly. 1 cm = 10 mm. Free online converter with smart explanations and examples.',
  keywords: ['cm to mm', 'centimeter to millimeter', 'cm mm converter', 'length conversion'],
  openGraph: {
    title: 'Centimeter to Millimeter Converter',
    description: 'Convert centimeters to millimeters instantly with smart explanations',
    type: 'website',
  },
};

export default function CmToMmPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="premium-badge">
              <FiZap className="w-3 h-3"></FiZap>
              <span>Instant Results</span>
            </div>
            <div className="badge badge-success">
              <FiCheckCircle className="w-3 h-3"></FiCheckCircle>
              <span>High Precision</span>
            </div>
            <div className="badge badge-secondary">
              <FiActivity className="w-3 h-3"></FiActivity>
              <span>Length Units</span>
            </div>
          </div>
          
          <h1 className="hero-gradient text-4xl font-bold mb-4">CM to MM Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert centimeters to millimeters instantly. 1 cm = 10 mm
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="length" defaultFrom="centimeter" defaultTo="millimeter" />
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
                <h3 className="text-lg font-semibold text-gray-900">CM to MM</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 cm = 10 mm</li>
                <li>5 cm = 50 mm</li>
                <li>10 cm = 100 mm</li>
                <li>25 cm = 250 mm</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Formula</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Multiply by 10</li>
                <li>cm × 10 = mm</li>
                <li>Example: 7 cm × 10 = 70 mm</li>
                <li>Simple conversion</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Common Uses</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>2 cm = 20 mm (ruler)</li>
                <li>15 cm = 150 mm (pen)</li>
                <li>30 cm = 300 mm (ruler)</li>
                <li>100 cm = 1000 mm (meter)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the CM to MM Converter</h3>
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

        {/* Length Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Length Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement systems and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Centimeter (cm)</h4>
              <p className="text-sm text-gray-600">Unit of length equal to 10 millimeters or 0.01 meters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Millimeter (mm)</h4>
              <p className="text-sm text-gray-600">Unit of length equal to 0.1 centimeters or 0.001 meters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Meter (m)</h4>
              <p className="text-sm text-gray-600">SI unit of length equal to 100 centimeters or 1000 millimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kilometer (km)</h4>
              <p className="text-sm text-gray-600">Unit of length equal to 1000 meters or 100,000 centimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Inch (in)</h4>
              <p className="text-sm text-gray-600">Imperial unit equal to 2.54 centimeters or 25.4 millimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Foot (ft)</h4>
              <p className="text-sm text-gray-600">Imperial unit equal to 30.48 centimeters or 304.8 millimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Yard (yd)</h4>
              <p className="text-sm text-gray-600">Imperial unit equal to 91.44 centimeters or 914.4 millimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mile (mi)</h4>
              <p className="text-sm text-gray-600">Imperial unit equal to 160,934.4 centimeters or 1,609,344 millimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Micrometer (µm)</h4>
              <p className="text-sm text-gray-600">Unit equal to 0.001 millimeters or 0.0001 centimeters.</p>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many mm are in 1 cm?</h4>
              <p className="text-sm text-gray-600">1 centimeter equals exactly 10 millimeters.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between cm and mm?</h4>
              <p className="text-sm text-gray-600">Centimeter is larger than millimeter. 1 cm = 10 mm. mm is used for smaller measurements.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How to convert cm to mm?</h4>
              <p className="text-sm text-gray-600">Multiply centimeters by 10. Example: 5 cm × 10 = 50 mm.</p>
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
                href="/length-converter/"
                className="btn btn-primary"
              >
                <span>Length Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/mm-to-cm/"
                className="btn btn-secondary"
              >
                <span>MM to CM</span>
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
