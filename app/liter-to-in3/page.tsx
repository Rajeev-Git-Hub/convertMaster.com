import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Liters to Cubic Inches Converter – L to in³ | Free Tool',
  description: 'Free liters to cubic inches converter. Convert L to in³ instantly with accurate results.',
  keywords: 'liters to cubic inches, L to in³, convert liters to cubic inches, volume converter',
  openGraph: {
    title: 'Liters to Cubic Inches Converter – L to in³',
    description: 'Convert liters to cubic inches instantly with accurate results',
    type: 'website',
  },
};

export default function LiterToIn3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Liters to Cubic Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert liters to cubic inches instantly. 1 L = 61.02 in³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="liter" defaultTo="cubic-inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
