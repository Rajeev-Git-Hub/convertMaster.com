import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilometers per Hour to Feet per Second Converter – km/h to ft/s | Free Tool',
  description: 'Free kilometers per hour to feet per second converter. Convert km/h to ft/s instantly with accurate results.',
  keywords: 'km/h to ft/s, kilometers per hour to feet per second, convert km/h to ft/s, speed converter',
  openGraph: {
    title: 'Kilometers per Hour to Feet per Second Converter – km/h to ft/s',
    description: 'Convert km/h to ft/s instantly with accurate results',
    type: 'website',
  },
};

export default function KmhToFtsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilometers per Hour to Feet per Second Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert km/h to ft/s instantly. 1 km/h = 0.91 ft/s.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="kmh" defaultTo="fts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
