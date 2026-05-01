import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Days to Weeks Converter | Free Time Tool',
  description: 'Convert days to weeks instantly. 1 week = 7 days. Free online time converter with accurate results.',
  keywords: 'days to weeks, day to week, convert days to weeks, time converter',
  openGraph: {
    title: 'Days to Weeks Converter',
    description: 'Convert days to weeks instantly',
    type: 'website',
  },
};

export default function DayToWeekPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Days to Weeks Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert days to weeks instantly. 1 week = 7 days.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="day" defaultTo="week" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
