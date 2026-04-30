import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize, FiBook, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'MB to GB Converter - Convert Megabytes to Gigabytes | Free Tool',
  description: 'Free MB to GB converter. Convert megabytes to gigabytes instantly with accurate results. Learn the difference between MB and GB, understand file sizes, storage capacity, and data usage.',
  keywords: 'mb to gb, megabytes to gigabytes, convert mb to gb, data storage converter, file size converter, memory converter',
  openGraph: {
    title: 'MB to GB Converter - Convert Megabytes to Gigabytes',
    description: 'Convert megabytes to gigabytes instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function MbToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">MB to GB Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert megabytes to gigabytes instantly. 1 GB = 1024 MB
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="card p-6">
              <ConverterCard category="data" defaultFrom="megabyte" defaultTo="gigabyte" />
            </div>
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Data Conversions</h3>
            <p className="section-subtitle">Quick reference for storage measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">MB to GB</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>512 MB = 0.5 GB</li>
                <li>1024 MB = 1 GB</li>
                <li>2048 MB = 2 GB</li>
                <li>4096 MB = 4 GB</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">GB to MB</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 GB = 1024 MB</li>
                <li>2 GB = 2048 MB</li>
                <li>5 GB = 5120 MB</li>
                <li>10 GB = 10240 MB</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">File Size Examples</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Photo: 2-5 MB</li>
                <li>Song: 3-8 MB</li>
                <li>Movie: 1.5-4 GB</li>
                <li>Game: 20-100 GB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Data Storage Unit Definitions</h3>
            <p className="section-subtitle">Understanding digital storage units and standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Byte (B)</h4>
              <p className="text-sm text-gray-600">The basic unit of digital information. One byte represents 8 bits and can store a single character.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Kilobyte (KB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,024 bytes. Used for measuring small files like text documents and simple images.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Megabyte (MB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,048,576 bytes (1,024 KB). Commonly used for photos, songs, and documents.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Gigabyte (GB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,073,741,824 bytes (1,024 MB). Used for larger files like videos and software.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Terabyte (TB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,099,511,627,776 bytes (1,024 GB). Used for hard drives and large storage systems.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Petabyte (PB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,125,899,906,842,624 bytes (1,024 TB). Used in enterprise storage and data centers.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Exabyte (EB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,152,921,504,606,846,976 bytes (1,024 PB). Used for massive data storage systems.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Zettabyte (ZB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,180,591,620,717,411,303,424 bytes (1,024 EB). Used for global data measurements.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Yottabyte (YB)</h4>
              <p className="text-sm text-gray-600">Equal to 1,208,925,819,614,629,174,706,176 bytes (1,024 ZB). The largest currently defined unit.</p>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the MB to GB Converter</h3>
            <p className="section-subtitle">Simple steps to get accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the megabytes value you want to convert in the input field</p>
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

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about data storage conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many MB are in 1 GB?</h4>
              <p className="text-sm text-gray-600">There are exactly 1,024 megabytes (MB) in one gigabyte (GB) when using binary calculations.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is 1 GB equal to 1000 MB or 1024 MB?</h4>
              <p className="text-sm text-gray-600">In computing, 1 GB = 1024 MB (binary system). Storage manufacturers often use 1 GB = 1000 MB (decimal). Our converter uses the standard 1024 MB = 1 GB.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is bigger: MB or GB?</h4>
              <p className="text-sm text-gray-600">GB (gigabyte) is bigger than MB (megabyte). 1 GB = 1024 MB, so a gigabyte is approximately 1000 times larger.</p>
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
                href="/data-converter/"
                className="btn btn-primary"
              >
                <span>Data Converter</span>
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
