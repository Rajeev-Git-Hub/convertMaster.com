import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KB to Bytes Converter - Convert Kilobytes to Bytes',
  description: 'Free KB to bytes converter. Convert kilobytes to bytes instantly. 1 KB = 1024 bytes. Accurate results, conversion formula, and practical examples.',
  keywords: 'kb to bytes, kilobytes to bytes, convert kb to bytes, kb bytes converter, data storage converter',
  openGraph: {
    title: 'KB to Bytes Converter',
    description: 'Convert kilobytes to bytes instantly',
    type: 'website',
  },
};

export default function KbToBytesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KB to Bytes Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilobytes to bytes instantly. 1 KB = 1024 bytes
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kilobyte" defaultTo="byte" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">bytes = KB × 1024</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply kilobytes by 1024 to get bytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kb: '0.5 KB', bytes: '512 B' },
              { kb: '1 KB', bytes: '1024 B' },
              { kb: '2 KB', bytes: '2048 B' },
              { kb: '5 KB', bytes: '5120 B' },
              { kb: '10 KB', bytes: '10240 B' },
              { kb: '50 KB', bytes: '51200 B' },
              { kb: '100 KB', bytes: '102400 B' },
              { kb: '0.25 KB', bytes: '256 B' },
              { kb: '0.125 KB', bytes: '128 B' },
              { kb: '0.1 KB', bytes: '102 B' },
              { kb: '0.05 KB', bytes: '51 B' },
              { kb: '0.01 KB', bytes: '10 B' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.kb}</p>
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
            <Link href="/bytes-to-kb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Bytes to KB</Link>
            <Link href="/kb-to-mb/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">KB to MB</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
