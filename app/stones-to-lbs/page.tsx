import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Stones to LBS Converter - Convert Stones to Pounds',
  description: 'Free stones to lbs converter. Convert stones to pounds instantly. 1 stone = 14 pounds. Accurate results, conversion formula, and practical examples.',
  keywords: 'stones to lbs, stones to pounds, st to lbs, convert stones to lbs, stones pounds converter',
  openGraph: {
    title: 'Stones to LBS Converter',
    description: 'Convert stones to pounds instantly',
    type: 'website',
  },
};

export default function StonesToLbsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stones to LBS Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert stones to pounds instantly. 1 stone = 14 pounds.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="stone" defaultTo="pound" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">pounds = stones × 14</p>
              <p className="text-gray-600 dark:text-gray-300">Simply multiply stones by 14 to get pounds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { st: '0.5 st', lbs: '7 lbs' },
              { st: '1 st', lbs: '14 lbs' },
              { st: '2 st', lbs: '28 lbs' },
              { st: '3 st', lbs: '42 lbs' },
              { st: '4 st', lbs: '56 lbs' },
              { st: '5 st', lbs: '70 lbs' },
              { st: '6 st', lbs: '84 lbs' },
              { st: '7 st', lbs: '98 lbs' },
              { st: '8 st', lbs: '112 lbs' },
              { st: '9 st', lbs: '126 lbs' },
              { st: '10 st', lbs: '140 lbs' },
              { st: '12 st', lbs: '168 lbs' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.st}</p>
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
            <Link href="/lbs-to-stones/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">LBS to Stones</Link>
            <Link href="/stones-to-kg/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Stones to KG</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
