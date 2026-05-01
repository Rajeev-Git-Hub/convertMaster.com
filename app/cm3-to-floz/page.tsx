import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Centimeters to Fluid Ounces Converter – cm³ to fl oz | Free Tool',
  description: 'Free cubic centimeters to fluid ounces converter. Convert cm³ to fl oz instantly with accurate results.',
  keywords: 'cubic centimeters to fluid ounces, cm³ to fl oz, convert cubic centimeters to fluid ounces, volume converter',
  openGraph: {
    title: 'Cubic Centimeters to Fluid Ounces Converter – cm³ to fl oz',
    description: 'Convert cubic centimeters to fluid ounces instantly with accurate results',
    type: 'website',
  },
};

export default function Cm3ToFlozPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cubic Centimeters to Fluid Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert cubic centimeters to fluid ounces instantly. 1 cm³ = 0.034 fl oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-centimeter" defaultTo="fluid-ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
