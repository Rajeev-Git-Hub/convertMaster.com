import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Pounds to Ounces Converter - Convert Pounds to Ounces',
  description: 'Free pounds to ounces converter. Convert pounds to ounces instantly. 1 pound = 16 ounces. Accurate results, conversion formula, and practical examples.',
  keywords: 'pounds to ounces, lbs to oz, convert pounds to ounces, pounds ounces converter, pound to ounce',
  openGraph: {
    title: 'Pounds to Ounces Converter',
    description: 'Convert pounds to ounces instantly',
    type: 'website',
  },
};

export default function PoundsToOuncesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pounds to Ounces Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert pounds to ounces instantly. 1 pound = 16 ounces.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">ounces = pounds × 16</p>
              <p className="text-gray-600 dark:text-gray-300">Simply multiply pounds by 16 to get ounces</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { lbs: '0.25 lb', oz: '4 oz' },
              { lbs: '0.5 lb', oz: '8 oz' },
              { lbs: '1 lb', oz: '16 oz' },
              { lbs: '2 lbs', oz: '32 oz' },
              { lbs: '3 lbs', oz: '48 oz' },
              { lbs: '4 lbs', oz: '64 oz' },
              { lbs: '5 lbs', oz: '80 oz' },
              { lbs: '8 lbs', oz: '128 oz' },
              { lbs: '10 lbs', oz: '160 oz' },
              { lbs: '0.1 lb', oz: '1.6 oz' },
              { lbs: '0.0625 lb', oz: '1 oz' },
              { lbs: '1.5 lbs', oz: '24 oz' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.lbs}</p>
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
            <Link href="/ounces-to-pounds/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Ounces to Pounds</Link>
            <Link href="/lbs-to-kg/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">LBS to KG</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
