import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Weeks to Hours Converter | Free Time Tool',
  description: 'Convert weeks to hours instantly. 1 week = 168 hours. Free online time converter with accurate results.',
  keywords: 'weeks to hours, week to hr, convert weeks to hours, time converter',
  openGraph: {
    title: 'Weeks to Hours Converter',
    description: 'Convert weeks to hours instantly',
    type: 'website',
  },
};

export default function WeekToHourPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Weeks to Hours Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert weeks to hours instantly. 1 week = 168 hours.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="week" defaultTo="hour" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
