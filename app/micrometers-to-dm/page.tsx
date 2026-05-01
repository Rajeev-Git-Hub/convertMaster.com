import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Decimeters Converter – μm to dm | Free Tool',
  description: 'Free micrometers to decimeters converter. Convert μm to dm instantly with accurate results.',
  keywords: 'micrometers to decimeters, μm to dm, convert micrometers to decimeters, length converter',
  openGraph: {
    title: 'Micrometers to Decimeters Converter – μm to dm',
    description: 'Convert micrometers to decimeters instantly with accurate results',
    type: 'website',
  },
};

export default function UmToDmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Decimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to decimeters instantly. 100,000 μm = 1 dm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="decimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
