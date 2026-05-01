import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Meters to Square Feet Converter – m² to ft² | Free Tool',
  description: 'Free square meters to square feet converter. Convert m² to ft² instantly with accurate results.',
  keywords: 'square meters to square feet, m² to ft², convert square meters to square feet, area converter',
  openGraph: {
    title: 'Square Meters to Square Feet Converter – m² to ft²',
    description: 'Convert square meters to square feet instantly with accurate results',
    type: 'website',
  },
};

export default function M2ToFt2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Meters to Square Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square meters to square feet instantly. 1 m² = 10.764 ft².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-meter" defaultTo="square-foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
