import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Pounds to Grams Converter – lb to g | Free Tool',
  description: 'Free pounds to grams converter. Convert lb to g instantly with accurate results.',
  keywords: 'pounds to grams, lb to g, convert pounds to grams, weight converter',
  openGraph: {
    title: 'Pounds to Grams Converter – lb to g',
    description: 'Convert pounds to grams instantly with accurate results',
    type: 'website',
  },
};

export default function PoundToGPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pounds to Grams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert pounds to grams instantly. 1 lb = 454 g.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
