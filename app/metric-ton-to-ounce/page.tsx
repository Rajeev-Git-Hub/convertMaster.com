import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Metric Tons to Ounces Converter',
  description: 'metric tons to ounces converter. Convert t to oz instantly with accurate results.',
  openGraph: {
    title: 'Metric Tons to Ounces Converter',
    description: 'metric tons to ounces converter. Convert t to oz instantly with accurate results.',
    type: 'website',
  },
};

export default function ConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Metric Tons to Ounces Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            metric tons to ounces converter. Convert t to oz instantly with accurate results.. Get accurate results instantly.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="weight" defaultFrom="metric-ton" defaultTo="ounce" />
          </div>
        </section>

        {/* Common Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Conversions</h3>
            <p className="section-subtitle">Quick reference for Metric-ton to Ounce conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Metric-ton to Ounce</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 metric-ton = 35273.9619496 ounce</li>
                <li>10 metric-ton = 352739.619496 ounce</li>
                <li>50 metric-ton = 1763698.09748 ounce</li>
                <li>100 metric-ton = 3527396.19496 ounce</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Ounce to Metric-ton</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 ounce = 0.000028349523125 metric-ton</li>
                <li>10 ounce = 0.00028349523125 metric-ton</li>
                <li>50 ounce = 0.00141747615625 metric-ton</li>
                <li>100 ounce = 0.0028349523125 metric-ton</li>
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
                <li>500 metric-ton = 17636980.9748 ounce</li>
                <li>1000 metric-ton = 35273961.9496 ounce</li>
                <li>5000 metric-ton = 176369809.748 ounce</li>
                <li>10000 metric-ton = 352739619.496 ounce</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use</h3>
            <p className="section-subtitle">Simple steps to convert Metric-ton to Ounce</p>
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
              <p className="text-sm text-gray-600">Choose Metric-ton as input and Ounce as output</p>
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
            <p className="section-subtitle">Understanding weight measurement units</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Kilogram (kg)</h4>
              </div>
              <p className="text-sm text-gray-600">Base metric unit for mass</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Pound (lb)</h4>
              </div>
              <p className="text-sm text-gray-600">Imperial unit, 16 ounces</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Gram (g)</h4>
              </div>
              <p className="text-sm text-gray-600">1/1000 of a kilogram</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Ounce (oz)</h4>
              </div>
              <p className="text-sm text-gray-600">1/16 of a pound</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Tonne (t)</h4>
              </div>
              <p className="text-sm text-gray-600">1000 kilograms, metric ton</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-box icon-box-primary" style={{ background: '#06b6d4' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Stone (st)</h4>
              </div>
              <p className="text-sm text-gray-600">British unit, 14 pounds</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about Metric-ton to Ounce conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I convert Metric-ton to Ounce?</h4>
              <p className="text-sm text-gray-600">Use our converter above. Enter the value in Metric-ton, select Metric-ton as input and Ounce as output, then click convert.</p>
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

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Converters</h3>
            <p className="section-subtitle mb-8">
              Discover our other weight conversion tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/weight-converter/"
                className="btn btn-primary"
              >
                <span>All Weight Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
