import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'EB to GB Converter – EB to GB | Free Tool',
  description: 'Free exabytes to gigabytes converter. Convert EB to GB instantly with accurate results.',
  keywords: 'EB to GB, exabytes to gigabytes, convert EB to GB, data storage converter',
  openGraph: {
    title: 'EB to GB Converter – EB to GB',
    description: 'Convert EB to GB instantly with accurate results',
    type: 'website',
  },
};

export default function EbToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Exabytes to Gigabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert EB to GB instantly. 1 EB = 1,073,741,824 GB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="eb" defaultTo="gb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
