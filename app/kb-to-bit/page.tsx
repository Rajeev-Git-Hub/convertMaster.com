import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KB to Bits Converter – KB to bit | Free Tool',
  description: 'Free kilobytes to bits converter. Convert KB to bit instantly with accurate results.',
  keywords: 'KB to bits, kilobytes to bit, convert KB to bits, data storage converter',
  openGraph: {
    title: 'KB to Bits Converter – KB to bit',
    description: 'Convert KB to bits instantly with accurate results',
    type: 'website',
  },
};

export default function KbToBitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilobytes to Bits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert KB to bits instantly. 1 KB = 8,192 bits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kb" defaultTo="bit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
