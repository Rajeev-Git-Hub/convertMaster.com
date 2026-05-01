import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to Ounces Converter - Convert Grams to Ounces',
  description: 'Free grams to ounces converter. Convert grams to ounces instantly. 1 gram = 0.035274 ounces. Accurate results, conversion formula, and practical examples.',
  keywords: 'grams to ounces, g to oz, convert grams to ounces, grams ounces converter, gram to ounce',
  openGraph: {
    title: 'Grams to Ounces Converter',
    description: 'Convert grams to ounces instantly',
    type: 'website',
  },
};

export default function GramsToOuncesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grams to Ounces Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert grams to ounces instantly. 1 gram = 0.035274 ounces.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">ounces = grams × 0.035274</p>
              <p className="text-gray-600 dark:text-gray-300">Or divide grams by 28.3495 for exact results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { g: '1 g', oz: '0.035 oz' },
              { g: '5 g', oz: '0.176 oz' },
              { g: '10 g', oz: '0.353 oz' },
              { g: '25 g', oz: '0.882 oz' },
              { g: '50 g', oz: '1.764 oz' },
              { g: '100 g', oz: '3.527 oz' },
              { g: '250 g', oz: '8.818 oz' },
              { g: '500 g', oz: '17.637 oz' },
              { g: '1000 g', oz: '35.274 oz' },
              { g: '28.35 g', oz: '1 oz' },
              { g: '454 g', oz: '16 oz' },
              { g: '5.67 g', oz: '0.2 oz' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.g}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.oz}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/ounces-to-grams/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Ounces to Grams</Link>
            <Link href="/kg-to-lbs/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">KG to LBS</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
