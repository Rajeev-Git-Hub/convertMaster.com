import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to MB Converter - Convert Gigabytes to Megabytes',
  description: 'Free GB to MB converter. Convert gigabytes to megabytes instantly. 1 GB = 1024 MB. Accurate results, conversion formula, and practical examples.',
  keywords: 'gb to mb, gigabytes to megabytes, convert gb to mb, gb mb converter, data storage converter',
  openGraph: {
    title: 'GB to MB Converter',
    description: 'Convert gigabytes to megabytes instantly',
    type: 'website',
  },
};

export default function GbToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GB to MB Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert gigabytes to megabytes instantly. 1 GB = 1024 MB
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gigabyte" defaultTo="megabyte" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">MB = GB × 1024</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply gigabytes by 1024 to get megabytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { gb: '0.5 GB', mb: '512 MB' },
              { gb: '1 GB', mb: '1024 MB' },
              { gb: '2 GB', mb: '2048 MB' },
              { gb: '4 GB', mb: '4096 MB' },
              { gb: '8 GB', mb: '8192 MB' },
              { gb: '16 GB', mb: '16384 MB' },
              { gb: '32 GB', mb: '32768 MB' },
              { gb: '64 GB', mb: '65536 MB' },
              { gb: '128 GB', mb: '131072 MB' },
              { gb: '256 GB', mb: '262144 MB' },
              { gb: '512 GB', mb: '524288 MB' },
              { gb: '1 TB', mb: '1048576 MB' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.gb}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mb-to-gb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MB to GB</Link>
            <Link href="/gb-to-tb/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">GB to TB</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
