import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Centimeters to Square Millimeters Converter – cm² to mm² | Free Tool',
  description: 'Free square centimeters to square millimeters converter. Convert cm² to mm² instantly with accurate results.',
  keywords: 'square centimeters to square millimeters, cm² to mm², convert square centimeters to square millimeters, area converter',
  openGraph: {
    title: 'Square Centimeters to Square Millimeters Converter – cm² to mm²',
    description: 'Convert square centimeters to square millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function Cm2ToMm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Centimeters to Square Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square centimeters to square millimeters instantly. 1 cm² = 100 mm².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-centimeter" defaultTo="square-millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
