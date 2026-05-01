import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanoseconds to Years Converter | Free Time Tool',
  description: 'Convert nanoseconds to years instantly. 1 year (Julian) = 31,557,600,000,000,000 nanoseconds. Free online time converter with accurate results.',
  keywords: 'nanoseconds to years, ns to year, convert ns to years, time converter',
  openGraph: {
    title: 'Nanoseconds to Years Converter',
    description: 'Convert nanoseconds to years instantly',
    type: 'website',
  },
};

export default function NanosecondToYearPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanoseconds to Years Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanoseconds to years instantly. 1 year = 31,557,600,000,000,000 ns.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="nanosecond" defaultTo="year" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
