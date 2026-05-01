import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet to CM Converter - Convert Feet to Centimeters',
  description: 'Free feet to cm converter. Convert feet to centimeters instantly. 1 foot = 30.48 cm. Accurate results, conversion formula, and practical examples.',
  keywords: 'feet to cm, feet to centimeters, ft to cm, convert feet to cm, feet cm converter',
  openGraph: {
    title: 'Feet to CM Converter',
    description: 'Convert feet to centimeters instantly',
    type: 'website',
  },
};

export default function FeetToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Feet to CM Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert feet to centimeters instantly. 1 foot = 30.48 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="foot" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">cm = feet × 30.48</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply feet by 30.48 for exact conversion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { ft: '1 ft', cm: '30.48 cm' },
              { ft: '2 ft', cm: '60.96 cm' },
              { ft: '3 ft', cm: '91.44 cm' },
              { ft: '4 ft', cm: '121.92 cm' },
              { ft: '5 ft', cm: '152.4 cm' },
              { ft: '6 ft', cm: '182.88 cm' },
              { ft: '7 ft', cm: '213.36 cm' },
              { ft: '8 ft', cm: '243.84 cm' },
              { ft: '10 ft', cm: '304.8 cm' },
              { ft: '15 ft', cm: '457.2 cm' },
              { ft: '20 ft', cm: '609.6 cm' },
              { ft: '50 ft', cm: '1524 cm' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.ft}</p>
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
            <Link href="/cm-to-feet/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">CM to Feet</Link>
            <Link href="/feet-to-inches/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Feet to Inches</Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
