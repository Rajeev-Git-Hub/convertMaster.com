import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KM to Meters Converter - Convert Kilometers to Meters',
  description: 'Free km to meters converter. Convert kilometers to meters instantly. 1 km = 1000 meters. Accurate results, conversion formula, and practical examples.',
  keywords: 'km to meters, kilometers to meters, km to m, convert km to meters, km meters converter',
  openGraph: {
    title: 'KM to Meters Converter',
    description: 'Convert kilometers to meters instantly',
    type: 'website',
  },
};

export default function KmToMetersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KM to Meters Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilometers to meters instantly. 1 km = 1000 meters.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="kilometer" defaultTo="meter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">meters = km × 1000</p>
              <p className="text-gray-600 dark:text-gray-300">Simply multiply kilometers by 1000 to get meters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { km: '0.1 km', m: '100 m' },
              { km: '0.5 km', m: '500 m' },
              { km: '1 km', m: '1000 m' },
              { km: '2 km', m: '2000 m' },
              { km: '5 km', m: '5000 m' },
              { km: '10 km', m: '10000 m' },
              { km: '25 km', m: '25000 m' },
              { km: '50 km', m: '50000 m' },
              { km: '100 km', m: '100000 m' },
              { km: '200 km', m: '200000 m' },
              { km: '500 km', m: '500000 m' },
              { km: '1000 km', m: '1000000 m' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.km}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/meters-to-km/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Meters to KM</Link>
            <Link href="/km-to-miles/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">KM to Miles</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
