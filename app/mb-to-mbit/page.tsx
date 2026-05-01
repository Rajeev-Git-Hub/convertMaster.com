import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to Megabits Converter – MB to Mb | Free Tool',
  description: 'Free megabytes to megabits converter. Convert MB to Mb instantly with accurate results.',
  keywords: 'MB to megabits, megabytes to Mb, convert MB to megabits, data storage converter',
  openGraph: {
    title: 'MB to Megabits Converter – MB to Mb',
    description: 'Convert MB to megabits instantly with accurate results',
    type: 'website',
  },
};

export default function MbToMbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabytes to Megabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert MB to megabits instantly. 1 MB = 8 megabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mb" defaultTo="mbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
