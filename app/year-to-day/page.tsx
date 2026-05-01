import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Years to Days Converter | Free Time Tool',
  description: 'Convert years to days instantly. 1 year (Julian) = 365.25 days. Free online time converter with accurate results.',
  keywords: 'years to days, year to day, convert years to days, time converter',
  openGraph: {
    title: 'Years to Days Converter',
    description: 'Convert years to days instantly',
    type: 'website',
  },
};

export default function YearToDayPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Years to Days Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert years to days instantly. 1 year = 365.25 days.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="year" defaultTo="day" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
