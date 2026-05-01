import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to Feet Converter - Convert Inches to Feet',
  description: 'Free inches to feet converter. Convert inches to feet instantly. 12 inches = 1 foot. Accurate results, conversion formula, and practical examples.',
  keywords: 'inches to feet, in to ft, convert inches to feet, inches feet converter, inch to foot',
  openGraph: {
    title: 'Inches to Feet Converter',
    description: 'Convert inches to feet instantly',
    type: 'website',
  },
};

export default function InchesToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Inches to Feet Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert inches to feet instantly. 12 inches = 1 foot.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">feet = inches ÷ 12</p>
              <p className="text-gray-600 dark:text-gray-300">Divide inches by 12 to get feet</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { inch: '12 in', ft: '1 ft' },
              { inch: '24 in', ft: '2 ft' },
              { inch: '36 in', ft: '3 ft' },
              { inch: '48 in', ft: '4 ft' },
              { inch: '60 in', ft: '5 ft' },
              { inch: '72 in', ft: '6 ft' },
              { inch: '96 in', ft: '8 ft' },
              { inch: '120 in', ft: '10 ft' },
              { inch: '144 in', ft: '12 ft' },
              { inch: '180 in', ft: '15 ft' },
              { inch: '240 in', ft: '20 ft' },
              { inch: '6 in', ft: '0.5 ft' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.inch}</p>
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
            <Link href="/feet-to-inches/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Feet to Inches</Link>
            <Link href="/inches-to-cm/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Inches to CM</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
