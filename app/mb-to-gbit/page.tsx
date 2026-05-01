import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to Gigabits Converter – MB to Gb | Free Tool',
  description: 'Free megabytes to gigabits converter. Convert MB to Gb instantly with accurate results.',
  keywords: 'MB to gigabits, megabytes to Gb, convert MB to gigabits, data storage converter',
  openGraph: {
    title: 'MB to Gigabits Converter – MB to Gb',
    description: 'Convert MB to gigabits instantly with accurate results',
    type: 'website',
  },
};

export default function MbToGbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabytes to Gigabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert MB to gigabits instantly. 1 gigabit = 128 MB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mb" defaultTo="gbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
