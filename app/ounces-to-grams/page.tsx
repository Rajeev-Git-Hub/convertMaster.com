import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to Grams Converter - Convert Ounces to Grams',
  description: 'Free ounces to grams converter. Convert ounces to grams instantly. 1 ounce = 28.3495 grams. Accurate results, conversion formula, and practical examples.',
  keywords: 'ounces to grams, oz to g, convert ounces to grams, ounces grams converter, ounce to gram',
  openGraph: {
    title: 'Ounces to Grams Converter',
    description: 'Convert ounces to grams instantly',
    type: 'website',
  },
};

export default function OuncesToGramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ounces to Grams Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert ounces to grams instantly. 1 ounce = 28.3495 grams.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">grams = ounces × 28.3495</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply by approximately 28.35 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { oz: '1 oz', g: '28.35 g' },
              { oz: '2 oz', g: '56.70 g' },
              { oz: '4 oz', g: '113.40 g' },
              { oz: '8 oz', g: '226.80 g' },
              { oz: '12 oz', g: '340.19 g' },
              { oz: '16 oz', g: '453.59 g' },
              { oz: '0.5 oz', g: '14.17 g' },
              { oz: '0.25 oz', g: '7.09 g' },
              { oz: '3.5 oz', g: '99.22 g' },
              { oz: '5 oz', g: '141.75 g' },
              { oz: '6 oz', g: '170.10 g' },
              { oz: '10 oz', g: '283.50 g' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.oz}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/grams-to-ounces/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Grams to Ounces</Link>
            <Link href="/ounces-to-pounds/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Ounces to Pounds</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
