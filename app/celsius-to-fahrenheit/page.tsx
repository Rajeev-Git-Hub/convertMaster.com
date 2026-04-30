import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Celsius to Fahrenheit Converter – Convert °C to °F | Free Tool',
  description: 'Free Celsius to Fahrenheit converter. Convert °C to °F instantly with accurate results. Learn the conversion formula, see common temperature conversions, and understand weather forecasts and body temperature.',
  keywords: 'celsius to fahrenheit, c to f, convert celsius to fahrenheit, temperature conversion, celsius fahrenheit converter, weather temperature converter',
  openGraph: {
    title: 'Celsius to Fahrenheit Converter – Convert °C to °F',
    description: 'Convert Celsius to Fahrenheit instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function CelsiusToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Celsius to Fahrenheit Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert Celsius to Fahrenheit instantly. Formula: F = (C × 9/5) + 32
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="card p-6">
              <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="fahrenheit" />
            </div>
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
                <h3 className="text-lg font-semibold text-gray-900">Celsius to Fahrenheit</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>0°C = 32°F (Freezing)</li>
                <li>20°C = 68°F (Room temp)</li>
                <li>37°C = 98.6°F (Body temp)</li>
                <li>100°C = 212°F (Boiling)</li>
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
                <li>Multiply by 1.8</li>
                <li>Add 32</li>
                <li>Example: 25°C × 1.8 + 32 = 77°F</li>
                <li>Works for all temperatures</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Weather Reference</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>10°C = 50°F (Cool)</li>
                <li>25°C = 77°F (Warm)</li>
                <li>30°C = 86°F (Hot)</li>
                <li>35°C = 95°F (Very hot)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the Celsius to Fahrenheit Converter</h3>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Celsius (°C)</h4>
              <p className="text-sm text-gray-600">Metric temperature scale where water freezes at 0°C and boils at 100°C.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fahrenheit (°F)</h4>
              <p className="text-sm text-gray-600">Imperial temperature scale where water freezes at 32°F and boils at 212°F.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kelvin (K)</h4>
              <p className="text-sm text-gray-600">SI temperature scale starting at absolute zero, used in scientific contexts.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Rankine (°R)</h4>
              <p className="text-sm text-gray-600">Absolute temperature scale using Fahrenheit degrees, starting at absolute zero.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Réaumur (°Ré)</h4>
              <p className="text-sm text-gray-600">Historical scale where water freezes at 0°Ré and boils at 80°Ré.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Newton (°N)</h4>
              <p className="text-sm text-gray-600">Early temperature scale where water freezes at 0°N and boils at 33°N.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Rømer (°Rø)</h4>
              <p className="text-sm text-gray-600">Danish scale where water freezes at 7.5°Rø and boils at 60°Rø.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Delisle (°De)</h4>
              <p className="text-sm text-gray-600">Inverted scale where water freezes at 150°De and boils at 0°De.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Leiden (°L)</h4>
              <p className="text-sm text-gray-600">Scale based on liquefaction of helium, used in cryogenics research.</p>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is 0°C in Fahrenheit?</h4>
              <p className="text-sm text-gray-600">0°C equals 32°F, which is the freezing point of water.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between Celsius and Fahrenheit?</h4>
              <p className="text-sm text-gray-600">Celsius is metric (0-100°C for water), Fahrenheit is imperial (32-212°F for water).</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this temperature converter?</h4>
              <p className="text-sm text-gray-600">Our converter provides results with up to 6 decimal places for high precision.</p>
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
                <span>Fahrenheit to Celsius</span>
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
