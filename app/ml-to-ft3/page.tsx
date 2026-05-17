import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Milliliters to Cubic Feet Converter',
  description: 'milliliters to cubic feet converter. Convert mL to ft³ instantly with accurate results.',
  openGraph: {
    title: 'Milliliters to Cubic Feet Converter',
    description: 'milliliters to cubic feet converter. Convert mL to ft³ instantly with accurate results.',
    type: 'website',
  },
};

export default function ConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Milliliters to Cubic Feet Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            milliliters to cubic feet converter. Convert mL to ft³ instantly with accurate results.. Get accurate results instantly.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="length" defaultFrom="ml" defaultTo="ft3" />
          </div>
        </section>

        {/* Common Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Conversions</h3>
            <p className="section-subtitle">Quick reference for Ml to Ft3 conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Ml to Ft3</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 ml = 0.0000353146667215 ft3</li>
                <li>10 ml = 0.000353146667215 ft3</li>
                <li>50 ml = 0.00176573333607 ft3</li>
                <li>100 ml = 0.00353146667215 ft3</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Ft3 to Ml</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 ft3 = 28316.846592 ml</li>
                <li>10 ft3 = 283168.46592 ml</li>
                <li>50 ft3 = 1415842.3296 ml</li>
                <li>100 ft3 = 2831684.6592 ml</li>
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
                <li>500 ml = 0.0176573333607 ft3</li>
                <li>1000 ml = 0.0353146667215 ft3</li>
                <li>5000 ml = 0.176573333607 ft3</li>
                <li>10000 ml = 0.353146667215 ft3</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use</h3>
            <p className="section-subtitle">Simple steps to convert Ml to Ft3</p>
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
              <p className="text-sm text-gray-600">Choose Ml as input and Ft3 as output</p>
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
            <p className="section-subtitle">Understanding length measurement units</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Centimeter (cm)</h4>
              </div>
              <p className="text-sm text-gray-600">Metric unit, 1/100 of a meter</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Inch (in)</h4>
              </div>
              <p className="text-sm text-gray-600">Imperial unit, 1/12 of a foot</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Meter (m)</h4>
              </div>
              <p className="text-sm text-gray-600">Base metric unit for length</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Foot (ft)</h4>
              </div>
              <p className="text-sm text-gray-600">Imperial unit, 12 inches</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Kilometer (km)</h4>
              </div>
              <p className="text-sm text-gray-600">1000 meters, metric unit</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#06b6d4' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Mile (mi)</h4>
              </div>
              <p className="text-sm text-gray-600">Imperial unit, 5280 feet</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about Ml to Ft3 conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I convert Ml to Ft3?</h4>
              <p className="text-sm text-gray-600">Use our converter above. Enter the value in Ml, select Ml as input and Ft3 as output, then click convert.</p>
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
              Discover our other length conversion tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/length-converter/"
                className="btn btn-primary"
              >
                <span>All Length Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
