import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Kilometers Converter – dam to km | Free Tool',
  description: 'Free dekameters to kilometers converter. Convert dam to km instantly with accurate results.',
  keywords: 'dekameters to kilometers, dam to km, convert dekameters to kilometers, length converter',
  openGraph: {
    title: 'Dekameters to Kilometers Converter – dam to km',
    description: 'Convert dekameters to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function DamToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to kilometers instantly. 100 dam = 1 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
