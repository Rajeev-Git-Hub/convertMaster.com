import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'KB to MB Converter – Convert Kilobytes to Megabytes | Free Tool',
  description: 'Convert kilobytes to megabytes instantly. 1 MB = 1024 KB. Free online converter with accurate results, conversion formula, and common data storage examples.',
  keywords: 'kb to mb, kilobytes to megabytes, convert kb to mb, kb mb converter, data storage converter',
  openGraph: {
    title: 'KB to MB Converter – Convert Kilobytes to Megabytes',
    description: 'Convert kilobytes to megabytes instantly with accurate results',
    type: 'website',
  },
};

export default function KbToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">KB to MB Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert kilobytes to megabytes instantly. 1 MB = 1024 KB
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="data" defaultFrom="kilobyte" defaultTo="megabyte" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Data Storage Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday digital storage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">KB to MB</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1024 KB = 1 MB</li>
                <li>2048 KB = 2 MB</li>
                <li>5120 KB = 5 MB</li>
                <li>10240 KB = 10 MB</li>
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
                <li>Divide by 1024</li>
                <li>1 MB = 1024 KB</li>
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
                <li>1024 KB - 1 MB file</li>
                <li>2048 KB - 2 MB image</li>
                <li>10240 KB - 10 MB document</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the KB to MB Converter</h3>
            <p className="section-subtitle">Simple steps to get accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the kilobytes value you want to convert in the input field</p>
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

        {/* Data Storage Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Data Storage Unit Definitions</h3>
            <p className="section-subtitle">Understanding digital storage measurements and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kilobyte (KB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,024 bytes. Used for small files and memory.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Megabyte (MB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,048,576 bytes. Commonly used for file sizes and memory.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Gigabyte (GB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,073,741,824 bytes. Used for larger storage capacities like hard drives.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Terabyte (TB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,099,511,627,776 bytes. Used for very large storage systems and data centers.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Petabyte (PB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,125,899,906,842,624 bytes. Used in enterprise storage and big data applications.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Byte (B)</h4>
              <p className="text-sm text-gray-600">Basic unit of digital information. Can represent a single character or number.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bit (bit)</h4>
              <p className="text-sm text-gray-600">Smallest unit of digital information. 8 bits = 1 byte. Used for network speeds and compression ratios.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Nibble</h4>
              <p className="text-sm text-gray-600">4 bits or 0.5 bytes. Used in early computing and some compression algorithms.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Word</h4>
              <p className="text-sm text-gray-600">Fixed-size group of bits processed as a unit by a CPU. Typically 16, 32, or 64 bits.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about data storage conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many KB are in 1 MB?</h4>
              <p className="text-sm text-gray-600">1 megabyte equals exactly 1024 kilobytes. This is the standard definition used in computing and digital storage.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How to convert KB to MB?</h4>
              <p className="text-sm text-gray-600">Divide the number of kilobytes by 1024. For example: 2048 KB ÷ 1024 = 2 MB.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why use MB instead of KB?</h4>
              <p className="text-sm text-gray-600">MB is used for larger storage capacities like hard drives and SSDs, making it easier to understand large amounts of data.</p>
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
              Explore our other free conversion tools for all your digital storage needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/data-converter/"
                className="btn btn-primary"
              >
                <span>Data Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/mb-to-kb/"
                className="btn btn-secondary"
              >
                <span>MB to KB</span>
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
