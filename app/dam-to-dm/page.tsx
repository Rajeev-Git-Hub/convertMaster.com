import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Decimeters Converter – dam to dm | Free Tool',
  description: 'Free dekameters to decimeters converter. Convert dam to dm instantly with accurate results.',
  keywords: 'dekameters to decimeters, dam to dm, convert dekameters to decimeters, length converter',
  openGraph: {
    title: 'Dekameters to Decimeters Converter – dam to dm',
    description: 'Convert dekameters to decimeters instantly with accurate results',
    type: 'website',
  },
};

export default function DamToDmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Decimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to decimeters instantly. 1 dam = 100 dm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="decimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
