import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KM/H to MPH Converter - Convert Kilometers per Hour to Miles per Hour',
  description: 'Free km/h to mph converter. Convert kilometers per hour to miles per hour instantly. 1 km/h = 0.621371 mph. Accurate results, conversion formula, and practical examples.',
  keywords: 'km/h to mph, kilometers per hour to miles per hour, convert km/h to mph, speed converter',
  openGraph: {
    title: 'KM/H to MPH Converter',
    description: 'Convert km/h to mph instantly',
    type: 'website',
  },
};

export default function KmhToMphPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KM/H to MPH Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilometers per hour to miles per hour instantly. 1 km/h = 0.621371 mph.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="kmh" defaultTo="mph" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">mph = km/h × 0.621371</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply km/h by 0.621371 to get mph</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kmh: '10 km/h', mph: '6.2 mph' },
              { kmh: '20 km/h', mph: '12.4 mph' },
              { kmh: '30 km/h', mph: '18.6 mph' },
              { kmh: '40 km/h', mph: '24.9 mph' },
              { kmh: '50 km/h', mph: '31.1 mph' },
              { kmh: '60 km/h', mph: '37.3 mph' },
              { kmh: '80 km/h', mph: '49.7 mph' },
              { kmh: '100 km/h', mph: '62.1 mph' },
              { kmh: '120 km/h', mph: '74.6 mph' },
              { kmh: '140 km/h', mph: '87.0 mph' },
              { kmh: '5 km/h', mph: '3.1 mph' },
              { kmh: '90 km/h', mph: '55.9 mph' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.kmh}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mph-to-kmh/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MPH to KMH</Link>
            <Link href="/kmh-to-mps/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">KMH to MPS</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
