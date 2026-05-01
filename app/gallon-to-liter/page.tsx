import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gallons to Liters Converter – gal to L | Free Tool',
  description: 'Free gallons to liters converter. Convert gal to L instantly with accurate results.',
  keywords: 'gallons to liters, gal to L, convert gallons to liters, volume converter',
  openGraph: {
    title: 'Gallons to Liters Converter – gal to L',
    description: 'Convert gallons to liters instantly with accurate results',
    type: 'website',
  },
};

export default function GallonToLiterPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gallons to Liters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gallons to liters instantly. 1 gal = 3.785 L.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="gallon" defaultTo="liter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
