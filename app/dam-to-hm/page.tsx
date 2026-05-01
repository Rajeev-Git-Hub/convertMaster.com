import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Hectometers Converter – dam to hm | Free Tool',
  description: 'Free dekameters to hectometers converter. Convert dam to hm instantly with accurate results.',
  keywords: 'dekameters to hectometers, dam to hm, convert dekameters to hectometers, length converter',
  openGraph: {
    title: 'Dekameters to Hectometers Converter – dam to hm',
    description: 'Convert dekameters to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function DamToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to hectometers instantly. 10 dam = 1 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
