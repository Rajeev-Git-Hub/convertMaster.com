import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '100°C to Fahrenheit Converter - Convert 100°C to °F | Free Tool',
  description: 'Convert 100 degrees Celsius to Fahrenheit instantly. 100°C equals 212°F - The boiling point of water at sea level. Free online converter with accurate results.',
  keywords: '100 celsius to fahrenheit, 100c to f, convert 100c to f, 100celsius to fahrenheit, boiling point converter',
  openGraph: {
    title: '100°C to Fahrenheit Converter - Convert 100°C to °F',
    description: 'Convert 100 degrees Celsius to Fahrenheit instantly with accurate results',
    type: 'website',
  },
};

export default function Celsius100ToFahrenheitPage() {
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
              <span>Temperature Units</span>
            </div>
          </div>
          
          <h1 className="hero-gradient text-4xl font-bold mb-4">100°C to Fahrenheit Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert 100 degrees Celsius to Fahrenheit instantly. 100°C equals 212°F - The boiling point of water at sea level
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="fahrenheit" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Temperature Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday temperature measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">100°C to Fahrenheit</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>100°C = 212°F (Boiling point)</li>
                <li>37°C = 98.6°F (Body temp)</li>
                <li>20°C = 68°F (Room temp)</li>
                <li>0°C = 32°F (Freezing point)</li>
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
                <li>°F = (°C × 9/5) + 32</li>
                <li>Works for all temperatures</li>
                <li>Example: 100°C × 9/5 + 32 = 212°F</li>
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
                <li>100°C - Water boiling point</li>
                <li>37°C - Human body temp</li>
                <li>20°C - Room temperature</li>
                <li>0°C - Water freezing point</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Temperature Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Temperature Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement systems and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Celsius (°C)</h4>
              <p className="text-sm text-gray-600">Metric temperature scale where 0°C is freezing point and 100°C is boiling point of water at standard atmospheric pressure.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fahrenheit (°F)</h4>
              <p className="text-sm text-gray-600">Imperial temperature scale primarily used in the United States. Water freezes at 32°F and boils at 212°F.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kelvin (K)</h4>
              <p className="text-sm text-gray-600">SI base unit of temperature. 0 K = -273.15°C. Used in scientific contexts.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Rankine (°R)</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°R = -273.15°C. Used in some engineering applications.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Newton Scale</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°N = 0°C and 100°N = 100°C. Used in some European countries.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Réaumur (°Ré)</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°Ré = 0°C and 100°Ré = 100°C. Used in some European countries.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Delisle (°De)</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°De = 0°C and 100°De = 100°C. Used in some scientific applications.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Rømer Scale</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°Rø = 0°C and 100°Rø = 100°C. Used in some European countries.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Romans</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°Ro = 0°C and 100°Ro = 100°C. Used in some European countries.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about temperature conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is 100°C in Fahrenheit?</h4>
              <p className="text-sm text-gray-600">100 degrees Celsius equals exactly 212 degrees Fahrenheit. This is the boiling point of water at standard atmospheric pressure.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why is 100°C significant?</h4>
              <p className="text-sm text-gray-600">100°C is significant because it's the boiling point of water at sea level, making it a key reference temperature in science and cooking.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How to convert Celsius to Fahrenheit?</h4>
              <p className="text-sm text-gray-600">Use formula F = (°C × 9/5) + 32. For 100°C: F = (100 × 9/5) + 32 = 180 + 32 = 212°F.</p>
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
                href="/temperature-converter/"
                className="btn btn-primary"
              >
                <span>Temperature Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/celsius-to-fahrenheit/"
                className="btn btn-secondary"
              >
                <span>°C to °F</span>
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
