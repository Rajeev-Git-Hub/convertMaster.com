import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Miles to Acres Converter – mi² to ac | Free Tool',
  description: 'Free square miles to acres converter. Convert mi² to ac instantly with accurate results.',
  keywords: 'square miles to acres, mi² to ac, convert square miles to acres, area converter',
  openGraph: {
    title: 'Square Miles to Acres Converter – mi² to ac',
    description: 'Convert square miles to acres instantly with accurate results',
    type: 'website',
  },
};

export default function Mi2ToAcrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Square Miles to Acres Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert square miles to acres instantly. 1 mi² = 640 ac.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-mile" defaultTo="acre" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
