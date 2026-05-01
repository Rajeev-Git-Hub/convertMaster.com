import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'PB to KB Converter – PB to KB | Free Tool',
  description: 'Free petabytes to kilobytes converter. Convert PB to KB instantly with accurate results.',
  keywords: 'PB to KB, petabytes to kilobytes, convert PB to KB, data storage converter',
  openGraph: {
    title: 'PB to KB Converter – PB to KB',
    description: 'Convert PB to KB instantly with accurate results',
    type: 'website',
  },
};

export default function PbToKbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Petabytes to Kilobytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert PB to KB instantly. 1 PB = 1,073,741,824 KB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="pb" defaultTo="kb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
