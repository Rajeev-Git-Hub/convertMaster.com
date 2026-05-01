import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Speed of Light to Feet per Second Converter – c to ft/s | Free Tool',
  description: 'Free speed of light to feet per second converter. Convert c to ft/s instantly with accurate results.',
  keywords: 'speed of light to ft/s, c to feet per second, convert c to ft/s, speed converter',
  openGraph: {
    title: 'Speed of Light to Feet per Second Converter – c to ft/s',
    description: 'Convert speed of light to ft/s instantly with accurate results',
    type: 'website',
  },
};

export default function CToFtsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Speed of Light to Feet per Second Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert c to ft/s instantly. 1 c = 983,571,056 ft/s.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="c" defaultTo="fts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
