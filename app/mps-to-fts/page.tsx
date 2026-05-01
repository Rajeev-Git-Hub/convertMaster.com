import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters per Second to Feet per Second Converter – m/s to ft/s | Free Tool',
  description: 'Free meters per second to feet per second converter. Convert m/s to ft/s instantly with accurate results.',
  keywords: 'm/s to ft/s, meters per second to feet per second, convert m/s to ft/s, speed converter',
  openGraph: {
    title: 'Meters per Second to Feet per Second Converter – m/s to ft/s',
    description: 'Convert m/s to ft/s instantly with accurate results',
    type: 'website',
  },
};

export default function MpsToFtsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Meters per Second to Feet per Second Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert m/s to ft/s instantly. 1 m/s = 3.28 ft/s.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mps" defaultTo="fts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
