import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Weeks to Years Converter | Free Time Tool',
  description: 'Convert weeks to years instantly. 1 year (Julian) = 52.1786 weeks. Free online time converter with accurate results.',
  keywords: 'weeks to years, week to year, convert weeks to years, time converter',
  openGraph: {
    title: 'Weeks to Years Converter',
    description: 'Convert weeks to years instantly',
    type: 'website',
  },
};

export default function WeekToYearPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Weeks to Years Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert weeks to years instantly. 1 year = 52.1786 weeks.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="week" defaultTo="year" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
