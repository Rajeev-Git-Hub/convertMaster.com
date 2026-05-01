import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Days to Hours Converter | Free Time Tool',
  description: 'Convert days to hours instantly. 1 day = 24 hours. Free online time converter with accurate results.',
  keywords: 'days to hours, day to hr, convert days to hours, time converter',
  openGraph: {
    title: 'Days to Hours Converter',
    description: 'Convert days to hours instantly',
    type: 'website',
  },
};

export default function DayToHourPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Days to Hours Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert days to hours instantly. 1 day = 24 hours.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="day" defaultTo="hour" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
