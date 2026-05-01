import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet to Meters Converter - Convert Feet to Meters',
  description: 'Free feet to meters converter. Convert feet to meters instantly. 1 foot = 0.3048 meters. Accurate results, conversion formula, and practical examples.',
  keywords: 'feet to meters, ft to m, convert feet to meters, feet meters converter, ft to m',
  openGraph: {
    title: 'Feet to Meters Converter',
    description: 'Convert feet to meters instantly',
    type: 'website',
  },
};

export default function FeetToMetersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Feet to Meters Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert feet to meters instantly. 1 foot = 0.3048 meters.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="foot" defaultTo="meter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">meters = feet × 0.3048</p>
              <p className="text-gray-600 dark:text-gray-300">Divide feet by 3.281 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { ft: '1 ft', m: '0.30 m' },
              { ft: '2 ft', m: '0.61 m' },
              { ft: '3 ft', m: '0.91 m' },
              { ft: '5 ft', m: '1.52 m' },
              { ft: '6 ft', m: '1.83 m' },
              { ft: '10 ft', m: '3.05 m' },
              { ft: '15 ft', m: '4.57 m' },
              { ft: '20 ft', m: '6.10 m' },
              { ft: '30 ft', m: '9.14 m' },
              { ft: '50 ft', m: '15.24 m' },
              { ft: '100 ft', m: '30.48 m' },
              { ft: '200 ft', m: '60.96 m' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.ft}</p>
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
            <Link href="/meters-to-feet/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Meters to Feet</Link>
            <Link href="/feet-to-inches/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Feet to Inches</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
