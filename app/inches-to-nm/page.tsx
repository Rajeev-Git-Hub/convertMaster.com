import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to Nanometers Converter – in to nm | Free Tool',
  description: 'Free inches to nanometers converter. Convert in to nm instantly with accurate results.',
  keywords: 'inches to nanometers, in to nm, convert inches to nanometers, length converter',
  openGraph: {
    title: 'Inches to Nanometers Converter – in to nm',
    description: 'Convert inches to nanometers instantly with accurate results',
    type: 'website',
  },
};

export default function InchesToNmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Inches to Nanometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert inches to nanometers instantly. 1 in = 25,400,000 nm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="nanometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
