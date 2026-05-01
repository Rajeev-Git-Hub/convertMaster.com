import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KG to Stones Converter - Convert Kilograms to Stones',
  description: 'Free kg to stones converter. Convert kilograms to stones instantly. 1 kg = 0.157473 stones. Accurate results, conversion formula, and practical examples.',
  keywords: 'kg to stones, kilograms to stones, kg to st, convert kg to stones, kg stones converter',
  openGraph: {
    title: 'KG to Stones Converter',
    description: 'Convert kilograms to stones instantly',
    type: 'website',
  },
};

export default function KgToStonesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KG to Stones Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilograms to stones instantly. 1 kg = 0.157473 stones.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="kilogram" defaultTo="stone" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">stones = kg × 0.157473</p>
              <p className="text-gray-600 dark:text-gray-300">Or divide kg by 6.35029 for exact results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kg: '1 kg', st: '0.16 st' },
              { kg: '5 kg', st: '0.79 st' },
              { kg: '10 kg', st: '1.57 st' },
              { kg: '25 kg', st: '3.94 st' },
              { kg: '50 kg', st: '7.87 st' },
              { kg: '63.5 kg', st: '10 st' },
              { kg: '70 kg', st: '11.02 st' },
              { kg: '100 kg', st: '15.75 st' },
              { kg: '6.35 kg', st: '1 st' },
              { kg: '12.7 kg', st: '2 st' },
              { kg: '19.05 kg', st: '3 st' },
              { kg: '80 kg', st: '12.60 st' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.kg}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.st}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/stones-to-kg/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Stones to KG</Link>
            <Link href="/kg-to-lbs/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">KG to LBS</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
