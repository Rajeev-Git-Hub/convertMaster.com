import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gallons to Cubic Centimeters Converter – gal to cm³ | Free Tool',
  description: 'Free gallons to cubic centimeters converter. Convert gal to cm³ instantly with accurate results.',
  keywords: 'gallons to cubic centimeters, gal to cm³, convert gallons to cubic centimeters, volume converter',
  openGraph: {
    title: 'Gallons to Cubic Centimeters Converter – gal to cm³',
    description: 'Convert gallons to cubic centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function GallonToCm3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gallons to Cubic Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gallons to cubic centimeters instantly. 1 gal = 3,785 cm³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="gallon" defaultTo="cubic-centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
