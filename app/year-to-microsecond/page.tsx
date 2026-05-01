import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Years to Microseconds Converter | Free Time Tool',
  description: 'Convert years to microseconds instantly. 1 year (Julian) = 31,557,600,000,000 microseconds. Free online time converter with accurate results.',
  keywords: 'years to microseconds, year to μs, convert years to microseconds, time converter',
  openGraph: {
    title: 'Years to Microseconds Converter',
    description: 'Convert years to microseconds instantly',
    type: 'website',
  },
};

export default function YearToMicrosecondPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Years to Microseconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert years to microseconds instantly. 1 year = 31,557,600,000,000 μs.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="year" defaultTo="microsecond" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
