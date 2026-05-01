import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Meters to Hectares Converter – m² to ha | Free Tool',
  description: 'Free square meters to hectares converter. Convert m² to ha instantly with accurate results.',
  keywords: 'square meters to hectares, m² to ha, convert square meters to hectares, area converter',
  openGraph: {
    title: 'Square Meters to Hectares Converter – m² to ha',
    description: 'Convert square meters to hectares instantly with accurate results',
    type: 'website',
  },
};

export default function M2ToHectarePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Meters to Hectares Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square meters to hectares instantly. 1 m² = 0.0001 ha.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-meter" defaultTo="hectare" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
