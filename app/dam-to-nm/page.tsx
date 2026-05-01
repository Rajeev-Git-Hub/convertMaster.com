import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Nanometers Converter – dam to nm | Free Tool',
  description: 'Free dekameters to nanometers converter. Convert dam to nm instantly with accurate results.',
  keywords: 'dekameters to nanometers, dam to nm, convert dekameters to nanometers, length converter',
  openGraph: {
    title: 'Dekameters to Nanometers Converter – dam to nm',
    description: 'Convert dekameters to nanometers instantly with accurate results',
    type: 'website',
  },
};

export default function DamToNmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Nanometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to nanometers instantly. 1 dam = 10,000,000,000 nm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="nanometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
