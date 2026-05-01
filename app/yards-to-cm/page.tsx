import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Yards to Centimeters Converter – yd to cm | Free Tool',
  description: 'Free yards to centimeters converter. Convert yd to cm instantly with accurate results.',
  keywords: 'yards to centimeters, yd to cm, convert yards to centimeters, length converter',
  openGraph: {
    title: 'Yards to Centimeters Converter – yd to cm',
    description: 'Convert yards to centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function YardsToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Yards to Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert yards to centimeters instantly. 1 yd = 91.44 cm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="yard" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
