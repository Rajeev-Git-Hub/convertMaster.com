import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Kilometers Converter – μm to km | Free Tool',
  description: 'Free micrometers to kilometers converter. Convert μm to km instantly with accurate results.',
  keywords: 'micrometers to kilometers, μm to km, convert micrometers to kilometers, length converter',
  openGraph: {
    title: 'Micrometers to Kilometers Converter – μm to km',
    description: 'Convert micrometers to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function UmToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to kilometers instantly. 1,000,000,000 μm = 1 km.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
