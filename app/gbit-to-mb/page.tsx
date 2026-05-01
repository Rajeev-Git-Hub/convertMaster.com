import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gigabits to MB Converter – Gb to MB | Free Tool',
  description: 'Free gigabits to megabytes converter. Convert Gb to MB instantly with accurate results.',
  keywords: 'gigabits to MB, Gb to megabytes, convert gigabits to MB, data storage converter',
  openGraph: {
    title: 'Gigabits to MB Converter – Gb to MB',
    description: 'Convert gigabits to MB instantly with accurate results',
    type: 'website',
  },
};

export default function GbitToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabits to Megabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gigabits to MB instantly. 1 MB = 8 gigabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gbit" defaultTo="mb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
