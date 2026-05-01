import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to CM Converter - Convert Inches to Centimeters',
  description: 'Free inches to cm converter. Convert inches to centimeters instantly. 1 inch = 2.54 cm. Accurate results, conversion formula, and practical examples.',
  keywords: 'inches to cm, inches to centimeters, in to cm, convert inches to cm, inches cm converter',
  openGraph: {
    title: 'Inches to CM Converter',
    description: 'Convert inches to centimeters instantly',
    type: 'website',
  },
};

export default function InchesToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Inches to CM Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert inches to centimeters instantly. 1 inch = 2.54 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Inches to CM Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">centimeters = inches × 2.54</p>
              <p className="text-gray-600 dark:text-gray-300">1 inch equals exactly 2.54 centimeters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { inch: '1 in', cm: '2.54 cm' },
              { inch: '2 in', cm: '5.08 cm' },
              { inch: '3 in', cm: '7.62 cm' },
              { inch: '4 in', cm: '10.16 cm' },
              { inch: '5 in', cm: '12.70 cm' },
              { inch: '6 in', cm: '15.24 cm' },
              { inch: '8 in', cm: '20.32 cm' },
              { inch: '10 in', cm: '25.40 cm' },
              { inch: '12 in', cm: '30.48 cm' },
              { inch: '15 in', cm: '38.10 cm' },
              { inch: '20 in', cm: '50.80 cm' },
              { inch: '24 in', cm: '60.96 cm' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.inch}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.cm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/cm-to-inches/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">CM to Inches</Link>
            <Link href="/feet-to-cm/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Feet to CM</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
