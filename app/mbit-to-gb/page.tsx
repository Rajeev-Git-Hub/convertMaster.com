import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Megabits to GB Converter – Mb to GB | Free Tool',
  description: 'Free megabits to gigabytes converter. Convert Mb to GB instantly with accurate results.',
  keywords: 'megabits to GB, Mb to gigabytes, convert megabits to GB, data storage converter',
  openGraph: {
    title: 'Megabits to GB Converter – Mb to GB',
    description: 'Convert megabits to GB instantly with accurate results',
    type: 'website',
  },
};

export default function MbitToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabits to Gigabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert megabits to GB instantly. 1 GB = 8,192 megabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mbit" defaultTo="gb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
