import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters to Decimeters Converter – m to dm | Free Tool',
  description: 'Free meters to decimeters converter. Convert m to dm instantly with accurate results. Perfect for metric measurements.',
  keywords: 'meters to decimeters, m to dm, convert meters to decimeters, length converter',
  openGraph: {
    title: 'Meters to Decimeters Converter – m to dm',
    description: 'Convert meters to decimeters instantly with accurate results',
    type: 'website',
  },
};

export default function MetersToDmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Meters to Decimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert meters to decimeters instantly. 1 m = 10 dm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="meter" defaultTo="decimeter" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Meters to Decimeters
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting meters (m) to decimeters (dm). One meter equals exactly 10 decimeters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
