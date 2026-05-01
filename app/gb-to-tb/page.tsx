import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to TB Converter - Convert Gigabytes to Terabytes',
  description: 'Free GB to TB converter. Convert gigabytes to terabytes instantly. 1 TB = 1024 GB. Accurate results, conversion formula, and practical examples.',
  keywords: 'gb to tb, gigabytes to terabytes, convert gb to tb, gb tb converter, data storage converter',
  openGraph: {
    title: 'GB to TB Converter',
    description: 'Convert gigabytes to terabytes instantly',
    type: 'website',
  },
};

export default function GbToTbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GB to TB Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert gigabytes to terabytes instantly. 1 TB = 1024 GB
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gigabyte" defaultTo="terabyte" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">TB = GB ÷ 1024</p>
              <p className="text-gray-600 dark:text-gray-300">Divide gigabytes by 1024 to get terabytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { gb: '256 GB', tb: '0.25 TB' },
              { gb: '512 GB', tb: '0.5 TB' },
              { gb: '1024 GB', tb: '1 TB' },
              { gb: '2048 GB', tb: '2 TB' },
              { gb: '4096 GB', tb: '4 TB' },
              { gb: '5120 GB', tb: '5 TB' },
              { gb: '8192 GB', tb: '8 TB' },
              { gb: '10240 GB', tb: '10 TB' },
              { gb: '128 GB', tb: '0.125 TB' },
              { gb: '100 GB', tb: '0.098 TB' },
              { gb: '500 GB', tb: '0.488 TB' },
              { gb: '1000 GB', tb: '0.977 TB' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.gb}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.tb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/tb-to-gb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">TB to GB</Link>
            <Link href="/gb-to-mb/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">GB to MB</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
