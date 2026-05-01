import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'EB to Gigabits Converter – EB to Gb | Free Tool',
  description: 'Free exabytes to gigabits converter. Convert EB to Gb instantly with accurate results.',
  keywords: 'EB to gigabits, exabytes to Gb, convert EB to gigabits, data storage converter',
  openGraph: {
    title: 'EB to Gigabits Converter – EB to Gb',
    description: 'Convert EB to gigabits instantly with accurate results',
    type: 'website',
  },
};

export default function EbToGbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Exabytes to Gigabits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert EB to gigabits instantly. 1 EB = 8,589,934,592 gigabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="eb" defaultTo="gbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
