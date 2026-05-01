import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters/sec to KM/H Converter - Convert m/s to km/h',
  description: 'Free m/s to km/h converter. Convert meters per second to kilometers per hour instantly. 1 m/s = 3.6 km/h. Accurate results, conversion formula, and practical examples.',
  keywords: 'm/s to km/h, meter per second to km/h, meters per second to kilometers per hour, convert m/s to km/h, speed converter',
  openGraph: {
    title: 'Meters/sec to KM/H Converter',
    description: 'Convert m/s to km/h instantly',
    type: 'website',
  },
};

export default function MpsToKmhPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meters/sec to KM/H Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert m/s to km/h instantly. 1 m/s = 3.6 km/h.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mps" defaultTo="kmh" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">km/h = m/s × 3.6</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply m/s by 3.6 to get km/h</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mps: '1 m/s', kmh: '3.6 km/h' },
              { mps: '5 m/s', kmh: '18 km/h' },
              { mps: '10 m/s', kmh: '36 km/h' },
              { mps: '15 m/s', kmh: '54 km/h' },
              { mps: '20 m/s', kmh: '72 km/h' },
              { mps: '25 m/s', kmh: '90 km/h' },
              { mps: '30 m/s', kmh: '108 km/h' },
              { mps: '50 m/s', kmh: '180 km/h' },
              { mps: '2.78 m/s', kmh: '10 km/h' },
              { mps: '13.89 m/s', kmh: '50 km/h' },
              { mps: '27.78 m/s', kmh: '100 km/h' },
              { mps: '100 m/s', kmh: '360 km/h' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.mps}</p>
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
            <Link href="/kmh-to-mps/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">KMH to MPS</Link>
            <Link href="/mps-to-mph/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">MPS to MPH</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
