import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Millimeters Converter – μm to mm | Free Tool',
  description: 'Free micrometers to millimeters converter. Convert μm to mm instantly with accurate results. Perfect for precision engineering, manufacturing, and scientific measurements.',
  keywords: 'micrometers to millimeters, μm to mm, convert micrometers, micrometer conversion, precision measurement',
  openGraph: {
    title: 'Micrometers to Millimeters Converter – μm to mm',
    description: 'Convert micrometers to millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function UmToMmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to millimeters instantly. 1,000 μm = 1 mm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="millimeter" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Micrometers to Millimeters
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting micrometers (μm) to millimeters (mm) is essential in precision engineering, 
              semiconductor manufacturing, and scientific research. Micrometers are one-thousandth of a millimeter, 
              making them ideal for measuring extremely small distances.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              A micrometer (also called a micron) equals 0.001 millimeters or one-millionth of a meter. 
              This conversion is crucial in microscopy, electronics, and quality control in manufacturing.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free converter provides instant, accurate results. Simply enter your measurement in micrometers, 
              and see the equivalent in millimeters immediately. Perfect for technical specifications and quality control.
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
                millimeters = micrometers ÷ 1,000
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Or: millimeters = micrometers × 0.001
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
              { um: '1 μm', mm: '0.001 mm' },
              { um: '10 μm', mm: '0.01 mm' },
              { um: '100 μm', mm: '0.1 mm' },
              { um: '500 μm', mm: '0.5 mm' },
              { um: '1,000 μm', mm: '1 mm' },
              { um: '2,500 μm', mm: '2.5 mm' },
              { um: '5,000 μm', mm: '5 mm' },
              { um: '10,000 μm', mm: '10 mm' },
              { um: '25,000 μm', mm: '25 mm' },
              { um: '50,000 μm', mm: '50 mm' },
              { um: '100,000 μm', mm: '100 mm' },
              { um: '1,000,000 μm', mm: '1,000 mm' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.um}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mm}</p>
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
            <Link href="/mm-to-inches/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              MM to Inches
            </Link>
            <Link href="/cm-to-inches/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              CM to Inches
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
