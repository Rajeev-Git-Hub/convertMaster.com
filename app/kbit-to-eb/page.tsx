import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilobits to EB Converter – Kb to EB | Free Tool',
  description: 'Free kilobits to exabytes converter. Convert Kb to EB instantly with accurate results.',
  keywords: 'kilobits to EB, Kb to exabytes, convert kilobits to EB, data storage converter',
  openGraph: {
    title: 'Kilobits to EB Converter – Kb to EB',
    description: 'Convert kilobits to EB instantly with accurate results',
    type: 'website',
  },
};

export default function KbitToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilobits to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilobits to EB instantly. 1 EB = 9,007,199,254,740,992 kilobits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kbit" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
