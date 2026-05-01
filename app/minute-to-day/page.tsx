import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Minutes to Days Converter | Free Time Tool',
  description: 'Convert minutes to days instantly. 1 day = 1440 minutes. Free online time converter with accurate results.',
  keywords: 'minutes to days, min to day, convert minutes to days, time converter',
  openGraph: {
    title: 'Minutes to Days Converter',
    description: 'Convert minutes to days instantly',
    type: 'website',
  },
};

export default function MinuteToDayPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Minutes to Days Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert minutes to days instantly. 1 day = 1,440 minutes.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="minute" defaultTo="day" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
