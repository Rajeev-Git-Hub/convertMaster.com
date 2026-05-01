import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Feet Converter – dam to ft | Free Tool',
  description: 'Free dekameters to feet converter. Convert dam to ft instantly with accurate results.',
  keywords: 'dekameters to feet, dam to ft, convert dekameters to feet, length converter',
  openGraph: {
    title: 'Dekameters to Feet Converter – dam to ft',
    description: 'Convert dekameters to feet instantly with accurate results',
    type: 'website',
  },
};

export default function DamToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to feet instantly. 1 dam = 32.8 ft.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
