import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanometers to Hectometers Converter – nm to hm | Free Tool',
  description: 'Free nanometers to hectometers converter. Convert nm to hm instantly with accurate results.',
  keywords: 'nanometers to hectometers, nm to hm, convert nanometers to hectometers, length converter',
  openGraph: {
    title: 'Nanometers to Hectometers Converter – nm to hm',
    description: 'Convert nanometers to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function NmToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanometers to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanometers to hectometers instantly. 100,000,000,000 nm = 1 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="nanometer" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
