import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Acres to Square Millimeters Converter – ac to mm² | Free Tool',
  description: 'Free acres to square millimeters converter. Convert ac to mm² instantly with accurate results.',
  keywords: 'acres to square millimeters, ac to mm², convert acres to square millimeters, area converter',
  openGraph: {
    title: 'Acres to Square Millimeters Converter – ac to mm²',
    description: 'Convert acres to square millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function AcreToMm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Acres to Square Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert acres to square millimeters instantly. 1 ac = 4B mm².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="acre" defaultTo="square-millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
