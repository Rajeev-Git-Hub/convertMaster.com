import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Millimeters to Acres Converter – mm² to ac | Free Tool',
  description: 'Free square millimeters to acres converter. Convert mm² to ac instantly with accurate results.',
  keywords: 'square millimeters to acres, mm² to ac, convert square millimeters to acres, area converter',
  openGraph: {
    title: 'Square Millimeters to Acres Converter – mm² to ac',
    description: 'Convert square millimeters to acres instantly with accurate results',
    type: 'website',
  },
};

export default function Mm2ToAcrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Millimeters to Acres Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square millimeters to acres instantly. 1 mm² = 0.000000000247 ac.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-millimeter" defaultTo="acre" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
