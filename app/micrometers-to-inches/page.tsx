import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrometers to Inches Converter – μm to in | Free Tool',
  description: 'Free micrometers to inches converter. Convert μm to in instantly with accurate results.',
  keywords: 'micrometers to inches, μm to in, convert micrometers to inches, length converter',
  openGraph: {
    title: 'Micrometers to Inches Converter – μm to in',
    description: 'Convert micrometers to inches instantly with accurate results',
    type: 'website',
  },
};

export default function UmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrometers to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrometers to inches instantly. 1 μm = 0.0000394 in.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="micrometer" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
