import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gigabits to GB Converter – Gb to GB | Free Tool',
  description: 'Free gigabits to gigabytes converter. Convert Gb to GB instantly with accurate results.',
  keywords: 'gigabits to GB, Gb to gigabytes, convert gigabits to GB, data storage converter',
  openGraph: {
    title: 'Gigabits to GB Converter – Gb to GB',
    description: 'Convert gigabits to GB instantly with accurate results',
    type: 'website',
  },
};

export default function GbitToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabits to Gigabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gigabits to GB instantly. 1 GB = 8 gigabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gbit" defaultTo="gb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
