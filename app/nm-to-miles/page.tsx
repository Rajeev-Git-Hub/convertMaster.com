import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanometers to Miles Converter – nm to mi | Free Tool',
  description: 'Free nanometers to miles converter. Convert nm to mi instantly with accurate results.',
  keywords: 'nanometers to miles, nm to mi, convert nanometers to miles, length converter',
  openGraph: {
    title: 'Nanometers to Miles Converter – nm to mi',
    description: 'Convert nanometers to miles instantly with accurate results',
    type: 'website',
  },
};

export default function NmToMilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanometers to Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanometers to miles instantly. 1 nm = 0.000000000000621 mi.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="nanometer" defaultTo="mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
