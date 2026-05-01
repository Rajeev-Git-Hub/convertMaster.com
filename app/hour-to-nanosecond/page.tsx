import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hours to Nanoseconds Converter | Free Time Tool',
  description: 'Convert hours to nanoseconds instantly. 1 hour = 3,600,000,000,000 nanoseconds. Free online time converter with accurate results.',
  keywords: 'hours to nanoseconds, hr to ns, convert hours to nanoseconds, time converter',
  openGraph: {
    title: 'Hours to Nanoseconds Converter',
    description: 'Convert hours to nanoseconds instantly',
    type: 'website',
  },
};

export default function HourToNanosecondPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hours to Nanoseconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hours to nanoseconds instantly. 1 hour = 3,600,000,000,000 ns.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="hour" defaultTo="nanosecond" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
