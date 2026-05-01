import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Centimeters to Milliliters Converter – cm³ to mL | Free Tool',
  description: 'Free cubic centimeters to milliliters converter. Convert cm³ to mL instantly with accurate results.',
  keywords: 'cubic centimeters to milliliters, cm³ to mL, convert cubic centimeters to milliliters, volume converter',
  openGraph: {
    title: 'Cubic Centimeters to Milliliters Converter – cm³ to mL',
    description: 'Convert cubic centimeters to milliliters instantly with accurate results',
    type: 'website',
  },
};

export default function Cm3ToMlPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cubic Centimeters to Milliliters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert cubic centimeters to milliliters instantly. 1 cm³ = 1 mL.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-centimeter" defaultTo="milliliter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
