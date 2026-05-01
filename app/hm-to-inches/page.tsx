import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectometers to Inches Converter – hm to in | Free Tool',
  description: 'Free hectometers to inches converter. Convert hm to in instantly with accurate results.',
  keywords: 'hectometers to inches, hm to in, convert hectometers to inches, length converter',
  openGraph: {
    title: 'Hectometers to Inches Converter – hm to in',
    description: 'Convert hectometers to inches instantly with accurate results',
    type: 'website',
  },
};

export default function HmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectometers to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectometers to inches instantly. 1 hm = 3,937 in.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="hectometer" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
