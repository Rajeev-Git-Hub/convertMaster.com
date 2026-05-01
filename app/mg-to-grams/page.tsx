import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MG to Grams Converter - Convert Milligrams to Grams',
  description: 'Free mg to grams converter. Convert milligrams to grams instantly. 1 mg = 0.001 grams. Accurate results, conversion formula, and practical examples.',
  keywords: 'mg to grams, milligrams to grams, mg to g, convert mg to grams, mg grams converter',
  openGraph: {
    title: 'MG to Grams Converter',
    description: 'Convert milligrams to grams instantly',
    type: 'website',
  },
};

export default function MgToGramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MG to Grams Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert milligrams to grams instantly. 1 mg = 0.001 grams.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="milligram" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">grams = mg × 0.001</p>
              <p className="text-gray-600 dark:text-gray-300">Or divide milligrams by 1000 to get grams</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mg: '1 mg', g: '0.001 g' },
              { mg: '10 mg', g: '0.01 g' },
              { mg: '50 mg', g: '0.05 g' },
              { mg: '100 mg', g: '0.1 g' },
              { mg: '250 mg', g: '0.25 g' },
              { mg: '500 mg', g: '0.5 g' },
              { mg: '1000 mg', g: '1 g' },
              { mg: '2000 mg', g: '2 g' },
              { mg: '5000 mg', g: '5 g' },
              { mg: '10000 mg', g: '10 g' },
              { mg: '500 mg', g: '0.5 g' },
              { mg: '750 mg', g: '0.75 g' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.mg}</p>
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
            <Link href="/grams-to-mg/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Grams to MG</Link>
            <Link href="/mg-to-kg/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">MG to KG</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
