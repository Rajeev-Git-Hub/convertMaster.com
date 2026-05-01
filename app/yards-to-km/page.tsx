import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Yards to Kilometers Converter – yd to km | Free Tool',
  description: 'Free yards to kilometers converter. Convert yd to km instantly with accurate results.',
  keywords: 'yards to kilometers, yd to km, convert yards to kilometers, length converter',
  openGraph: {
    title: 'Yards to Kilometers Converter – yd to km',
    description: 'Convert yards to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function YardsToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Yards to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert yards to kilometers instantly. 1 yd = 0.000914 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="yard" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
