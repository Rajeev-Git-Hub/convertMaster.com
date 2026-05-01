import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Body Temperature in Fahrenheit Converter - Normal & Fever Ranges | Free Tool',
  description: 'Convert body temperature to Fahrenheit instantly. Normal body temperature is 98.6°F (37°C). Learn about fever ranges and temperature conversions.',
  keywords: 'body temperature fahrenheit, normal body temperature fahrenheit, fever temperature fahrenheit, 98.6 fahrenheit to celsius',
  openGraph: {
    title: 'Body Temperature in Fahrenheit Converter',
    description: 'Convert body temperature to Fahrenheit with accurate results',
    type: 'website',
  },
};

export default function BodyTemperatureFahrenheitPage() {
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
          
          <h1 className="hero-gradient text-4xl font-bold mb-4">Body Temperature in Fahrenheit Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Normal body temperature: 98.6°F (37°C)
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="fahrenheit" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Body Temperature Conversions</h3>
            <p className="section-subtitle">Quick reference for normal and fever temperature ranges</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Normal Range</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>98.6°F = 37°C (Normal)</li>
                <li>97-99°F = 36.1-37.2°C</li>
                <li>Varies by person</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Fever Range</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>100.4°F = 38°C (Fever)</li>
                <li>101.3°F = 38.5°C</li>
                <li>102.2°F = 39°C (High)</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Critical Range</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Below 95°F = 35°C (Hypothermia)</li>
                <li>Above 103°F = 39.4°C</li>
                <li>Seek medical help</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the Body Temperature Converter</h3>
            <p className="section-subtitle">Simple steps to get accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the temperature value you want to convert in the input field</p>
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

        {/* Temperature Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Temperature Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement systems and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fahrenheit (°F)</h4>
              <p className="text-sm text-gray-600">Imperial temperature scale primarily used in the United States. Water freezes at 32°F and boils at 212°F.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Celsius (°C)</h4>
              <p className="text-sm text-gray-600">Metric temperature scale where 0°C is freezing point and 100°C is boiling point of water at standard atmospheric pressure.</p>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Rømer Scale</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°Rø = 0°C and 100°Rø = 100°C. Used in some European countries.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Romans</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°Ro = 0°C and 100°Ro = 100°C. Used in some European countries.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Delisle (°De)</h4>
              <p className="text-sm text-gray-600">Temperature scale where 0°De = 0°C and 100°De = 100°C. Used in some scientific applications.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about body temperature conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is normal body temperature in Fahrenheit?</h4>
              <p className="text-sm text-gray-600">Normal body temperature is 98.6°F (37°C). This can vary slightly from person to person and throughout the day.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What temperature indicates a fever?</h4>
              <p className="text-sm text-gray-600">A fever is generally considered to be 100.4°F (38°C) or higher. High fever is above 103°F (39.4°C).</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How to convert Fahrenheit to Celsius?</h4>
              <p className="text-sm text-gray-600">Use formula C = (°F - 32) × 5/9. For 98.6°F: C = (98.6 - 32) × 5/9 = 66.6 × 5/9 = 37°C.</p>
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
                href="/fahrenheit-to-celsius/"
                className="btn btn-secondary"
              >
                <span>°F to °C</span>
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
