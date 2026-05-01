import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Years to Milliseconds Converter | Free Time Tool',
  description: 'Convert years to milliseconds instantly. 1 year (Julian) = 31,557,600,000 milliseconds. Free online time converter with accurate results.',
  keywords: 'years to milliseconds, year to ms, convert years to ms, time converter',
  openGraph: {
    title: 'Years to Milliseconds Converter',
    description: 'Convert years to milliseconds instantly',
    type: 'website',
  },
};

export default function YearToMsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Years to Milliseconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert years to milliseconds instantly. 1 year = 31,557,600,000 ms.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="year" defaultTo="millisecond" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
