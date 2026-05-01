import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Liters to Cubic Meters Converter – L to m³ | Free Tool',
  description: 'Free liters to cubic meters converter. Convert L to m³ instantly with accurate results.',
  keywords: 'liters to cubic meters, L to m³, convert liters to cubic meters, volume converter',
  openGraph: {
    title: 'Liters to Cubic Meters Converter – L to m³',
    description: 'Convert liters to cubic meters instantly with accurate results',
    type: 'website',
  },
};

export default function LiterToM3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Liters to Cubic Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert liters to cubic meters instantly. 1 L = 0.001 m³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="liter" defaultTo="cubic-meter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
