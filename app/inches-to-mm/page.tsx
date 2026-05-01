import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to MM Converter - Convert Inches to Millimeters',
  description: 'Free inches to mm converter. Convert inches to millimeters instantly. 1 inch = 25.4 mm. Accurate results, conversion formula, and practical examples.',
  keywords: 'inches to mm, inches to millimeters, in to mm, convert inches to mm, inches mm converter',
  openGraph: {
    title: 'Inches to MM Converter',
    description: 'Convert inches to millimeters instantly',
    type: 'website',
  },
};

export default function InchesToMmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Inches to MM Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert inches to millimeters instantly. 1 inch = 25.4 mm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="millimeter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">mm = inches × 25.4</p>
              <p className="text-gray-600 dark:text-gray-300">1 inch equals exactly 25.4 millimeters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { inch: '1 in', mm: '25.4 mm' },
              { inch: '2 in', mm: '50.8 mm' },
              { inch: '3 in', mm: '76.2 mm' },
              { inch: '4 in', mm: '101.6 mm' },
              { inch: '5 in', mm: '127 mm' },
              { inch: '6 in', mm: '152.4 mm' },
              { inch: '8 in', mm: '203.2 mm' },
              { inch: '10 in', mm: '254 mm' },
              { inch: '12 in', mm: '304.8 mm' },
              { inch: '0.5 in', mm: '12.7 mm' },
              { inch: '0.25 in', mm: '6.35 mm' },
              { inch: '0.125 in', mm: '3.175 mm' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.inch}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mm-to-inches/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">MM to Inches</Link>
            <Link href="/inches-to-cm/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Inches to CM</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
