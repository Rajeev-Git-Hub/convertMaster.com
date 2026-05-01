import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Centimeters Converter – mi to cm | Free Tool',
  description: 'Free miles to centimeters converter. Convert mi to cm instantly with accurate results.',
  keywords: 'miles to centimeters, mi to cm, convert miles to centimeters, length converter',
  openGraph: {
    title: 'Miles to Centimeters Converter – mi to cm',
    description: 'Convert miles to centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles to Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert miles to centimeters instantly. 1 mi = 160,934 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
