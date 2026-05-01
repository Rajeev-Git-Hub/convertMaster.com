import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Hectometers Converter – dm to hm | Free Tool',
  description: 'Free decimeters to hectometers converter. Convert dm to hm instantly with accurate results.',
  keywords: 'decimeters to hectometers, dm to hm, convert decimeters to hectometers, length converter',
  openGraph: {
    title: 'Decimeters to Hectometers Converter – dm to hm',
    description: 'Convert decimeters to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function DmToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Decimeters to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert decimeters to hectometers instantly. 1,000 dm = 1 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
