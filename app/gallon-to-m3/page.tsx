import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gallons to Cubic Meters Converter – gal to m³ | Free Tool',
  description: 'Free gallons to cubic meters converter. Convert gal to m³ instantly with accurate results.',
  keywords: 'gallons to cubic meters, gal to m³, convert gallons to cubic meters, volume converter',
  openGraph: {
    title: 'Gallons to Cubic Meters Converter – gal to m³',
    description: 'Convert gallons to cubic meters instantly with accurate results',
    type: 'website',
  },
};

export default function GallonToM3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gallons to Cubic Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gallons to cubic meters instantly. 1 gal = 0.0038 m³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="gallon" defaultTo="cubic-meter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
