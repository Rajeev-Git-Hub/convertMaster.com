import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Liters to Gallons Converter – L to gal | Free Tool',
  description: 'Free liters to gallons converter. Convert L to gal instantly with accurate results.',
  keywords: 'liters to gallons, L to gal, convert liters to gallons, volume converter',
  openGraph: {
    title: 'Liters to Gallons Converter – L to gal',
    description: 'Convert liters to gallons instantly with accurate results',
    type: 'website',
  },
};

export default function LiterToGallonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Liters to Gallons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert liters to gallons instantly. 1 L = 0.264 gal.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="liter" defaultTo="gallon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
