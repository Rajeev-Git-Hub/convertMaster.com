import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Tons to KG Converter - Convert Tons to Kilograms',
  description: 'Free tons to kg converter. Convert metric tons to kilograms instantly. 1 ton = 1000 kg. Accurate results, conversion formula, and practical examples.',
  keywords: 'tons to kg, tons to kilograms, metric tons to kg, convert tons to kg, tonnes to kg',
  openGraph: {
    title: 'Tons to KG Converter',
    description: 'Convert tons to kilograms instantly',
    type: 'website',
  },
};

export default function TonsToKgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tons to KG Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert metric tons to kilograms instantly. 1 ton = 1000 kg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ton" defaultTo="kilogram" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">kg = tons × 1000</p>
              <p className="text-gray-600 dark:text-gray-300">Simply multiply metric tons by 1000 to get kilograms</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { t: '0.1 t', kg: '100 kg' },
              { t: '0.5 t', kg: '500 kg' },
              { t: '1 t', kg: '1000 kg' },
              { t: '2 t', kg: '2000 kg' },
              { t: '5 t', kg: '5000 kg' },
              { t: '10 t', kg: '10000 kg' },
              { t: '25 t', kg: '25000 kg' },
              { t: '50 t', kg: '50000 kg' },
              { t: '100 t', kg: '100000 kg' },
              { t: '0.25 t', kg: '250 kg' },
              { t: '1.5 t', kg: '1500 kg' },
              { t: '2.5 t', kg: '2500 kg' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.t}</p>
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
            <Link href="/kg-to-tons/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">KG to Tons</Link>
            <Link href="/tons-to-lbs/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Tons to LBS</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
