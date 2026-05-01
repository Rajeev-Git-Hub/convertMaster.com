import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'GB to EB Converter – GB to EB | Free Tool',
  description: 'Free gigabytes to exabytes converter. Convert GB to EB instantly with accurate results.',
  keywords: 'GB to EB, gigabytes to exabytes, convert GB to EB, data storage converter',
  openGraph: {
    title: 'GB to EB Converter – GB to EB',
    description: 'Convert GB to EB instantly with accurate results',
    type: 'website',
  },
};

export default function GbToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gigabytes to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert GB to EB instantly. 1 EB = 1,073,741,824 GB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="gb" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
