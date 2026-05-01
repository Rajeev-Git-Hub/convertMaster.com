import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'TB to GB Converter - Convert Terabytes to Gigabytes',
  description: 'Free TB to GB converter. Convert terabytes to gigabytes instantly. 1 TB = 1024 GB. Accurate results, conversion formula, and practical examples.',
  keywords: 'tb to gb, terabytes to gigabytes, convert tb to gb, tb gb converter, data storage converter',
  openGraph: {
    title: 'TB to GB Converter',
    description: 'Convert terabytes to gigabytes instantly',
    type: 'website',
  },
};

export default function TbToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TB to GB Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert terabytes to gigabytes instantly. 1 TB = 1024 GB
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="terabyte" defaultTo="gigabyte" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">GB = TB × 1024</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply terabytes by 1024 to get gigabytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { tb: '0.5 TB', gb: '512 GB' },
              { tb: '1 TB', gb: '1024 GB' },
              { tb: '2 TB', gb: '2048 GB' },
              { tb: '4 TB', gb: '4096 GB' },
              { tb: '8 TB', gb: '8192 GB' },
              { tb: '10 TB', gb: '10240 GB' },
              { tb: '16 TB', gb: '16384 GB' },
              { tb: '32 TB', gb: '32768 GB' },
              { tb: '0.25 TB', gb: '256 GB' },
              { tb: '0.125 TB', gb: '128 GB' },
              { tb: '5 TB', gb: '5120 GB' },
              { tb: '100 TB', gb: '102400 GB' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.tb}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.gb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/gb-to-tb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">GB to TB</Link>
            <Link href="/tb-to-pb/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">TB to PB</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
