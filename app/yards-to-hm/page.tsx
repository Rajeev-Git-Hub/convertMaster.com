import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Yards to Hectometers Converter – yd to hm | Free Tool',
  description: 'Free yards to hectometers converter. Convert yd to hm instantly with accurate results.',
  keywords: 'yards to hectometers, yd to hm, convert yards to hectometers, length converter',
  openGraph: {
    title: 'Yards to Hectometers Converter – yd to hm',
    description: 'Convert yards to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function YardsToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Yards to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert yards to hectometers instantly. 1 yd = 0.00914 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="yard" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
