import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanometers to Inches Converter – nm to in | Free Tool',
  description: 'Free nanometers to inches converter. Convert nm to in instantly with accurate results.',
  keywords: 'nanometers to inches, nm to in, convert nanometers to inches, length converter',
  openGraph: {
    title: 'Nanometers to Inches Converter – nm to in',
    description: 'Convert nanometers to inches instantly with accurate results',
    type: 'website',
  },
};

export default function NmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanometers to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanometers to inches instantly. 1 nm = 0.0000000394 in.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="nanometer" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
