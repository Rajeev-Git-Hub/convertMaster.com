import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Bytes to Bits Converter – Convert B to bit | Free Tool',
  description: 'Convert bytes to bits instantly. 1 byte = 8 bits. Free online converter with accurate results, conversion formula, and common data storage examples.',
  keywords: 'bytes to bits, B to bit, convert bytes to bits, data storage converter, digital units',
  openGraph: {
    title: 'Bytes to Bits Converter – Convert B to bit',
    description: 'Convert bytes to bits instantly with accurate results',
    type: 'website',
  },
};

export default function BytesToBitPage() {
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
              <span>Data Units</span>
            </div>
          </div>
          
          <h1 className="hero-gradient text-4xl font-bold mb-4">Bytes to Bits Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert bytes to bits instantly. 1 byte = 8 bits
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="data" defaultFrom="byte" defaultTo="bit" />
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
                <h3 className="text-lg font-semibold text-gray-900">Bytes to Bits</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 B = 8 bits</li>
                <li>10 B = 80 bits</li>
                <li>100 B = 800 bits</li>
                <li>1000 B = 8000 bits</li>
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
                <li>Multiply by 8</li>
                <li>1 byte = 8 bits</li>
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
                <li>1 byte - Single character</li>
                <li>8 bytes - Double precision</li>
                <li>1024 bytes - 1 KB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the Bytes to Bits Converter</h3>
            <p className="section-subtitle">Simple steps to get accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the bytes value you want to convert in the input field</p>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Byte (B)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 8 bits. Can represent a single character or number.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bit (bit)</h4>
              <p className="text-sm text-gray-600">Smallest unit of digital information. Can represent 0 or 1. Used for network speeds and compression ratios.</p>
            </div>
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
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,073,741,824 bytes. Used for larger storage capacities.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Terabyte (TB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,099,511,627,776 bytes. Used for very large storage systems.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Petabyte (PB)</h4>
              <p className="text-sm text-gray-600">Unit of digital information equal to 1,125,899,906,842,624 bytes. Used in enterprise storage.</p>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many bits are in 1 byte?</h4>
              <p className="text-sm text-gray-600">1 byte equals exactly 8 bits. This is the standard definition used in computing and digital storage.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How to convert bytes to bits?</h4>
              <p className="text-sm text-gray-600">Multiply the number of bytes by 8. For example: 100 bytes × 8 = 800 bits.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why use bits instead of bytes?</h4>
              <p className="text-sm text-gray-600">Bits are used for network speeds and data transfer rates, while bytes are used for file sizes and storage capacity.</p>
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
                href="/bit-to-bytes/"
                className="btn btn-secondary"
              >
                <span>Bits to Bytes</span>
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
