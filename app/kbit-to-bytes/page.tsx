import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilobits to Bytes Converter – Kb to B | Free Tool',
  description: 'Free kilobits to bytes converter. Convert Kb to B instantly with accurate results.',
  keywords: 'kilobits to bytes, Kb to B, convert kilobits to bytes, data storage converter',
  openGraph: {
    title: 'Kilobits to Bytes Converter – Kb to B',
    description: 'Convert kilobits to bytes instantly with accurate results',
    type: 'website',
  },
};

export default function KbitToBytesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilobits to Bytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilobits to bytes instantly. 1 kilobit = 128 bytes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kbit" defaultTo="bytes" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
