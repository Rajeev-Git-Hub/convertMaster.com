import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to EB Converter – MB to EB | Free Tool',
  description: 'Free megabytes to exabytes converter. Convert MB to EB instantly with accurate results.',
  keywords: 'MB to EB, megabytes to exabytes, convert MB to EB, data storage converter',
  openGraph: {
    title: 'MB to EB Converter – MB to EB',
    description: 'Convert MB to EB instantly with accurate results',
    type: 'website',
  },
};

export default function MbToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabytes to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert MB to EB instantly. 1 EB = 1,099,511,627,776 MB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mb" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
