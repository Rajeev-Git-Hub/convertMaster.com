import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to PB Converter – GB to PB | Free Tool',
  description: 'Free gigabytes to petabytes converter. Convert GB to PB instantly with accurate results.',
  keywords: 'GB to PB, gigabytes to petabytes, convert GB to PB, data storage converter',
  openGraph: {
    title: 'GB to PB Converter – GB to PB',
    description: 'Convert GB to PB instantly with accurate results',
    type: 'website',
  },
};

export default function GbToPbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabytes to Petabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert GB to PB instantly. 1 PB = 1,048,576 GB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gb" defaultTo="pb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
