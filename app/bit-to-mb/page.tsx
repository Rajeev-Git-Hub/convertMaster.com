import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bits to MB Converter – bit to MB | Free Tool',
  description: 'Free bits to megabytes converter. Convert bit to MB instantly with accurate results.',
  keywords: 'bits to MB, bit to megabytes, convert bits to MB, data storage converter',
  openGraph: {
    title: 'Bits to MB Converter – bit to MB',
    description: 'Convert bits to MB instantly with accurate results',
    type: 'website',
  },
};

export default function BitToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bits to Megabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bits to MB instantly. 1 MB = 8,388,608 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bit" defaultTo="mb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
