import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MPH to Meters/sec Converter - Convert mph to m/s',
  description: 'Free mph to m/s converter. Convert miles per hour to meters per second instantly. 1 mph = 0.44704 m/s. Accurate results, conversion formula, and practical examples.',
  keywords: 'mph to m/s, miles per hour to meter per second, convert mph to m/s, speed converter',
  openGraph: {
    title: 'MPH to Meters/sec Converter',
    description: 'Convert mph to m/s instantly',
    type: 'website',
  },
};

export default function MphToMpsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MPH to Meters/sec Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert mph to m/s instantly. 1 mph = 0.44704 m/s.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mph" defaultTo="mps" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">m/s = mph × 0.44704</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply mph by 0.44704 to get m/s</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mph: '10 mph', mps: '4.47 m/s' },
              { mph: '20 mph', mps: '8.94 m/s' },
              { mph: '30 mph', mps: '13.41 m/s' },
              { mph: '40 mph', mps: '17.88 m/s' },
              { mph: '50 mph', mps: '22.35 m/s' },
              { mph: '60 mph', mps: '26.82 m/s' },
              { mph: '70 mph', mps: '31.29 m/s' },
              { mph: '80 mph', mps: '35.76 m/s' },
              { mph: '5 mph', mps: '2.24 m/s' },
              { mph: '25 mph', mps: '11.18 m/s' },
              { mph: '55 mph', mps: '24.59 m/s' },
              { mph: '100 mph', mps: '44.70 m/s' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.mph}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mps-to-mph/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MPS to MPH</Link>
            <Link href="/mph-to-kmh/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">MPH to KMH</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
