import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milliliters to Cubic Inches Converter – mL to in³ | Free Tool',
  description: 'Free milliliters to cubic inches converter. Convert mL to in³ instantly with accurate results.',
  keywords: 'milliliters to cubic inches, mL to in³, convert milliliters to cubic inches, volume converter',
  openGraph: {
    title: 'Milliliters to Cubic Inches Converter – mL to in³',
    description: 'Convert milliliters to cubic inches instantly with accurate results',
    type: 'website',
  },
};

export default function MlToIn3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milliliters to Cubic Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milliliters to cubic inches instantly. 1 mL = 0.061 in³.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="milliliter" defaultTo="cubic-inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
