import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Stones to KG Converter - Convert Stones to Kilograms',
  description: 'Free stones to kg converter. Convert stones to kilograms instantly. 1 stone = 6.35029 kg. Accurate results, conversion formula, and practical examples.',
  keywords: 'stones to kg, stones to kilograms, st to kg, convert stones to kg, stones kg converter',
  openGraph: {
    title: 'Stones to KG Converter',
    description: 'Convert stones to kilograms instantly',
    type: 'website',
  },
};

export default function StonesToKgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stones to KG Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert stones to kilograms instantly. 1 stone = 6.35029 kg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="stone" defaultTo="kilogram" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">kg = stones × 6.35029</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply stones by approximately 6.35 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { st: '1 st', kg: '6.35 kg' },
              { st: '2 st', kg: '12.70 kg' },
              { st: '3 st', kg: '19.05 kg' },
              { st: '5 st', kg: '31.75 kg' },
              { st: '7 st', kg: '44.45 kg' },
              { st: '8 st', kg: '50.80 kg' },
              { st: '10 st', kg: '63.50 kg' },
              { st: '12 st', kg: '76.20 kg' },
              { st: '0.5 st', kg: '3.18 kg' },
              { st: '1.5 st', kg: '9.53 kg' },
              { st: '15 st', kg: '95.25 kg' },
              { st: '20 st', kg: '127.01 kg' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.st}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.kg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/kg-to-stones/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">KG to Stones</Link>
            <Link href="/stones-to-lbs/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Stones to LBS</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
