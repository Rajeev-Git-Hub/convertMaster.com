import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiThermometer, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiSun, FiCloud, FiDroplet } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Temperature Converter - Free Online Tool | Convert Celsius, Fahrenheit, Kelvin',
  description: 'Free online temperature converter. Convert between Celsius, Fahrenheit, Kelvin. Accurate calculations, conversion formulas, weather examples, and scientific applications.',
  keywords: 'temperature converter, Celsius to Fahrenheit, Fahrenheit to Celsius, Kelvin conversion, temperature scale, weather converter, online tool',
  openGraph: {
    title: 'Temperature Converter - Free Online Tool',
    description: 'Convert between different temperature scales instantly',
    type: 'website',
  },
};

export default function TemperatureConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Temperature Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between Celsius, Fahrenheit, and Kelvin
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="fahrenheit" />
          </div>
        </section>

        {/* Understanding Temperature Scales */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Understanding Temperature Scales</h3>
            <p className="section-subtitle">The three main temperature measurement systems</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#ef4444' }}>
                <FiThermometer className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Celsius</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Water freezes at 0°C, boils at 100°C</p>
                <p className="mb-2">Used worldwide except USA</p>
                <p>Scientific standard in most countries</p>
              </div>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <FiThermometer className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fahrenheit</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Water freezes at 32°F, boils at 212°F</p>
                <p className="mb-2">Used primarily in United States</p>
                <p>Common for weather and body temperature</p>
              </div>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiThermometer className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kelvin</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Absolute zero at 0K (-273.15°C)</p>
                <p className="mb-2">Used in scientific applications</p>
                <p>SI unit for thermodynamic temperature</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Formulas */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Conversion Formulas</h3>
            <p className="section-subtitle">Mathematical relationships between temperature scales</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiThermometer className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Celsius to Fahrenheit</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <code className="text-sm text-gray-800">°F = (°C × 9/5) + 32</code>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Example:</strong> 25°C = (25 × 9/5) + 32 = 77°F</p>
                <p><strong>Body temp:</strong> 37°C = 98.6°F</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiThermometer className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Fahrenheit to Celsius</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <code className="text-sm text-gray-800">°C = (°F - 32) × 5/9</code>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Example:</strong> 77°F = (77 - 32) × 5/9 = 25°C</p>
                <p><strong>Room temp:</strong> 68°F = 20°C</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiThermometer className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Celsius to Kelvin</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <code className="text-sm text-gray-800">K = °C + 273.15</code>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Example:</strong> 25°C = 25 + 273.15 = 298.15K</p>
                <p><strong>Freezing:</strong> 0°C = 273.15K</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Temperature References */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Temperature References</h3>
            <p className="section-subtitle">Everyday temperature comparisons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiCloud className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Weather References</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Freezing:</strong> 0°C = 32°F = 273.15K</p>
                <p><strong>Room temp:</strong> 20°C = 68°F = 293.15K</p>
                <p><strong>Hot day:</strong> 35°C = 95°F = 308.15K</p>
                <p><strong>Boiling:</strong> 100°C = 212°F = 373.15K</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiSun className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Body Temperature</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Normal:</strong> 37°C = 98.6°F = 310.15K</p>
                <p><strong>Fever:</strong> 38°C = 100.4°F = 311.15K</p>
                <p><strong>High fever:</strong> 40°C = 104°F = 313.15K</p>
                <p><strong>Hypothermia:</strong> 35°C = 95°F = 308.15K</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiDroplet className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Water States</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Freezes:</strong> 0°C = 32°F = 273.15K</p>
                <p><strong>Cold water:</strong> 4°C = 39.2°F = 277.15K</p>
                <p><strong>Warm water:</strong> 40°C = 104°F = 313.15K</p>
                <p><strong>Boils:</strong> 100°C = 212°F = 373.15K</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Practical Applications</h3>
            <p className="section-subtitle">Where temperature conversion is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiSun className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Daily Life</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Weather forecasting:</strong> Converting between Celsius and Fahrenheit for international travel</p>
                <p><strong>Cooking:</strong> Oven temperatures and food safety guidelines</p>
                <p><strong>Clothing:</strong> Understanding weather conditions for appropriate attire</p>
                <p><strong>Home heating:</strong> Thermostat settings and energy efficiency</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiThermometer className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Scientific & Medical</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Medicine:</strong> Body temperature monitoring and fever detection</p>
                <p><strong>Laboratory:</strong> Scientific experiments and research</p>
                <p><strong>Engineering:</strong> Material properties and thermal expansion</p>
                <p><strong>Astronomy:</strong> Stellar temperatures and cosmic phenomena</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Temperature</h3>
            <p className="section-subtitle">Simple steps for accurate temperature conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Temperature</h4>
              <p className="text-sm text-gray-600">Input the temperature value you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#ef4444' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Scale</h4>
              <p className="text-sm text-gray-600">Choose from Celsius, Fahrenheit, or Kelvin</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Scale</h4>
              <p className="text-sm text-gray-600">Select the temperature scale to convert to</p>
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
            <p className="section-subtitle">Common questions about temperature conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is absolute zero?</h4>
              <p className="text-sm text-gray-600">Absolute zero is 0 Kelvin (-273.15°C or -459.67°F), the lowest possible temperature where all molecular motion stops.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why does the US use Fahrenheit?</h4>
              <p className="text-sm text-gray-600">The US retained Fahrenheit due to historical reasons and established infrastructure. The scale was developed by Daniel Gabriel Fahrenheit in 1724.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between heat and temperature?</h4>
              <p className="text-sm text-gray-600">Temperature measures the average kinetic energy of particles, while heat is the total thermal energy transferred between objects.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this temperature converter?</h4>
              <p className="text-sm text-gray-600">Our converter uses precise mathematical formulas and provides results with up to 10 decimal places for scientific accuracy.</p>
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
