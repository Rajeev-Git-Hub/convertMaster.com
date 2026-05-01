import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Inches to Square Millimeters Converter – in² to mm² | Free Tool',
  description: 'Free square inches to square millimeters converter. Convert in² to mm² instantly with accurate results.',
  keywords: 'square inches to square millimeters, in² to mm², convert square inches to square millimeters, area converter',
  openGraph: {
    title: 'Square Inches to Square Millimeters Converter – in² to mm²',
    description: 'Convert square inches to square millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function In2ToMm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Inches to Square Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square inches to square millimeters instantly. 1 in² = 645.2 mm².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-inch" defaultTo="square-millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
