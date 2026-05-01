import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Feet to Cubic Meters Converter – ft³ to m³ | Free Tool',
  description: 'Free cubic feet to cubic meters converter. Convert ft³ to m³ instantly with accurate results.',
  keywords: 'cubic feet to cubic meters, ft³ to m³, convert cubic feet to cubic meters, volume converter',
  openGraph: {
    title: 'Cubic Feet to Cubic Meters Converter – ft³ to m³',
    description: 'Convert cubic feet to cubic meters instantly with accurate results',
    type: 'website',
  },
};

export default function Ft3ToM3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cubic Feet to Cubic Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert cubic feet to cubic meters instantly. 1 ft³ = 0.028 m³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-foot" defaultTo="cubic-meter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
