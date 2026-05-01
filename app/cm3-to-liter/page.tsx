import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Centimeters to Liters Converter – cm³ to L | Free Tool',
  description: 'Free cubic centimeters to liters converter. Convert cm³ to L instantly with accurate results.',
  keywords: 'cubic centimeters to liters, cm³ to L, convert cubic centimeters to liters, volume converter',
  openGraph: {
    title: 'Cubic Centimeters to Liters Converter – cm³ to L',
    description: 'Convert cubic centimeters to liters instantly with accurate results',
    type: 'website',
  },
};

export default function Cm3ToLiterPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cubic Centimeters to Liters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert cubic centimeters to liters instantly. 1 cm³ = 0.001 L.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-centimeter" defaultTo="liter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
