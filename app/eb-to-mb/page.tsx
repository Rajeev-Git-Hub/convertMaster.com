import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'EB to MB Converter – EB to MB | Free Tool',
  description: 'Free exabytes to megabytes converter. Convert EB to MB instantly with accurate results.',
  keywords: 'EB to MB, exabytes to megabytes, convert EB to MB, data storage converter',
  openGraph: {
    title: 'EB to MB Converter – EB to MB',
    description: 'Convert EB to MB instantly with accurate results',
    type: 'website',
  },
};

export default function EbToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Exabytes to Megabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert EB to MB instantly. 1 EB = 1,073,741,824 MB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="eb" defaultTo="mb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
