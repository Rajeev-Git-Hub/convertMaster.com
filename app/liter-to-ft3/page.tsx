import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Liters to Cubic Feet Converter – L to ft³ | Free Tool',
  description: 'Free liters to cubic feet converter. Convert L to ft³ instantly with accurate results.',
  keywords: 'liters to cubic feet, L to ft³, convert liters to cubic feet, volume converter',
  openGraph: {
    title: 'Liters to Cubic Feet Converter – L to ft³',
    description: 'Convert liters to cubic feet instantly with accurate results',
    type: 'website',
  },
};

export default function LiterToFt3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Liters to Cubic Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert liters to cubic feet instantly. 1 L = 0.0353 ft³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="liter" defaultTo="cubic-foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
