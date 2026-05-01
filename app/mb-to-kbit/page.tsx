import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to Kilobits Converter – MB to Kb | Free Tool',
  description: 'Free megabytes to kilobits converter. Convert MB to Kb instantly with accurate results.',
  keywords: 'MB to kilobits, megabytes to Kb, convert MB to kilobits, data storage converter',
  openGraph: {
    title: 'MB to Kilobits Converter – MB to Kb',
    description: 'Convert MB to kilobits instantly with accurate results',
    type: 'website',
  },
};

export default function MbToKbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabytes to Kilobits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert MB to kilobits instantly. 1 MB = 8,192 kilobits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mb" defaultTo="kbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
