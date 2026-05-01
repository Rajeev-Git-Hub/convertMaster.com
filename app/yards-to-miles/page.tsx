import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Yards to Miles Converter – yd to mi | Free Tool',
  description: 'Free yards to miles converter. Convert yd to mi instantly with accurate results.',
  keywords: 'yards to miles, yd to mi, convert yards to miles, length converter',
  openGraph: {
    title: 'Yards to Miles Converter – yd to mi',
    description: 'Convert yards to miles instantly with accurate results',
    type: 'website',
  },
};

export default function YardsToMilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Yards to Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert yards to miles instantly. 1,760 yd = 1 mi.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="yard" defaultTo="mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
