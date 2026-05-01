import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Dekameters Converter – mi to dam | Free Tool',
  description: 'Free miles to dekameters converter. Convert mi to dam instantly with accurate results.',
  keywords: 'miles to dekameters, mi to dam, convert miles to dekameters, length converter',
  openGraph: {
    title: 'Miles to Dekameters Converter – mi to dam',
    description: 'Convert miles to dekameters instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToDamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles to Dekameters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert miles to dekameters instantly. 1 mi = 161 dam.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="dekameter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
