import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gallons to Fluid Ounces Converter – gal to fl oz | Free Tool',
  description: 'Free gallons to fluid ounces converter. Convert gal to fl oz instantly with accurate results.',
  keywords: 'gallons to fluid ounces, gal to fl oz, convert gallons to fluid ounces, volume converter',
  openGraph: {
    title: 'Gallons to Fluid Ounces Converter – gal to fl oz',
    description: 'Convert gallons to fluid ounces instantly with accurate results',
    type: 'website',
  },
};

export default function GallonToFlozPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Gallons to Fluid Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert gallons to fluid ounces instantly. 1 gal = 128 fl oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="gallon" defaultTo="fluid-ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
