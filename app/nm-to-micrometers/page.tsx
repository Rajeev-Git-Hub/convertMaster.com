import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanometers to Micrometers Converter – nm to μm | Free Tool',
  description: 'Free nanometers to micrometers converter. Convert nm to μm instantly with accurate results. Perfect for nanotechnology, semiconductor manufacturing, and scientific research.',
  keywords: 'nanometers to micrometers, nm to μm, convert nanometers, nanometer conversion, nanotechnology',
  openGraph: {
    title: 'Nanometers to Micrometers Converter – nm to μm',
    description: 'Convert nanometers to micrometers instantly with accurate results',
    type: 'website',
  },
};

export default function NmToUmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanometers to Micrometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanometers to micrometers instantly. 1,000 nm = 1 μm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="nanometer" defaultTo="micrometer" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Nanometers to Micrometers
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting nanometers (nm) to micrometers (μm) is essential in nanotechnology, 
              semiconductor manufacturing, and molecular biology. Nanometers are one-thousandth of a micrometer, 
              used for measuring atomic and molecular scales.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              One micrometer equals 1,000 nanometers. This conversion is crucial for microscopy, 
              genetics (DNA/RNA measurements), and nanoscale engineering.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free converter provides instant, accurate results for your nanoscale measurements.
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
                micrometers = nanometers ÷ 1,000
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Or: micrometers = nanometers × 0.001
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
              { nm: '1 nm', um: '0.001 μm' },
              { nm: '10 nm', um: '0.01 μm' },
              { nm: '100 nm', um: '0.1 μm' },
              { nm: '500 nm', um: '0.5 μm' },
              { nm: '1,000 nm', um: '1 μm' },
              { nm: '2,500 nm', um: '2.5 μm' },
              { nm: '5,000 nm', um: '5 μm' },
              { nm: '10,000 nm', um: '10 μm' },
              { nm: '100,000 nm', um: '100 μm' },
              { nm: '500,000 nm', um: '500 μm' },
              { nm: '1,000,000 nm', um: '1,000 μm' },
              { nm: '1,000,000,000 nm', um: '1,000,000 μm' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.nm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.um}</p>
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
            <Link href="/micrometers-to-mm/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              μm to MM
            </Link>
            <Link href="/mm-to-micrometers/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              MM to μm
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
