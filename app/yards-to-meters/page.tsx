import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Yards to Meters Converter - Convert Yards to Meters',
  description: 'Free yards to meters converter. Convert yards to meters instantly. 1 yard = 0.9144 meters. Accurate results, conversion formula, and practical examples.',
  keywords: 'yards to meters, yd to m, convert yards to meters, yards meters converter, yard to meter',
  openGraph: {
    title: 'Yards to Meters Converter',
    description: 'Convert yards to meters instantly',
    type: 'website',
  },
};

export default function YardsToMetersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Yards to Meters Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert yards to meters instantly. 1 yard = 0.9144 meters.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="yard" defaultTo="meter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">meters = yards × 0.9144</p>
              <p className="text-gray-600 dark:text-gray-300">Or multiply by 0.9144 for exact conversion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { yd: '1 yd', m: '0.91 m' },
              { yd: '5 yd', m: '4.57 m' },
              { yd: '10 yd', m: '9.14 m' },
              { yd: '25 yd', m: '22.86 m' },
              { yd: '50 yd', m: '45.72 m' },
              { yd: '100 yd', m: '91.44 m' },
              { yd: '200 yd', m: '182.88 m' },
              { yd: '500 yd', m: '457.2 m' },
              { yd: '1000 yd', m: '914.4 m' },
              { yd: '1760 yd', m: '1609.34 m' },
              { yd: '220 yd', m: '201.17 m' },
              { yd: '100 yd', m: '91.44 m' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.yd}</p>
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
            <Link href="/meters-to-yards/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Meters to Yards</Link>
            <Link href="/yards-to-feet/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Yards to Feet</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
