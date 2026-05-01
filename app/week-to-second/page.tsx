import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Weeks to Seconds Converter | Free Time Tool',
  description: 'Convert weeks to seconds instantly. 1 week = 604,800 seconds. Free online time converter with accurate results.',
  keywords: 'weeks to seconds, week to s, convert weeks to seconds, time converter',
  openGraph: {
    title: 'Weeks to Seconds Converter',
    description: 'Convert weeks to seconds instantly',
    type: 'website',
  },
};

export default function WeekToSecondPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Weeks to Seconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert weeks to seconds instantly. 1 week = 604,800 seconds.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="week" defaultTo="second" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
