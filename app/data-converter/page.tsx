import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiHardDrive, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiDatabase, FiFile, FiDownload } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Data Converter - Free Online Tool | Convert GB, MB, KB, Bytes, Bits',
  description: 'Free online data converter. Convert between gigabytes, megabytes, kilobytes, bytes, bits. Accurate calculations, conversion tables, and digital storage examples.',
  keywords: 'data converter, GB to MB, MB to KB, bytes to bits, data storage converter, file size converter, online tool',
  openGraph: {
    title: 'Data Converter - Free Online Tool',
    description: 'Convert between different units of data storage instantly',
    type: 'website',
  },
};

export default function DataConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="h-16" />
          <h1 className="hero-gradient text-4xl font-bold mb-4">Data Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between gigabytes, megabytes, kilobytes, bytes, and bits
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="data" defaultFrom="megabyte" defaultTo="gigabyte" />
          </div>
        </section>

        {/* Data Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Data Unit Definitions</h3>
            <p className="section-subtitle">Understanding digital storage measurement standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Byte (B)</h5>
              <p className="text-sm text-gray-600">The basic unit of digital information. Equal to 8 bits. Used for measuring file sizes, memory capacity, and data storage across all computing devices.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Kilobyte (KB)</h5>
              <p className="text-sm text-gray-600">Equal to 1,024 bytes. Used for measuring small text documents, configuration files, and email attachments in digital storage systems.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Megabyte (MB)</h5>
              <p className="text-sm text-gray-600">Equal to 1,048,576 bytes (1,024 KB). Commonly used for measuring images, music files, and software applications.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Gigabyte (GB)</h5>
              <p className="text-sm text-gray-600">Equal to 1,073,741,824 bytes (1,024 MB). Used for measuring large files, videos, games, and storage device capacity.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Terabyte (TB)</h5>
              <p className="text-sm text-gray-600">Equal to 1,099,511,627,776 bytes (1,024 GB). Used for measuring hard drives, cloud storage, and large data sets.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Bit</h5>
              <p className="text-sm text-gray-600">The smallest unit of digital information. Equal to 0 or 1. Eight bits make one byte. Used in networking and data transmission.</p>
            </div>
          </div>
        </section>

        {/* Common Data Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Data Conversions</h3>
            <p className="section-subtitle">Quick reference for digital storage measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiHardDrive className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">GB to MB</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 GB = 1,024 MB</li>
                <li>10 GB = 10,240 MB</li>
                <li>100 GB = 102,400 MB</li>
                <li>1 TB = 1,048,576 MB</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiFile className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">MB to KB</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 MB = 1,024 KB</li>
                <li>10 MB = 10,240 KB</li>
                <li>100 MB = 102,400 KB</li>
                <li>1 GB = 1,048,576 KB</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiDatabase className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Bytes to Bits</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 Byte = 8 bits</li>
                <li>1 KB = 8,192 bits</li>
                <li>1 MB = 8,388,608 bits</li>
                <li>1 GB = 8,589,934,592 bits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Applications</h3>
            <p className="section-subtitle">Where data conversion is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiFile className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">File Sizes</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Document:</strong> 50 KB = 51,200 bytes</p>
                <p><strong>Photo:</strong> 5 MB = 5,242,880 bytes</p>
                <p><strong>Video:</strong> 2 GB = 2,147,483,648 bytes</p>
                <p><strong>Software:</strong> 500 MB = 524,288,000 bytes</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiHardDrive className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Storage Devices</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>USB drive:</strong> 32 GB = 32,768 MB</p>
                <p><strong>SSD:</strong> 1 TB = 1,024 GB</p>
                <p><strong>HDD:</strong> 4 TB = 4,096 GB</p>
                <p><strong>Phone storage:</strong> 128 GB = 131,072 MB</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiDownload className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Internet & Networks</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Download speed:</strong> 10 Mbps = 1.25 MB/s</p>
                <p><strong>Website:</strong> 5 MB = 40 Mbits</p>
                <p><strong>Streaming:</strong> 3 GB/hour = 6.4 Mbps</p>
                <p><strong>Data plan:</strong> 10 GB = 80,000 Mbits</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiDatabase className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Cloud & Backup</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Cloud storage:</strong> 100 GB = 102,400 MB</p>
                <p><strong>Backup:</strong> 2 TB = 2,048 GB</p>
                <p><strong>Database:</strong> 50 GB = 51,200 MB</p>
                <p><strong>Archive:</strong> 10 TB = 10,240 GB</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Data Units</h3>
            <p className="section-subtitle">Simple steps for accurate data conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Data Value</h4>
              <p className="text-sm text-gray-600">Input the data size you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Unit</h4>
              <p className="text-sm text-gray-600">Choose the current data unit (GB, MB, KB, etc.)</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Unit</h4>
              <p className="text-sm text-gray-600">Select the data unit to convert to</p>
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
            <p className="section-subtitle">Common questions about data conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many MB are in a GB?</h4>
              <p className="text-sm text-gray-600">One gigabyte equals 1,024 megabytes. This is based on the binary system used in computing (2^10 = 1,024).</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between bits and bytes?</h4>
              <p className="text-sm text-gray-600">A bit is the smallest unit of data (0 or 1), while a byte consists of 8 bits. Bytes are used for file sizes, while bits are used for network speeds.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do storage devices show less space than advertised?</h4>
              <p className="text-sm text-gray-600">Manufacturers use decimal (1,000) while operating systems use binary (1,024). A 1TB drive shows as 931GB due to this difference.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this data converter?</h4>
              <p className="text-sm text-gray-600">Our converter uses precise binary calculations and provides results with up to 10 decimal places for professional accuracy.</p>
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
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
