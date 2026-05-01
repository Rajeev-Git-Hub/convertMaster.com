import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gigabits to EB Converter – Gb to EB | Free Tool',
  description: 'Free gigabits to exabytes converter. Convert Gb to EB instantly with accurate results.',
  keywords: 'gigabits to EB, Gb to exabytes, convert gigabits to EB, data storage converter',
  openGraph: {
    title: 'Gigabits to EB Converter – Gb to EB',
    description: 'Convert gigabits to EB instantly with accurate results',
    type: 'website',
  },
};

export default function GbitToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabits to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gigabits to EB instantly. 1 EB = 8,589,934,592 gigabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gbit" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
