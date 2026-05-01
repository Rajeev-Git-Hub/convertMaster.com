import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters to Kilometers Converter – m to km | Free Tool',
  description: 'Free meters to kilometers converter. Convert m to km instantly with accurate results. Perfect for measuring distances, running tracks, and travel distances.',
  keywords: 'meters to kilometers, m to km, convert meters to km, distance conversion, length converter',
  openGraph: {
    title: 'Meters to Kilometers Converter – m to km',
    description: 'Convert meters to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function MetersToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Meters to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert meters to kilometers instantly. 1,000 m = 1 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="meter" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Meters to Kilometers
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting meters (m) to kilometers (km) is essential for measuring longer distances, 
              such as running tracks, road distances, and geographical measurements. Meters are ideal for 
              shorter measurements, while kilometers are used for longer distances.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              One kilometer equals exactly 1,000 meters. This conversion is fundamental in sports, 
              transportation, mapping, and everyday distance calculations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free converter provides instant, accurate results. Simply enter your measurement in meters, 
              and see the equivalent in kilometers immediately.
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
                kilometers = meters ÷ 1,000
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Or: kilometers = meters × 0.001
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
              { m: '100 m', km: '0.1 km' },
              { m: '200 m', km: '0.2 km' },
              { m: '400 m', km: '0.4 km' },
              { m: '500 m', km: '0.5 km' },
              { m: '800 m', km: '0.8 km' },
              { m: '1,000 m', km: '1 km' },
              { m: '1,500 m', km: '1.5 km' },
              { m: '2,000 m', km: '2 km' },
              { m: '5,000 m', km: '5 km' },
              { m: '10,000 m', km: '10 km' },
              { m: '21,097 m', km: '21.097 km' },
              { m: '42,195 m', km: '42.195 km' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.m}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.km}</p>
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
            <Link href="/km-to-meters/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              KM to Meters
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
