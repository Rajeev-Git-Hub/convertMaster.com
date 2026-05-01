import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Micrometers Converter – dam to μm | Free Tool',
  description: 'Free dekameters to micrometers converter. Convert dam to μm instantly with accurate results.',
  keywords: 'dekameters to micrometers, dam to μm, convert dekameters to micrometers, length converter',
  openGraph: {
    title: 'Dekameters to Micrometers Converter – dam to μm',
    description: 'Convert dekameters to micrometers instantly with accurate results',
    type: 'website',
  },
};

export default function DamToUmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Micrometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to micrometers instantly. 1 dam = 10,000,000 μm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="micrometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
