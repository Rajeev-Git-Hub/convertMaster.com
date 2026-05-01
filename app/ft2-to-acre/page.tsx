import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Feet to Acres Converter – ft² to ac | Free Tool',
  description: 'Free square feet to acres converter. Convert ft² to ac instantly with accurate results.',
  keywords: 'square feet to acres, ft² to ac, convert square feet to acres, area converter',
  openGraph: {
    title: 'Square Feet to Acres Converter – ft² to ac',
    description: 'Convert square feet to acres instantly with accurate results',
    type: 'website',
  },
};

export default function Ft2ToAcrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Feet to Acres Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square feet to acres instantly. 1 ft² = 0.000023 ac.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-foot" defaultTo="acre" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
