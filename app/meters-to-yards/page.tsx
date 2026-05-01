import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters to Yards Converter - Convert Meters to Yards',
  description: 'Free meters to yards converter. Convert meters to yards instantly. 1 meter = 1.09361 yards. Accurate results, conversion formula, and practical examples.',
  keywords: 'meters to yards, m to yd, convert meters to yards, meters yards converter, meter to yard',
  openGraph: {
    title: 'Meters to Yards Converter',
    description: 'Convert meters to yards instantly',
    type: 'website',
  },
};

export default function MetersToYardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meters to Yards Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert meters to yards instantly. 1 meter = 1.09361 yards.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="meter" defaultTo="yard" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">yards = meters × 1.09361</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply by approximately 1.094 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { m: '1 m', yd: '1.09 yd' },
              { m: '5 m', yd: '5.47 yd' },
              { m: '10 m', yd: '10.94 yd' },
              { m: '25 m', yd: '27.34 yd' },
              { m: '50 m', yd: '54.68 yd' },
              { m: '100 m', yd: '109.36 yd' },
              { m: '200 m', yd: '218.72 yd' },
              { m: '400 m', yd: '437.45 yd' },
              { m: '800 m', yd: '874.89 yd' },
              { m: '1000 m', yd: '1093.61 yd' },
              { m: '1500 m', yd: '1640.42 yd' },
              { m: '5000 m', yd: '5468.07 yd' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.m}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.yd}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/yards-to-meters/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Yards to Meters</Link>
            <Link href="/meters-to-feet/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Meters to Feet</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
