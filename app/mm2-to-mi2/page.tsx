import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Millimeters to Square Miles Converter – mm² to mi² | Free Tool',
  description: 'Free square millimeters to square miles converter. Convert mm² to mi² instantly with accurate results.',
  keywords: 'square millimeters to square miles, mm² to mi², convert square millimeters to square miles, area converter',
  openGraph: {
    title: 'Square Millimeters to Square Miles Converter – mm² to mi²',
    description: 'Convert square millimeters to square miles instantly with accurate results',
    type: 'website',
  },
};

export default function Mm2ToMi2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Millimeters to Square Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square millimeters to square miles instantly. 1 mm² = 0.000000000000386 mi².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-millimeter" defaultTo="square-mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
