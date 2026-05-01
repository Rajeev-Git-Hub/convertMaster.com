import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Pounds to Micrograms Converter – lb to μg | Free Tool',
  description: 'Free pounds to micrograms converter. Convert lb to μg instantly with accurate results.',
  keywords: 'pounds to micrograms, lb to μg, convert pounds to micrograms, weight converter',
  openGraph: {
    title: 'Pounds to Micrograms Converter – lb to μg',
    description: 'Convert pounds to micrograms instantly with accurate results',
    type: 'website',
  },
};

export default function PoundToMicrogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pounds to Micrograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert pounds to micrograms instantly. 1 lb = 454M μg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="microgram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
