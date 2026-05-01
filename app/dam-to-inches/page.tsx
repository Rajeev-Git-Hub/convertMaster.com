import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Dekameters to Inches Converter – dam to in | Free Tool',
  description: 'Free dekameters to inches converter. Convert dam to in instantly with accurate results.',
  keywords: 'dekameters to inches, dam to in, convert dekameters to inches, length converter',
  openGraph: {
    title: 'Dekameters to Inches Converter – dam to in',
    description: 'Convert dekameters to inches instantly with accurate results',
    type: 'website',
  },
};

export default function DamToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Dekameters to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert dekameters to inches instantly. 1 dam = 393.7 in.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="dekameter" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
