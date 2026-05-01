import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bytes to GB Converter – B to GB | Free Tool',
  description: 'Free bytes to gigabytes converter. Convert B to GB instantly with accurate results.',
  keywords: 'bytes to GB, B to gigabytes, convert bytes to GB, data storage converter',
  openGraph: {
    title: 'Bytes to GB Converter – B to GB',
    description: 'Convert bytes to GB instantly with accurate results',
    type: 'website',
  },
};

export default function BytesToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bytes to Gigabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bytes to GB instantly. 1 GB = 1,073,741,824 bytes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bytes" defaultTo="gb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
