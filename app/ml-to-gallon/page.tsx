import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milliliters to Gallons Converter – mL to gal | Free Tool',
  description: 'Free milliliters to gallons converter. Convert mL to gal instantly with accurate results.',
  keywords: 'milliliters to gallons, mL to gal, convert milliliters to gallons, volume converter',
  openGraph: {
    title: 'Milliliters to Gallons Converter – mL to gal',
    description: 'Convert milliliters to gallons instantly with accurate results',
    type: 'website',
  },
};

export default function MlToGallonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milliliters to Gallons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milliliters to gallons instantly. 1 mL = 0.000264 gal.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="milliliter" defaultTo="gallon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
