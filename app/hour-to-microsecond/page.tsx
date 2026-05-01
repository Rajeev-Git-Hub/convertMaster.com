import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hours to Microseconds Converter | Free Time Tool',
  description: 'Convert hours to microseconds instantly. 1 hour = 3,600,000,000 microseconds. Free online time converter with accurate results.',
  keywords: 'hours to microseconds, hr to μs, convert hours to microseconds, time converter',
  openGraph: {
    title: 'Hours to Microseconds Converter',
    description: 'Convert hours to microseconds instantly',
    type: 'website',
  },
};

export default function HourToMicrosecondPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hours to Microseconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hours to microseconds instantly. 1 hour = 3,600,000,000 μs.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="hour" defaultTo="microsecond" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
