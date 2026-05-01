import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilometers to Feet Converter – km to ft | Free Tool',
  description: 'Free kilometers to feet converter. Convert km to ft instantly with accurate results.',
  keywords: 'kilometers to feet, km to ft, convert kilometers to feet, length converter',
  openGraph: {
    title: 'Kilometers to Feet Converter – km to ft',
    description: 'Convert kilometers to feet instantly with accurate results',
    type: 'website',
  },
};

export default function KmToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilometers to Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilometers to feet instantly. 1 km = 3,281 ft.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="kilometer" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
