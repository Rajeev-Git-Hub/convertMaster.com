import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to MG Converter - Convert Grams to Milligrams',
  description: 'Free grams to mg converter. Convert grams to milligrams instantly. 1 gram = 1000 milligrams. Accurate results, conversion formula, and practical examples.',
  keywords: 'grams to mg, grams to milligrams, g to mg, convert grams to mg, grams mg converter',
  openGraph: {
    title: 'Grams to MG Converter',
    description: 'Convert grams to milligrams instantly',
    type: 'website',
  },
};

export default function GramsToMgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grams to MG Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert grams to milligrams instantly. 1 gram = 1000 mg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="milligram" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">mg = grams × 1000</p>
              <p className="text-gray-600 dark:text-gray-300">Simply multiply grams by 1000 to get milligrams</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { g: '0.1 g', mg: '100 mg' },
              { g: '0.5 g', mg: '500 mg' },
              { g: '1 g', mg: '1000 mg' },
              { g: '2 g', mg: '2000 mg' },
              { g: '5 g', mg: '5000 mg' },
              { g: '10 g', mg: '10000 mg' },
              { g: '0.25 g', mg: '250 mg' },
              { g: '0.75 g', mg: '750 mg' },
              { g: '1.5 g', mg: '1500 mg' },
              { g: '2.5 g', mg: '2500 mg' },
              { g: '3 g', mg: '3000 mg' },
              { g: '50 g', mg: '50000 mg' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.g}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mg-to-grams/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MG to Grams</Link>
            <Link href="/grams-to-kg/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Grams to KG</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
