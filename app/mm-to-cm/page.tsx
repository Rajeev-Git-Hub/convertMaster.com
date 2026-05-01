import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Millimeters to Centimeters Converter – mm to cm | Free Tool',
  description: 'Free millimeters to centimeters converter. Convert mm to cm instantly with accurate results.',
  keywords: 'millimeters to centimeters, mm to cm, convert millimeters to centimeters, length converter',
  openGraph: {
    title: 'Millimeters to Centimeters Converter – mm to cm',
    description: 'Convert millimeters to centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function MmToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Millimeters to Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert millimeters to centimeters instantly. 10 mm = 1 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="millimeter" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
