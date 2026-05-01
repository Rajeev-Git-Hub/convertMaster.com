import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to Megabits Converter – GB to Mb | Free Tool',
  description: 'Free gigabytes to megabits converter. Convert GB to Mb instantly with accurate results.',
  keywords: 'GB to megabits, gigabytes to Mb, convert GB to megabits, data storage converter',
  openGraph: {
    title: 'GB to Megabits Converter – GB to Mb',
    description: 'Convert GB to megabits instantly with accurate results',
    type: 'website',
  },
};

export default function GbToMbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabytes to Megabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert GB to megabits instantly. 1 GB = 8,192 megabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gb" defaultTo="mbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
