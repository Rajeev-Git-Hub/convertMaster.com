import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milliseconds to Minutes Converter | Free Time Tool',
  description: 'Convert milliseconds to minutes instantly. 1 minute = 60,000 milliseconds. Free online time converter with accurate results.',
  keywords: 'milliseconds to minutes, ms to min, convert ms to minutes, time converter',
  openGraph: {
    title: 'Milliseconds to Minutes Converter',
    description: 'Convert milliseconds to minutes instantly',
    type: 'website',
  },
};

export default function MsToMinutePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milliseconds to Minutes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milliseconds to minutes instantly. 1 minute = 60,000 ms.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="millisecond" defaultTo="minute" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
