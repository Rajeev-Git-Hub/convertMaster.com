import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bits to KB Converter – bit to KB | Free Tool',
  description: 'Free bits to kilobytes converter. Convert bit to KB instantly with accurate results.',
  keywords: 'bits to KB, bit to kilobytes, convert bits to KB, data storage converter',
  openGraph: {
    title: 'Bits to KB Converter – bit to KB',
    description: 'Convert bits to KB instantly with accurate results',
    type: 'website',
  },
};

export default function BitToKbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bits to Kilobytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bits to KB instantly. 1 KB = 8,192 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bit" defaultTo="kb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
