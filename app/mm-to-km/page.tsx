import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Millimeters to Kilometers Converter – mm to km | Free Tool',
  description: 'Free millimeters to kilometers converter. Convert mm to km instantly with accurate results.',
  keywords: 'millimeters to kilometers, mm to km, convert millimeters to kilometers, length converter',
  openGraph: {
    title: 'Millimeters to Kilometers Converter – mm to km',
    description: 'Convert millimeters to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function MmToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Millimeters to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert millimeters to kilometers instantly. 1,000,000 mm = 1 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="millimeter" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
