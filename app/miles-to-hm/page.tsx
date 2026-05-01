import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Hectometers Converter – mi to hm | Free Tool',
  description: 'Free miles to hectometers converter. Convert mi to hm instantly with accurate results.',
  keywords: 'miles to hectometers, mi to hm, convert miles to hectometers, length converter',
  openGraph: {
    title: 'Miles to Hectometers Converter – mi to hm',
    description: 'Convert miles to hectometers instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToHmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles to Hectometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert miles to hectometers instantly. 1 mi = 16.1 hm.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="hectometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
