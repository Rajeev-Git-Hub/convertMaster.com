import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Miles to Square Millimeters Converter – mi² to mm² | Free Tool',
  description: 'Free square miles to square millimeters converter. Convert mi² to mm² instantly with accurate results.',
  keywords: 'square miles to square millimeters, mi² to mm², convert square miles to square millimeters, area converter',
  openGraph: {
    title: 'Square Miles to Square Millimeters Converter – mi² to mm²',
    description: 'Convert square miles to square millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function Mi2ToMm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Miles to Square Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square miles to square millimeters instantly. 1 mi² = 2,590B mm².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-mile" defaultTo="square-millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
