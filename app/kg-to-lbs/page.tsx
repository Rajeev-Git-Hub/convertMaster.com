import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'KG to LBS Converter – Convert Kilograms to Pounds | Free Tool',
  description: 'Free kg to lbs converter. Convert kilograms to pounds instantly with accurate results. Learn the conversion formula, see common conversions, and understand when to use each unit. Perfect for fitness, travel, and shipping.',
  keywords: 'kg to lbs, kilograms to pounds, kg to pounds converter, convert kg to lbs, weight conversion, 1 kg to lbs, how many pounds in a kilogram',
  openGraph: {
    title: 'KG to LBS Converter – Convert Kilograms to Pounds',
    description: 'Convert kilograms to pounds instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function KgToLbsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">KG to LBS Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="weight" defaultFrom="kg" defaultTo="lbs" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Weight Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday weight measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiBook className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Kilograms to Pounds</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 kg = 2.20462 lbs</li>
                <li>5 kg = 11.0231 lbs</li>
                <li>10 kg = 22.0462 lbs</li>
                <li>50 kg = 110.231 lbs</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Pounds to Kilograms</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 lb = 0.453592 kg</li>
                <li>5 lbs = 2.26796 kg</li>
                <li>10 lbs = 4.53592 kg</li>
                <li>100 lbs = 45.3592 kg</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiBook className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Estimates</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 kg = ~2.2 lbs</li>
                <li>5 kg = ~11 lbs</li>
                <li>10 kg = ~22 lbs</li>
                <li>100 kg = ~220 lbs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the KG to LBS Converter</h3>
            <p className="section-subtitle">Simple steps to get accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the weight value you want to convert in the input field</p>
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

        {/* Weight Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Weight Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement systems and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kilogram (kg)</h4>
              <p className="text-sm text-gray-600">The SI unit of mass. Defined as the mass of the international prototype kilogram.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Pound (lb)</h4>
              <p className="text-sm text-gray-600">Equal to 0.45359237 kilograms. Commonly used in the United States and other countries.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Gram (g)</h4>
              <p className="text-sm text-gray-600">One thousandth of a kilogram. Used for measuring small weights and food portions.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Milligram (mg)</h4>
              <p className="text-sm text-gray-600">One thousandth of a gram. Used in medicine and chemistry for precise measurements.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Ounce (oz)</h4>
              <p className="text-sm text-gray-600">Equal to 28.3495 grams. Used for measuring food portions and small items.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Stone (st)</h4>
              <p className="text-sm text-gray-600">Equal to 6.35029 kilograms. Primarily used in the United Kingdom and Ireland.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Metric Ton (t)</h4>
              <p className="text-sm text-gray-600">Equal to 1,000 kilograms. Used for measuring large weights in shipping and industry.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">US Ton</h4>
              <p className="text-sm text-gray-600">Equal to 907.185 kilograms. Used in the United States for large weight measurements.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Carat (ct)</h4>
              <p className="text-sm text-gray-600">Equal to 0.2 grams. Used for measuring gemstones and precious metals.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about weight conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many pounds are in a kilogram?</h4>
              <p className="text-sm text-gray-600">There are 2.20462 pounds in one kilogram. This is the exact conversion factor used internationally.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between kg and lbs?</h4>
              <p className="text-sm text-gray-600">Kilograms are part of the metric system used worldwide, while pounds are part of the imperial system primarily used in the US.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this weight converter?</h4>
              <p className="text-sm text-gray-600">Our converter provides results with up to 6 decimal places, ensuring high precision for professional and personal use.</p>
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
