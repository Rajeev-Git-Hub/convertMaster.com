import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gigabits to Kilobits Converter – Gb to Kb | Free Tool',
  description: 'Free gigabits to kilobits converter. Convert Gb to Kb instantly with accurate results.',
  keywords: 'gigabits to kilobits, Gb to Kb, convert gigabits to kilobits, data storage converter',
  openGraph: {
    title: 'Gigabits to Kilobits Converter – Gb to Kb',
    description: 'Convert gigabits to kilobits instantly with accurate results',
    type: 'website',
  },
};

export default function GbitToKbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabits to Kilobits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gigabits to kilobits instantly. 1 gigabit = 1,048,576 kilobits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gbit" defaultTo="kbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
