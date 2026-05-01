import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bits to PB Converter – bit to PB | Free Tool',
  description: 'Free bits to petabytes converter. Convert bit to PB instantly with accurate results.',
  keywords: 'bits to PB, bit to petabytes, convert bits to PB, data storage converter',
  openGraph: {
    title: 'Bits to PB Converter – bit to PB',
    description: 'Convert bits to PB instantly with accurate results',
    type: 'website',
  },
};

export default function BitToPbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bits to Petabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bits to PB instantly. 1 PB = 9,007,199,254,740,992 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bit" defaultTo="pb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
