import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Hectometers Converter – μm to hm | Free Tool',
  description: 'Free micrometers to hectometers converter. Convert μm to hm instantly with accurate results.',
  keywords: 'micrometers to hectometers, μm to hm, convert micrometers to hectometers, length converter',
  openGraph: {
    title: 'Micrometers to Hectometers Converter – μm to hm',
    description: 'Convert micrometers to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function UmToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to hectometers instantly. 100,000,000 μm = 1 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
