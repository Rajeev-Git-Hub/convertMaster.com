import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'EB to TB Converter – EB to TB | Free Tool',
  description: 'Free exabytes to terabytes converter. Convert EB to TB instantly with accurate results.',
  keywords: 'EB to TB, exabytes to terabytes, convert EB to TB, data storage converter',
  openGraph: {
    title: 'EB to TB Converter – EB to TB',
    description: 'Convert EB to TB instantly with accurate results',
    type: 'website',
  },
};

export default function EbToTbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Exabytes to Terabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert EB to TB instantly. 1 EB = 1,048,576 TB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="eb" defaultTo="tb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
