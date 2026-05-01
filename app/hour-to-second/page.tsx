import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hours to Seconds Converter | Free Time Tool',
  description: 'Convert hours to seconds instantly. 1 hour = 3600 seconds. Free online time converter with accurate results.',
  keywords: 'hours to seconds, hr to s, convert hours to seconds, time converter',
  openGraph: {
    title: 'Hours to Seconds Converter',
    description: 'Convert hours to seconds instantly',
    type: 'website',
  },
};

export default function HourToSecondPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hours to Seconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hours to seconds instantly. 1 hour = 3,600 seconds.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="hour" defaultTo="second" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
