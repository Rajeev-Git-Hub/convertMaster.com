import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectometers to Meters Converter – hm to m | Free Tool',
  description: 'Free hectometers to meters converter. Convert hm to m instantly with accurate results. Perfect for land measurement and agricultural surveying.',
  keywords: 'hectometers to meters, hm to m, convert hectometers, metric conversion, land surveying',
  openGraph: {
    title: 'Hectometers to Meters Converter – hm to m',
    description: 'Convert hectometers to meters instantly with accurate results',
    type: 'website',
  },
};

export default function HmToMPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectometers to Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Convert hectometers to meters instantly. 1 hm = 100 m.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="hectometer" defaultTo="meter" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Hectometers to Meters
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting hectometers (hm) to meters (m) is useful in land measurement and agricultural surveying. 
              A hectometer equals 100 meters and is sometimes used for measuring larger land plots.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              One hectometer equals exactly 100 meters. This unit is occasionally used in European agriculture 
              and land management, though kilometers are more common for large distances.
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
                meters = hectometers × 100
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
              { hm: '0.01 hm', m: '1 m' },
              { hm: '0.1 hm', m: '10 m' },
              { hm: '0.5 hm', m: '50 m' },
              { hm: '1 hm', m: '100 m' },
              { hm: '2 hm', m: '200 m' },
              { hm: '5 hm', m: '500 m' },
              { hm: '10 hm', m: '1,000 m' },
              { hm: '25 hm', m: '2,500 m' },
              { hm: '50 hm', m: '5,000 m' },
              { hm: '100 hm', m: '10,000 m' },
              { hm: '250 hm', m: '25,000 m' },
              { hm: '500 hm', m: '50,000 m' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-700">{item.hm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.m}</p>
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
            <Link href="/meters-to-km/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Meters to KM
            </Link>
            <Link href="/km-to-meters/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              KM to Meters
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
