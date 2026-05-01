import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to Hectometers Converter – in to hm | Free Tool',
  description: 'Free inches to hectometers converter. Convert in to hm instantly with accurate results.',
  keywords: 'inches to hectometers, in to hm, convert inches to hectometers, length converter',
  openGraph: {
    title: 'Inches to Hectometers Converter – in to hm',
    description: 'Convert inches to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function InchesToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Inches to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert inches to hectometers instantly. 1 in = 0.000254 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
