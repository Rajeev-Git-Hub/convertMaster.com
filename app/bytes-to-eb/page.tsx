import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bytes to EB Converter – B to EB | Free Tool',
  description: 'Free bytes to exabytes converter. Convert B to EB instantly with accurate results.',
  keywords: 'bytes to EB, B to exabytes, convert bytes to EB, data storage converter',
  openGraph: {
    title: 'Bytes to EB Converter – B to EB',
    description: 'Convert bytes to EB instantly with accurate results',
    type: 'website',
  },
};

export default function BytesToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bytes to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert bytes to EB instantly. 1 EB = 1,152,921,504,606,846,976 bytes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bytes" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
