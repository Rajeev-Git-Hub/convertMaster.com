import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters/sec to MPH Converter - Convert m/s to mph',
  description: 'Free m/s to mph converter. Convert meters per second to miles per hour instantly. 1 m/s = 2.23694 mph. Accurate results, conversion formula, and practical examples.',
  keywords: 'm/s to mph, meter per second to mph, meters per second to miles per hour, convert m/s to mph, speed converter',
  openGraph: {
    title: 'Meters/sec to MPH Converter',
    description: 'Convert m/s to mph instantly',
    type: 'website',
  },
};

export default function MpsToMphPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meters/sec to MPH Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert m/s to mph instantly. 1 m/s = 2.23694 mph.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mps" defaultTo="mph" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">mph = m/s × 2.23694</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply m/s by 2.23694 to get mph</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mps: '1 m/s', mph: '2.24 mph' },
              { mps: '5 m/s', mph: '11.18 mph' },
              { mps: '10 m/s', mph: '22.37 mph' },
              { mps: '15 m/s', mph: '33.55 mph' },
              { mps: '20 m/s', mph: '44.74 mph' },
              { mps: '25 m/s', mph: '55.92 mph' },
              { mps: '30 m/s', mph: '67.11 mph' },
              { mps: '50 m/s', mph: '111.85 mph' },
              { mps: '4.47 m/s', mph: '10 mph' },
              { mps: '13.41 m/s', mph: '30 mph' },
              { mps: '26.82 m/s', mph: '60 mph' },
              { mps: '44.70 m/s', mph: '100 mph' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.mps}</p>
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
            <Link href="/mph-to-mps/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MPH to MPS</Link>
            <Link href="/mps-to-kmh/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">MPS to KMH</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
