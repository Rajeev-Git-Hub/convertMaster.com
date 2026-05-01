import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet to Hectometers Converter – ft to hm | Free Tool',
  description: 'Free feet to hectometers converter. Convert ft to hm instantly with accurate results.',
  keywords: 'feet to hectometers, ft to hm, convert feet to hectometers, length converter',
  openGraph: {
    title: 'Feet to Hectometers Converter – ft to hm',
    description: 'Convert feet to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function FeetToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Feet to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert feet to hectometers instantly. 1 ft = 0.00305 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="foot" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
