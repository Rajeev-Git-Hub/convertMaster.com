import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Megabits to TB Converter – Mb to TB | Free Tool',
  description: 'Free megabits to terabytes converter. Convert Mb to TB instantly with accurate results.',
  keywords: 'megabits to TB, Mb to terabytes, convert megabits to TB, data storage converter',
  openGraph: {
    title: 'Megabits to TB Converter – Mb to TB',
    description: 'Convert megabits to TB instantly with accurate results',
    type: 'website',
  },
};

export default function MbitToTbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabits to Terabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert megabits to TB instantly. 1 TB = 8,388,608 megabits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mbit" defaultTo="tb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
