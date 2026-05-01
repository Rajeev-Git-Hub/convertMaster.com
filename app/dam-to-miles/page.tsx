import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Miles Converter – dam to mi | Free Tool',
  description: 'Free dekameters to miles converter. Convert dam to mi instantly with accurate results.',
  keywords: 'dekameters to miles, dam to mi, convert dekameters to miles, length converter',
  openGraph: {
    title: 'Dekameters to Miles Converter – dam to mi',
    description: 'Convert dekameters to miles instantly with accurate results',
    type: 'website',
  },
};

export default function DamToMilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to miles instantly. 1 dam = 0.00621 mi.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
