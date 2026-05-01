import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Meters Converter – μm to m | Free Tool',
  description: 'Free micrometers to meters converter. Convert μm to m instantly with accurate results.',
  keywords: 'micrometers to meters, μm to m, convert micrometers to meters, length converter',
  openGraph: {
    title: 'Micrometers to Meters Converter – μm to m',
    description: 'Convert micrometers to meters instantly with accurate results',
    type: 'website',
  },
};

export default function UmToMetersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to meters instantly. 1,000,000 μm = 1 m.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="meter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
