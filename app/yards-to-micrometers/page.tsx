import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Yards to Micrometers Converter – yd to μm | Free Tool',
  description: 'Free yards to micrometers converter. Convert yd to μm instantly with accurate results.',
  keywords: 'yards to micrometers, yd to μm, convert yards to micrometers, length converter',
  openGraph: {
    title: 'Yards to Micrometers Converter – yd to μm',
    description: 'Convert yards to micrometers instantly with accurate results',
    type: 'website',
  },
};

export default function YardsToUmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Yards to Micrometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert yards to micrometers instantly. 1 yd = 914,400 μm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="yard" defaultTo="micrometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
