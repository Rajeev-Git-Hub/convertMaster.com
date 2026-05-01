import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to Kilobits Converter – GB to Kb | Free Tool',
  description: 'Free gigabytes to kilobits converter. Convert GB to Kb instantly with accurate results.',
  keywords: 'GB to kilobits, gigabytes to Kb, convert GB to kilobits, data storage converter',
  openGraph: {
    title: 'GB to Kilobits Converter – GB to Kb',
    description: 'Convert GB to kilobits instantly with accurate results',
    type: 'website',
  },
};

export default function GbToKbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabytes to Kilobits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert GB to kilobits instantly. 1 GB = 8,388,608 kilobits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gb" defaultTo="kbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
