import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milliliters to Liters Converter – mL to L | Free Tool',
  description: 'Free milliliters to liters converter. Convert mL to L instantly with accurate results.',
  keywords: 'milliliters to liters, mL to L, convert milliliters to liters, volume converter',
  openGraph: {
    title: 'Milliliters to Liters Converter – mL to L',
    description: 'Convert milliliters to liters instantly with accurate results',
    type: 'website',
  },
};

export default function MlToLiterPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milliliters to Liters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milliliters to liters instantly. 1 mL = 0.001 L.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="milliliter" defaultTo="liter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
