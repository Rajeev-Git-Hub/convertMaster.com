import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gigabits to Megabits Converter – Gb to Mb | Free Tool',
  description: 'Free gigabits to megabits converter. Convert Gb to Mb instantly with accurate results.',
  keywords: 'gigabits to megabits, Gb to Mb, convert gigabits to megabits, data storage converter',
  openGraph: {
    title: 'Gigabits to Megabits Converter – Gb to Mb',
    description: 'Convert gigabits to megabits instantly with accurate results',
    type: 'website',
  },
};

export default function GbitToMbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabits to Megabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gigabits to megabits instantly. 1 gigabit = 1,024 megabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gbit" defaultTo="mbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
