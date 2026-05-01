import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Micrometers Converter – dm to μm | Free Tool',
  description: 'Free decimeters to micrometers converter. Convert dm to μm instantly with accurate results.',
  keywords: 'decimeters to micrometers, dm to μm, convert decimeters to micrometers, length converter',
  openGraph: {
    title: 'Decimeters to Micrometers Converter – dm to μm',
    description: 'Convert decimeters to micrometers instantly with accurate results',
    type: 'website',
  },
};

export default function DmToUmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Decimeters to Micrometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert decimeters to micrometers instantly. 1 dm = 100,000 μm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="micrometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
