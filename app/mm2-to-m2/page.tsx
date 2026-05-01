import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Millimeters to Square Meters Converter – mm² to m² | Free Tool',
  description: 'Free square millimeters to square meters converter. Convert mm² to m² instantly with accurate results.',
  keywords: 'square millimeters to square meters, mm² to m², convert square millimeters to square meters, area converter',
  openGraph: {
    title: 'Square Millimeters to Square Meters Converter – mm² to m²',
    description: 'Convert square millimeters to square meters instantly with accurate results',
    type: 'website',
  },
};

export default function Mm2ToM2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Millimeters to Square Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square millimeters to square meters instantly. 1 mm² = 0.000001 m².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-millimeter" defaultTo="square-meter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
