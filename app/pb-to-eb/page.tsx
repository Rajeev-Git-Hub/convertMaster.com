import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'PB to EB Converter – PB to EB | Free Tool',
  description: 'Free petabytes to exabytes converter. Convert PB to EB instantly with accurate results.',
  keywords: 'PB to EB, petabytes to exabytes, convert PB to EB, data storage converter',
  openGraph: {
    title: 'PB to EB Converter – PB to EB',
    description: 'Convert PB to EB instantly with accurate results',
    type: 'website',
  },
};

export default function PbToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Petabytes to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert PB to EB instantly. 1 EB = 1,024 PB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="pb" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
