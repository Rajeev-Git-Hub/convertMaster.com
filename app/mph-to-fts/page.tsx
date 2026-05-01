import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles per Hour to Feet per Second Converter – mph to ft/s | Free Tool',
  description: 'Free miles per hour to feet per second converter. Convert mph to ft/s instantly with accurate results.',
  keywords: 'mph to ft/s, miles per hour to feet per second, convert mph to ft/s, speed converter',
  openGraph: {
    title: 'Miles per Hour to Feet per Second Converter – mph to ft/s',
    description: 'Convert mph to ft/s instantly with accurate results',
    type: 'website',
  },
};

export default function MphToFtsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles per Hour to Feet per Second Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert mph to ft/s instantly. 1 mph = 1.47 ft/s.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mph" defaultTo="fts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
