import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bits to Gigabits Converter – bit to Gb | Free Tool',
  description: 'Free bits to gigabits converter. Convert bit to Gb instantly with accurate results.',
  keywords: 'bits to gigabits, bit to Gb, convert bits to gigabits, data storage converter',
  openGraph: {
    title: 'Bits to Gigabits Converter – bit to Gb',
    description: 'Convert bits to gigabits instantly with accurate results',
    type: 'website',
  },
};

export default function BitToGbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bits to Gigabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bits to gigabits instantly. 1 gigabit = 1,073,741,824 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bit" defaultTo="gbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
