import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Centimeters to Miles Converter – cm to mi | Free Tool',
  description: 'Free centimeters to miles converter. Convert cm to mi instantly with accurate results.',
  keywords: 'centimeters to miles, cm to mi, convert centimeters to miles, length converter',
  openGraph: {
    title: 'Centimeters to Miles Converter – cm to mi',
    description: 'Convert centimeters to miles instantly with accurate results',
    type: 'website',
  },
};

export default function CmToMilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Centimeters to Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert centimeters to miles instantly. 1 cm = 0.00000621 mi.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="centimeter" defaultTo="mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
