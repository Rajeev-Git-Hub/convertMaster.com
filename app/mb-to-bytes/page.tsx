import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to Bytes Converter - Convert Megabytes to Bytes',
  description: 'Free MB to bytes converter. Convert megabytes to bytes instantly. 1 MB = 1,048,576 bytes. Accurate results, conversion formula, and practical examples.',
  keywords: 'mb to bytes, megabytes to bytes, convert mb to bytes, mb bytes converter, data storage converter',
  openGraph: {
    title: 'MB to Bytes Converter',
    description: 'Convert megabytes to bytes instantly',
    type: 'website',
  },
};

export default function MbToBytesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MB to Bytes Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert megabytes to bytes instantly. 1 MB = 1,048,576 bytes
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">bytes = MB × 1,048,576</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply megabytes by 1,048,576 (1024²) to get bytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mb: '0.001 MB', bytes: '1049 B' },
              { mb: '0.01 MB', bytes: '10486 B' },
              { mb: '0.1 MB', bytes: '104858 B' },
              { mb: '0.5 MB', bytes: '524288 B' },
              { mb: '1 MB', bytes: '1048576 B' },
              { mb: '2 MB', bytes: '2097152 B' },
              { mb: '5 MB', bytes: '5242880 B' },
              { mb: '10 MB', bytes: '10485760 B' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.mb}</p>
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
            <Link href="/bytes-to-mb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Bytes to MB</Link>
            <Link href="/gb-to-bytes/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">GB to Bytes</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
