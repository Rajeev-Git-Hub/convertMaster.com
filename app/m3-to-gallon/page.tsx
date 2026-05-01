import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Meters to Gallons Converter – m³ to gal | Free Tool',
  description: 'Free cubic meters to gallons converter. Convert m³ to gal instantly with accurate results.',
  keywords: 'cubic meters to gallons, m³ to gal, convert cubic meters to gallons, volume converter',
  openGraph: {
    title: 'Cubic Meters to Gallons Converter – m³ to gal',
    description: 'Convert cubic meters to gallons instantly with accurate results',
    type: 'website',
  },
};

export default function M3ToGallonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cubic Meters to Gallons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert cubic meters to gallons instantly. 1 m³ = 264.2 gal.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-meter" defaultTo="gallon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
