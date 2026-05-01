import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet per Second to Miles per Hour Converter – ft/s to mph | Free Tool',
  description: 'Free feet per second to miles per hour converter. Convert ft/s to mph instantly with accurate results.',
  keywords: 'ft/s to mph, feet per second to miles per hour, convert ft/s to mph, speed converter',
  openGraph: {
    title: 'Feet per Second to Miles per Hour Converter – ft/s to mph',
    description: 'Convert ft/s to mph instantly with accurate results',
    type: 'website',
  },
};

export default function FtsToMphPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Feet per Second to Miles per Hour Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert ft/s to mph instantly. 1 ft/s = 0.68 mph.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="fts" defaultTo="mph" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
