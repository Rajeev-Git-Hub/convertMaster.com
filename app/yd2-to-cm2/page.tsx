import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Yards to Square Centimeters Converter – yd² to cm² | Free Tool',
  description: 'Free square yards to square centimeters converter. Convert yd² to cm² instantly with accurate results.',
  keywords: 'square yards to square centimeters, yd² to cm², convert square yards to square centimeters, area converter',
  openGraph: {
    title: 'Square Yards to Square Centimeters Converter – yd² to cm²',
    description: 'Convert square yards to square centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function Yd2ToCm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Yards to Square Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square yards to square centimeters instantly. 1 yd² = 8,361 cm².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-yard" defaultTo="square-centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
