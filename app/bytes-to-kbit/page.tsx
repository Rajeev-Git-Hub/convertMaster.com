import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bytes to Kilobits Converter – B to Kb | Free Tool',
  description: 'Free bytes to kilobits converter. Convert B to Kb instantly with accurate results.',
  keywords: 'bytes to kilobits, B to Kb, convert bytes to kilobits, data storage converter',
  openGraph: {
    title: 'Bytes to Kilobits Converter – B to Kb',
    description: 'Convert bytes to kilobits instantly with accurate results',
    type: 'website',
  },
};

export default function BytesToKbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bytes to Kilobits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bytes to kilobits instantly. 1 kilobit = 128 bytes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bytes" defaultTo="kbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
