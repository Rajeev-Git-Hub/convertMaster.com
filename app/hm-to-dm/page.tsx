import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectometers to Decimeters Converter – hm to dm | Free Tool',
  description: 'Free hectometers to decimeters converter. Convert hm to dm instantly with accurate results.',
  keywords: 'hectometers to decimeters, hm to dm, convert hectometers to decimeters, length converter',
  openGraph: {
    title: 'Hectometers to Decimeters Converter – hm to dm',
    description: 'Convert hectometers to decimeters instantly with accurate results',
    type: 'website',
  },
};

export default function HmToDmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectometers to Decimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectometers to decimeters instantly. 1 hm = 1,000 dm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="hectometer" defaultTo="decimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
