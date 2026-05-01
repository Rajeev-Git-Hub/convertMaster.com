import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'CM to Feet Converter - Convert Centimeters to Feet',
  description: 'Free cm to feet converter. Convert centimeters to feet instantly. 1 cm = 0.0328 feet. Accurate results, conversion formula, and practical examples.',
  keywords: 'cm to feet, centimeters to feet, cm to ft, convert cm to feet, cm feet converter',
  openGraph: {
    title: 'CM to Feet Converter',
    description: 'Convert centimeters to feet instantly',
    type: 'website',
  },
};

export default function CmToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CM to Feet Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert centimeters to feet instantly. 1 cm = 0.0328 feet.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="centimeter" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">feet = cm × 0.0328084</p>
              <p className="text-gray-600 dark:text-gray-300">Or divide cm by 30.48 for exact conversion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { cm: '30 cm', ft: '0.98 ft' },
              { cm: '60 cm', ft: '1.97 ft' },
              { cm: '90 cm', ft: '2.95 ft' },
              { cm: '100 cm', ft: '3.28 ft' },
              { cm: '150 cm', ft: '4.92 ft' },
              { cm: '180 cm', ft: '5.91 ft' },
              { cm: '200 cm', ft: '6.56 ft' },
              { cm: '250 cm', ft: '8.20 ft' },
              { cm: '300 cm', ft: '9.84 ft' },
              { cm: '400 cm', ft: '13.12 ft' },
              { cm: '500 cm', ft: '16.40 ft' },
              { cm: '1000 cm', ft: '32.81 ft' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.cm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.ft}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/feet-to-cm/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Feet to CM</Link>
            <Link href="/cm-to-inches/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">CM to Inches</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
