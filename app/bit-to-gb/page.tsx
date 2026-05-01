import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bits to GB Converter – bit to GB | Free Tool',
  description: 'Free bits to gigabytes converter. Convert bit to GB instantly with accurate results.',
  keywords: 'bits to GB, bit to gigabytes, convert bits to GB, data storage converter',
  openGraph: {
    title: 'Bits to GB Converter – bit to GB',
    description: 'Convert bits to GB instantly with accurate results',
    type: 'website',
  },
};

export default function BitToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bits to Gigabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bits to GB instantly. 1 GB = 8,589,934,592 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bit" defaultTo="gb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
