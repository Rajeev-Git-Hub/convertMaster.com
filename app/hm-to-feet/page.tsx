import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectometers to Feet Converter – hm to ft | Free Tool',
  description: 'Free hectometers to feet converter. Convert hm to ft instantly with accurate results.',
  keywords: 'hectometers to feet, hm to ft, convert hectometers to feet, length converter',
  openGraph: {
    title: 'Hectometers to Feet Converter – hm to ft',
    description: 'Convert hectometers to feet instantly with accurate results',
    type: 'website',
  },
};

export default function HmToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectometers to Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectometers to feet instantly. 1 hm = 328 ft.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="hectometer" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
