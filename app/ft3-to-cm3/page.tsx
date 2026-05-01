import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Feet to Cubic Centimeters Converter – ft³ to cm³ | Free Tool',
  description: 'Free cubic feet to cubic centimeters converter. Convert ft³ to cm³ instantly with accurate results.',
  keywords: 'cubic feet to cubic centimeters, ft³ to cm³, convert cubic feet to cubic centimeters, volume converter',
  openGraph: {
    title: 'Cubic Feet to Cubic Centimeters Converter – ft³ to cm³',
    description: 'Convert cubic feet to cubic centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function Ft3ToCm3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cubic Feet to Cubic Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert cubic feet to cubic centimeters instantly. 1 ft³ = 28,317 cm³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-foot" defaultTo="cubic-centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
