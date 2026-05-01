import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Centimeters Converter – dm to cm | Free Tool',
  description: 'Free decimeters to centimeters converter. Convert dm to cm instantly with accurate results. Perfect for metric measurements and educational purposes.',
  keywords: 'decimeters to centimeters, dm to cm, convert decimeters, metric conversion',
  openGraph: {
    title: 'Decimeters to Centimeters Converter – dm to cm',
    description: 'Convert decimeters to centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function DmToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Decimeters to Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Convert decimeters to centimeters instantly. 1 dm = 10 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Decimeters to Centimeters
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting decimeters (dm) to centimeters (cm) is useful in educational contexts and 
              scientific measurements. A decimeter is one-tenth of a meter, while a centimeter is one-hundredth of a meter.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              One decimeter equals exactly 10 centimeters. This conversion is part of the metric system 
              hierarchy and is occasionally used in laboratory settings and educational materials.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free converter provides instant, accurate results.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Formula */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Conversion Formula
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                centimeters = decimeters × 10
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Conversions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { dm: '0.1 dm', cm: '1 cm' },
              { dm: '0.5 dm', cm: '5 cm' },
              { dm: '1 dm', cm: '10 cm' },
              { dm: '2 dm', cm: '20 cm' },
              { dm: '5 dm', cm: '50 cm' },
              { dm: '10 dm', cm: '100 cm' },
              { dm: '25 dm', cm: '250 cm' },
              { dm: '50 dm', cm: '500 cm' },
              { dm: '100 dm', cm: '1,000 cm' },
              { dm: '250 dm', cm: '2,500 cm' },
              { dm: '500 dm', cm: '5,000 cm' },
              { dm: '1,000 dm', cm: '10,000 cm' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-700">{item.dm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.cm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Length Converters</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cm-to-inches/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              CM to Inches
            </Link>
            <Link href="/meters-to-feet/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              Meters to Feet
            </Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md">
              All Length Converters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
