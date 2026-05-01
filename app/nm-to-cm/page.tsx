import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanometers to Centimeters Converter – nm to cm | Free Tool',
  description: 'Free nanometers to centimeters converter. Convert nm to cm instantly with accurate results.',
  keywords: 'nanometers to centimeters, nm to cm, convert nanometers to centimeters, length converter',
  openGraph: {
    title: 'Nanometers to Centimeters Converter – nm to cm',
    description: 'Convert nanometers to centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function NmToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanometers to Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanometers to centimeters instantly. 10,000,000 nm = 1 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="nanometer" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
