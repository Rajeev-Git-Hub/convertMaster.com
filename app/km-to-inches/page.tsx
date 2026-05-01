import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilometers to Inches Converter – km to in | Free Tool',
  description: 'Free kilometers to inches converter. Convert km to in instantly with accurate results.',
  keywords: 'kilometers to inches, km to in, convert kilometers to inches, length converter',
  openGraph: {
    title: 'Kilometers to Inches Converter – km to in',
    description: 'Convert kilometers to inches instantly with accurate results',
    type: 'website',
  },
};

export default function KmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilometers to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilometers to inches instantly. 1 km = 39,370 in.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="kilometer" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
