import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Yards to Square Feet Converter – yd² to ft² | Free Tool',
  description: 'Free square yards to square feet converter. Convert yd² to ft² instantly with accurate results.',
  keywords: 'square yards to square feet, yd² to ft², convert square yards to square feet, area converter',
  openGraph: {
    title: 'Square Yards to Square Feet Converter – yd² to ft²',
    description: 'Convert square yards to square feet instantly with accurate results',
    type: 'website',
  },
};

export default function Yd2ToFt2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Yards to Square Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square yards to square feet instantly. 1 yd² = 9 ft².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-yard" defaultTo="square-foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
