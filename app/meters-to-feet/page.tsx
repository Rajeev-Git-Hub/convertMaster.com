import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters to Feet Converter - Convert Meters to Feet',
  description: 'Free meters to feet converter. Convert meters to feet instantly. 1 meter = 3.28084 feet. Accurate results, conversion formula, and practical examples.',
  keywords: 'meters to feet, m to ft, convert meters to feet, meters feet converter, m to feet',
  openGraph: {
    title: 'Meters to Feet Converter',
    description: 'Convert meters to feet instantly',
    type: 'website',
  },
};

export default function MetersToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meters to Feet Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert meters to feet instantly. 1 meter = 3.28084 feet.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="meter" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">feet = meters × 3.28084</p>
              <p className="text-gray-600 dark:text-gray-300">Or multiply by approximately 3.281 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { m: '1 m', ft: '3.28 ft' },
              { m: '2 m', ft: '6.56 ft' },
              { m: '3 m', ft: '9.84 ft' },
              { m: '5 m', ft: '16.40 ft' },
              { m: '10 m', ft: '32.81 ft' },
              { m: '15 m', ft: '49.21 ft' },
              { m: '20 m', ft: '65.62 ft' },
              { m: '50 m', ft: '164.04 ft' },
              { m: '100 m', ft: '328.08 ft' },
              { m: '200 m', ft: '656.17 ft' },
              { m: '500 m', ft: '1640.42 ft' },
              { m: '1000 m', ft: '3280.84 ft' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.m}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.ft}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/feet-to-meters/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Feet to Meters</Link>
            <Link href="/meters-to-inches/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Meters to Inches</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
