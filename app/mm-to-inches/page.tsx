import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MM to Inches Converter - Convert Millimeters to Inches',
  description: 'Free mm to inches converter. Convert millimeters to inches instantly. 1 mm = 0.03937 inches. Accurate results, conversion formula, and practical examples.',
  keywords: 'mm to inches, millimeters to inches, mm to in, convert mm to inches, mm inches converter',
  openGraph: {
    title: 'MM to Inches Converter',
    description: 'Convert millimeters to inches instantly',
    type: 'website',
  },
};

export default function MmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MM to Inches Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert millimeters to inches instantly. 1 mm = 0.03937 inches.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="millimeter" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">inches = mm × 0.03937</p>
              <p className="text-gray-600 dark:text-gray-300">Or divide by 25.4 for exact results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mm: '1 mm', inch: '0.039 in' },
              { mm: '5 mm', inch: '0.197 in' },
              { mm: '10 mm', inch: '0.394 in' },
              { mm: '25 mm', inch: '0.984 in' },
              { mm: '50 mm', inch: '1.969 in' },
              { mm: '100 mm', inch: '3.937 in' },
              { mm: '200 mm', inch: '7.874 in' },
              { mm: '500 mm', inch: '19.685 in' },
              { mm: '1000 mm', inch: '39.37 in' },
              { mm: '254 mm', inch: '10 in' },
              { mm: '508 mm', inch: '20 in' },
              { mm: '25.4 mm', inch: '1 in' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.mm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.inch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/inches-to-mm/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Inches to MM</Link>
            <Link href="/cm-to-inches/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">CM to Inches</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
