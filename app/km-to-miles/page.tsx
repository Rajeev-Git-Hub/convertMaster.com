import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KM to Miles Converter - Convert Kilometers to Miles',
  description: 'Free km to miles converter. Convert kilometers to miles instantly. 1 km = 0.621371 miles. Accurate results, conversion formula, and practical examples.',
  keywords: 'km to miles, kilometers to miles, km to mi, convert km to miles, km miles converter',
  openGraph: {
    title: 'KM to Miles Converter',
    description: 'Convert kilometers to miles instantly',
    type: 'website',
  },
};

export default function KmToMilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KM to Miles Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilometers to miles instantly. 1 km = 0.621371 miles.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="kilometer" defaultTo="mile" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">miles = km × 0.621371</p>
              <p className="text-gray-600 dark:text-gray-300">Or roughly 5/8 (0.625) for quick mental math</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { km: '1 km', mi: '0.62 mi' },
              { km: '5 km', mi: '3.11 mi' },
              { km: '10 km', mi: '6.21 mi' },
              { km: '15 km', mi: '9.32 mi' },
              { km: '20 km', mi: '12.43 mi' },
              { km: '25 km', mi: '15.53 mi' },
              { km: '50 km', mi: '31.07 mi' },
              { km: '100 km', mi: '62.14 mi' },
              { km: '200 km', mi: '124.27 mi' },
              { km: '500 km', mi: '310.69 mi' },
              { km: '1000 km', mi: '621.37 mi' },
              { km: '5000 km', mi: '3106.86 mi' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.km}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/miles-to-km/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Miles to KM</Link>
            <Link href="/km-to-meters/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">KM to Meters</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
