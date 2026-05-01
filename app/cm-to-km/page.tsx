import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Centimeters to Kilometers Converter – cm to km | Free Tool',
  description: 'Free centimeters to kilometers converter. Convert cm to km instantly with accurate results.',
  keywords: 'centimeters to kilometers, cm to km, convert centimeters to kilometers, length converter',
  openGraph: {
    title: 'Centimeters to Kilometers Converter – cm to km',
    description: 'Convert centimeters to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function CmToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Centimeters to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert centimeters to kilometers instantly. 100,000 cm = 1 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="centimeter" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
