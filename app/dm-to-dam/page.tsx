import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Dekameters Converter – dm to dam | Free Tool',
  description: 'Free decimeters to dekameters converter. Convert dm to dam instantly with accurate results.',
  keywords: 'decimeters to dekameters, dm to dam, convert decimeters to dekameters, length converter',
  openGraph: {
    title: 'Decimeters to Dekameters Converter – dm to dam',
    description: 'Convert decimeters to dekameters instantly with accurate results',
    type: 'website',
  },
};

export default function DmToDamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Decimeters to Dekameters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert decimeters to dekameters instantly. 100 dm = 1 dam.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="dekameter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
