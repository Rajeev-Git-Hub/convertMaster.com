import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Fluid Ounces to Cubic Centimeters Converter – fl oz to cm³ | Free Tool',
  description: 'Free fluid ounces to cubic centimeters converter. Convert fl oz to cm³ instantly with accurate results.',
  keywords: 'fluid ounces to cubic centimeters, fl oz to cm³, convert fluid ounces to cubic centimeters, volume converter',
  openGraph: {
    title: 'Fluid Ounces to Cubic Centimeters Converter – fl oz to cm³',
    description: 'Convert fluid ounces to cubic centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function FlozToCm3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Fluid Ounces to Cubic Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert fluid ounces to cubic centimeters instantly. 1 fl oz = 29.57 cm³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="fluid-ounce" defaultTo="cubic-centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
