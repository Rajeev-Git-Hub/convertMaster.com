import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Microseconds to Seconds Converter | Time Tool',
  description: 'Convert microseconds to seconds instantly. 1 second = 1,000,000 microseconds. online time converter with accurate results.',
  openGraph: {
    title: 'Microseconds to Seconds Converter | Time Tool',
    description: 'Convert microseconds to seconds instantly. 1 second = 1,000,000 microseconds. online time converter with accurate results.',
    type: 'website',
  },
};

export default function ConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Microseconds to Seconds Converter | Time Tool</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert microseconds to seconds instantly. 1 second = 1,000,000 microseconds. online time converter with accurate results.. Get accurate results instantly.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="speed" defaultFrom="microsecond" defaultTo="second" />
          </div>
        </section>

        {/* Common Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Conversions</h3>
            <p className="section-subtitle">Quick reference for Microsecond to Second conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Microsecond to Second</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 microsecond = 0.000001 second</li>
                <li>10 microsecond = 0.00001 second</li>
                <li>50 microsecond = 0.00005 second</li>
                <li>100 microsecond = 0.0001 second</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Second to Microsecond</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 second = 1000000 microsecond</li>
                <li>10 second = 10000000 microsecond</li>
                <li>50 second = 50000000 microsecond</li>
                <li>100 second = 100000000 microsecond</li>
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
                <li>500 microsecond = 0.0005 second</li>
                <li>1000 microsecond = 0.001 second</li>
                <li>5000 microsecond = 0.005 second</li>
                <li>10000 microsecond = 0.01 second</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use</h3>
            <p className="section-subtitle">Simple steps to convert Microsecond to Second</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the amount you want to convert in the input field</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Units</h4>
              <p className="text-sm text-gray-600">Choose Microsecond as input and Second as output</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">Click convert to see your accurate result instantly</p>
            </div>
          </div>
        </section>

        {/* Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Unit Definitions</h3>
            <p className="section-subtitle">Understanding speed measurement units</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">mph</h4>
              </div>
              <p className="text-sm text-gray-600">Miles per hour, common in US/UK</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">km/h</h4>
              </div>
              <p className="text-sm text-gray-600">Kilometers per hour, metric unit</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">m/s</h4>
              </div>
              <p className="text-sm text-gray-600">Meters per second, scientific unit</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">ft/s</h4>
              </div>
              <p className="text-sm text-gray-600">Feet per second, engineering unit</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">knots</h4>
              </div>
              <p className="text-sm text-gray-600">Nautical miles per hour</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about Microsecond to Second conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I convert Microsecond to Second?</h4>
              <p className="text-sm text-gray-600">Use our converter above. Enter the value in Microsecond, select Microsecond as input and Second as output, then click convert.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is the conversion formula?</h4>
              <p className="text-sm text-gray-600">The conversion uses standard mathematical formulas based on the relationship between these units. Our calculator handles all calculations automatically.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is this conversion accurate?</h4>
              <p className="text-sm text-gray-600">Yes, all conversions use standard international conversion factors and provide results with high precision.</p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-3xl">
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Instant Results</h4>
              <p className="text-xs text-gray-600 mt-1">Real-time conversion</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Easy to Use</h4>
              <p className="text-xs text-gray-600 mt-1">Simple interface</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Always Available</h4>
              <p className="text-xs text-gray-600 mt-1">24/7 access</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Converters</h3>
            <p className="section-subtitle mb-8">
              Discover our other speed conversion tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/speed-converter/"
                className="btn btn-primary"
              >
                <span>All Speed Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
