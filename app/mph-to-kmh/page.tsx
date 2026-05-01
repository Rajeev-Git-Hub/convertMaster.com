import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MPH to KM/H Converter - Convert Miles per Hour to Kilometers per Hour',
  description: 'Free mph to km/h converter. Convert miles per hour to kilometers per hour instantly. 1 mph = 1.60934 km/h. Accurate results, conversion formula, and practical examples.',
  keywords: 'mph to km/h, miles per hour to kilometers per hour, convert mph to km/h, speed converter',
  openGraph: {
    title: 'MPH to KM/H Converter',
    description: 'Convert mph to km/h instantly',
    type: 'website',
  },
};

export default function MphToKmhPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MPH to KM/H Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert miles per hour to kilometers per hour instantly. 1 mph = 1.60934 km/h.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mph" defaultTo="kmh" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">km/h = mph × 1.60934</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply mph by 1.60934 to get km/h</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mph: '10 mph', kmh: '16.1 km/h' },
              { mph: '20 mph', kmh: '32.2 km/h' },
              { mph: '30 mph', kmh: '48.3 km/h' },
              { mph: '40 mph', kmh: '64.4 km/h' },
              { mph: '50 mph', kmh: '80.5 km/h' },
              { mph: '60 mph', kmh: '96.6 km/h' },
              { mph: '70 mph', kmh: '112.7 km/h' },
              { mph: '80 mph', kmh: '128.7 km/h' },
              { mph: '5 mph', kmh: '8.0 km/h' },
              { mph: '25 mph', kmh: '40.2 km/h' },
              { mph: '55 mph', kmh: '88.5 km/h' },
              { mph: '75 mph', kmh: '120.7 km/h' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.mph}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.kmh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/kmh-to-mph/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">KMH to MPH</Link>
            <Link href="/mph-to-knots/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">MPH to Knots</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
