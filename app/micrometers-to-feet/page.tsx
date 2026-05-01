import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Feet Converter – μm to ft | Free Tool',
  description: 'Free micrometers to feet converter. Convert μm to ft instantly with accurate results.',
  keywords: 'micrometers to feet, μm to ft, convert micrometers to feet, length converter',
  openGraph: {
    title: 'Micrometers to Feet Converter – μm to ft',
    description: 'Convert micrometers to feet instantly with accurate results',
    type: 'website',
  },
};

export default function UmToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to feet instantly. 1 μm = 0.00000328 ft.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
