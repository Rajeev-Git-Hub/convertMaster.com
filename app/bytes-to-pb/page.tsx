import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bytes to PB Converter – B to PB | Free Tool',
  description: 'Free bytes to petabytes converter. Convert B to PB instantly with accurate results.',
  keywords: 'bytes to PB, B to petabytes, convert bytes to PB, data storage converter',
  openGraph: {
    title: 'Bytes to PB Converter – B to PB',
    description: 'Convert bytes to PB instantly with accurate results',
    type: 'website',
  },
};

export default function BytesToPbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bytes to Petabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bytes to PB instantly. 1 PB = 1,125,899,906,842,624 bytes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bytes" defaultTo="pb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
