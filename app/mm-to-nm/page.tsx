import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Millimeters to Nanometers Converter – mm to nm | Free Tool',
  description: 'Free millimeters to nanometers converter. Convert mm to nm instantly with accurate results.',
  keywords: 'millimeters to nanometers, mm to nm, convert millimeters to nanometers, length converter',
  openGraph: {
    title: 'Millimeters to Nanometers Converter – mm to nm',
    description: 'Convert millimeters to nanometers instantly with accurate results',
    type: 'website',
  },
};

export default function MmToNmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Millimeters to Nanometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert millimeters to nanometers instantly. 1 mm = 1,000,000 nm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="millimeter" defaultTo="nanometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
