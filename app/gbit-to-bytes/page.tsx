import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gigabits to Bytes Converter – Gb to B | Free Tool',
  description: 'Free gigabits to bytes converter. Convert Gb to B instantly with accurate results.',
  keywords: 'gigabits to bytes, Gb to B, convert gigabits to bytes, data storage converter',
  openGraph: {
    title: 'Gigabits to Bytes Converter – Gb to B',
    description: 'Convert gigabits to bytes instantly with accurate results',
    type: 'website',
  },
};

export default function GbitToBytesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabits to Bytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gigabits to bytes instantly. 1 gigabit = 134,217,728 bytes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gbit" defaultTo="bytes" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
