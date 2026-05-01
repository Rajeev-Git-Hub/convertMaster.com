import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Megabits to EB Converter – Mb to EB | Free Tool',
  description: 'Free megabits to exabytes converter. Convert Mb to EB instantly with accurate results.',
  keywords: 'megabits to EB, Mb to exabytes, convert megabits to EB, data storage converter',
  openGraph: {
    title: 'Megabits to EB Converter – Mb to EB',
    description: 'Convert megabits to EB instantly with accurate results',
    type: 'website',
  },
};

export default function MbitToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabits to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert megabits to EB instantly. 1 EB = 8,796,093,022,208 megabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mbit" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
