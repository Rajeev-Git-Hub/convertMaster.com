import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to TB Converter – MB to TB | Free Tool',
  description: 'Free megabytes to terabytes converter. Convert MB to TB instantly with accurate results.',
  keywords: 'MB to TB, megabytes to terabytes, convert MB to TB, data storage converter',
  openGraph: {
    title: 'MB to TB Converter – MB to TB',
    description: 'Convert MB to TB instantly with accurate results',
    type: 'website',
  },
};

export default function MbToTbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabytes to Terabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert MB to TB instantly. 1 TB = 1,048,576 MB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mb" defaultTo="tb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
