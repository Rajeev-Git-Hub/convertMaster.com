import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Speed of Light to Kilometers per Hour Converter – c to km/h | Free Tool',
  description: 'Free speed of light to kilometers per hour converter. Convert c to km/h instantly with accurate results.',
  keywords: 'speed of light to km/h, c to kilometers per hour, convert c to km/h, speed converter',
  openGraph: {
    title: 'Speed of Light to Kilometers per Hour Converter – c to km/h',
    description: 'Convert speed of light to km/h instantly with accurate results',
    type: 'website',
  },
};

export default function CToKmhPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Speed of Light to Kilometers per Hour Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert c to km/h instantly. 1 c = 1,079,252,848 km/h.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="c" defaultTo="kmh" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
