import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Microseconds to Days Converter | Free Time Tool',
  description: 'Convert microseconds to days instantly. 1 day = 86,400,000,000 microseconds. Free online time converter with accurate results.',
  keywords: 'microseconds to days, μs to day, convert μs to days, time converter',
  openGraph: {
    title: 'Microseconds to Days Converter',
    description: 'Convert microseconds to days instantly',
    type: 'website',
  },
};

export default function MicrosecondToDayPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Microseconds to Days Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert microseconds to days instantly. 1 day = 86,400,000,000 μs.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="microsecond" defaultTo="day" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
