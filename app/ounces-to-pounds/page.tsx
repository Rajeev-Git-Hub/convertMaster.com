import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to Pounds Converter - Convert Ounces to Pounds',
  description: 'Free ounces to pounds converter. Convert ounces to pounds instantly. 16 ounces = 1 pound. Accurate results, conversion formula, and practical examples.',
  keywords: 'ounces to pounds, oz to lbs, convert ounces to pounds, ounces pounds converter, ounce to pound',
  openGraph: {
    title: 'Ounces to Pounds Converter',
    description: 'Convert ounces to pounds instantly',
    type: 'website',
  },
};

export default function OuncesToPoundsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ounces to Pounds Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert ounces to pounds instantly. 16 ounces = 1 pound.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="pound" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">pounds = ounces ÷ 16</p>
              <p className="text-gray-600 dark:text-gray-300">Divide ounces by 16 to get pounds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { oz: '1 oz', lbs: '0.0625 lb' },
              { oz: '2 oz', lbs: '0.125 lb' },
              { oz: '4 oz', lbs: '0.25 lb' },
              { oz: '8 oz', lbs: '0.5 lb' },
              { oz: '12 oz', lbs: '0.75 lb' },
              { oz: '16 oz', lbs: '1 lb' },
              { oz: '20 oz', lbs: '1.25 lbs' },
              { oz: '24 oz', lbs: '1.5 lbs' },
              { oz: '32 oz', lbs: '2 lbs' },
              { oz: '48 oz', lbs: '3 lbs' },
              { oz: '5 oz', lbs: '0.3125 lb' },
              { oz: '10 oz', lbs: '0.625 lb' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.oz}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.lbs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/pounds-to-ounces/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Pounds to Ounces</Link>
            <Link href="/ounces-to-grams/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Ounces to Grams</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
