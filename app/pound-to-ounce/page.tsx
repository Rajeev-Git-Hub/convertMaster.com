import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Pounds to Ounces Converter – lb to oz | Free Tool',
  description: 'Free pounds to ounces converter. Convert lb to oz instantly with accurate results.',
  keywords: 'pounds to ounces, lb to oz, convert pounds to ounces, weight converter',
  openGraph: {
    title: 'Pounds to Ounces Converter – lb to oz',
    description: 'Convert pounds to ounces instantly with accurate results',
    type: 'website',
  },
};

export default function PoundToOuncePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pounds to Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert pounds to ounces instantly. 1 lb = 16 oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
