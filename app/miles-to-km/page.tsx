import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to KM Converter - Convert Miles to Kilometers',
  description: 'Free miles to km converter. Convert miles to kilometers instantly. 1 mile = 1.60934 km. Accurate results, conversion formula, and practical examples.',
  keywords: 'miles to km, miles to kilometers, mi to km, convert miles to km, miles km converter',
  openGraph: {
    title: 'Miles to KM Converter',
    description: 'Convert miles to kilometers instantly',
    type: 'website',
  },
};

export default function MilesToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Miles to KM Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert miles to kilometers instantly. 1 mile = 1.60934 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">km = miles × 1.60934</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply by 1.6 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mi: '1 mi', km: '1.61 km' },
              { mi: '5 mi', km: '8.05 km' },
              { mi: '10 mi', km: '16.09 km' },
              { mi: '15 mi', km: '24.14 km' },
              { mi: '20 mi', km: '32.19 km' },
              { mi: '25 mi', km: '40.23 km' },
              { mi: '50 mi', km: '80.47 km' },
              { mi: '100 mi', km: '160.93 km' },
              { mi: '200 mi', km: '321.87 km' },
              { mi: '500 mi', km: '804.67 km' },
              { mi: '1000 mi', km: '1609.34 km' },
              { mi: '5000 mi', km: '8046.72 km' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.mi}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.km}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/km-to-miles/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">KM to Miles</Link>
            <Link href="/miles-to-meters/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Miles to Meters</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
