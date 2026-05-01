import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'EB to Bits Converter – EB to bit | Free Tool',
  description: 'Free exabytes to bits converter. Convert EB to bit instantly with accurate results.',
  keywords: 'EB to bits, exabytes to bit, convert EB to bits, data storage converter',
  openGraph: {
    title: 'EB to Bits Converter – EB to bit',
    description: 'Convert EB to bits instantly with accurate results',
    type: 'website',
  },
};

export default function EbToBitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Exabytes to Bits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert EB to bits instantly. 1 EB = 9,223,372,036,854,775,808 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="eb" defaultTo="bit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
