import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gallons to Milliliters Converter – gal to mL | Free Tool',
  description: 'Free gallons to milliliters converter. Convert gal to mL instantly with accurate results.',
  keywords: 'gallons to milliliters, gal to mL, convert gallons to milliliters, volume converter',
  openGraph: {
    title: 'Gallons to Milliliters Converter – gal to mL',
    description: 'Convert gallons to milliliters instantly with accurate results',
    type: 'website',
  },
};

export default function GallonToMlPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gallons to Milliliters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gallons to milliliters instantly. 1 gal = 3,785 mL.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="gallon" defaultTo="milliliter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
