import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Decimeters Converter – mi to dm | Free Tool',
  description: 'Free miles to decimeters converter. Convert mi to dm instantly with accurate results.',
  keywords: 'miles to decimeters, mi to dm, convert miles to decimeters, length converter',
  openGraph: {
    title: 'Miles to Decimeters Converter – mi to dm',
    description: 'Convert miles to decimeters instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToDmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles to Decimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert miles to decimeters instantly. 1 mi = 16,093 dm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="decimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
