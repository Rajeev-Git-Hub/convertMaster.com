import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Seconds to Milliseconds Converter | Free Time Tool',
  description: 'Convert seconds to milliseconds instantly. 1 second = 1000 milliseconds. Free online time converter with accurate results.',
  keywords: 'seconds to milliseconds, s to ms, convert seconds to ms, time converter',
  openGraph: {
    title: 'Seconds to Milliseconds Converter',
    description: 'Convert seconds to milliseconds instantly',
    type: 'website',
  },
};

export default function SecondToMsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Seconds to Milliseconds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert seconds to milliseconds instantly. 1 second = 1,000 ms.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="second" defaultTo="millisecond" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
