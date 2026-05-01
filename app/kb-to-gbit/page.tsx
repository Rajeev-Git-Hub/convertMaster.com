import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KB to Gigabits Converter – KB to Gb | Free Tool',
  description: 'Free kilobytes to gigabits converter. Convert KB to Gb instantly with accurate results.',
  keywords: 'KB to gigabits, kilobytes to Gb, convert KB to gigabits, data storage converter',
  openGraph: {
    title: 'KB to Gigabits Converter – KB to Gb',
    description: 'Convert KB to gigabits instantly with accurate results',
    type: 'website',
  },
};

export default function KbToGbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilobytes to Gigabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert KB to gigabits instantly. 1 gigabit = 131,072 KB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kb" defaultTo="gbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
