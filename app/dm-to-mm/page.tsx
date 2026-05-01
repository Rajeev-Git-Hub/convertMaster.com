import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Millimeters Converter – dm to mm | Free Tool',
  description: 'Free decimeters to millimeters converter. Convert dm to mm instantly with accurate results.',
  keywords: 'decimeters to millimeters, dm to mm, convert decimeters to millimeters, length converter',
  openGraph: {
    title: 'Decimeters to Millimeters Converter – dm to mm',
    description: 'Convert decimeters to millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function DmToMmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Decimeters to Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert decimeters to millimeters instantly. 1 dm = 100 mm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
