import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to Bytes Converter - Convert Gigabytes to Bytes',
  description: 'Free GB to bytes converter. Convert gigabytes to bytes instantly. 1 GB = 1,073,741,824 bytes. Accurate results, conversion formula, and practical examples.',
  keywords: 'gb to bytes, gigabytes to bytes, convert gb to bytes, gb bytes converter, data storage converter',
  openGraph: {
    title: 'GB to Bytes Converter',
    description: 'Convert gigabytes to bytes instantly',
    type: 'website',
  },
};

export default function GbToBytesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GB to Bytes Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert gigabytes to bytes instantly. 1 GB = 1,073,741,824 bytes
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gigabyte" defaultTo="byte" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">bytes = GB × 1,073,741,824</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply gigabytes by 1,073,741,824 (1024³) to get bytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { gb: '0.001 GB', bytes: '1073742 B' },
              { gb: '0.01 GB', bytes: '10737418 B' },
              { gb: '0.1 GB', bytes: '107374182 B' },
              { gb: '0.5 GB', bytes: '536870912 B' },
              { gb: '1 GB', bytes: '1073741824 B' },
              { gb: '2 GB', bytes: '2147483648 B' },
              { gb: '5 GB', bytes: '5368709120 B' },
              { gb: '10 GB', bytes: '10737418240 B' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.gb}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.bytes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/bytes-to-gb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Bytes to GB</Link>
            <Link href="/gb-to-mb/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">GB to MB</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
