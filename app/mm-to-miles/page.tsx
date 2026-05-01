import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Millimeters to Miles Converter – mm to mi | Free Tool',
  description: 'Free millimeters to miles converter. Convert mm to mi instantly with accurate results.',
  keywords: 'millimeters to miles, mm to mi, convert millimeters to miles, length converter',
  openGraph: {
    title: 'Millimeters to Miles Converter – mm to mi',
    description: 'Convert millimeters to miles instantly with accurate results',
    type: 'website',
  },
};

export default function MmToMilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Millimeters to Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert millimeters to miles instantly. 1 mm = 0.000000621 mi.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="millimeter" defaultTo="mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
