import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Speed of Light to Miles per Hour Converter – c to mph | Free Tool',
  description: 'Free speed of light to miles per hour converter. Convert c to mph instantly with accurate results.',
  keywords: 'speed of light to mph, c to miles per hour, convert c to mph, speed converter',
  openGraph: {
    title: 'Speed of Light to Miles per Hour Converter – c to mph',
    description: 'Convert speed of light to mph instantly with accurate results',
    type: 'website',
  },
};

export default function CToMphPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Speed of Light to Miles per Hour Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert c to mph instantly. 1 c = 670,616,629 mph.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="c" defaultTo="mph" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
