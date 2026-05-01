import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'LBS to KG Converter - Convert Pounds to Kilograms',
  description: 'Free lbs to kg converter. Convert pounds to kilograms instantly. 1 lb = 0.453592 kg. Accurate results, conversion formula, and practical examples.',
  keywords: 'lbs to kg, pounds to kilograms, lbs to kilograms, convert lbs to kg, pounds kg converter',
  openGraph: {
    title: 'LBS to KG Converter',
    description: 'Convert pounds to kilograms instantly',
    type: 'website',
  },
};

export default function LbsToKgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LBS to KG Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert pounds to kilograms instantly. 1 lb = 0.453592 kg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="kilogram" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">kg = lbs × 0.453592</p>
              <p className="text-gray-600 dark:text-gray-300">Divide pounds by 2.20462 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { lbs: '1 lb', kg: '0.45 kg' },
              { lbs: '5 lbs', kg: '2.27 kg' },
              { lbs: '10 lbs', kg: '4.54 kg' },
              { lbs: '25 lbs', kg: '11.34 kg' },
              { lbs: '50 lbs', kg: '22.68 kg' },
              { lbs: '100 lbs', kg: '45.36 kg' },
              { lbs: '150 lbs', kg: '68.04 kg' },
              { lbs: '200 lbs', kg: '90.72 kg' },
              { lbs: '2.2 lbs', kg: '1.00 kg' },
              { lbs: '5.5 lbs', kg: '2.50 kg' },
              { lbs: '11 lbs', kg: '5.00 kg' },
              { lbs: '22 lbs', kg: '10.00 kg' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.lbs}</p>
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
            <Link href="/kg-to-lbs/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">KG to LBS</Link>
            <Link href="/lbs-to-stones/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">LBS to Stones</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
