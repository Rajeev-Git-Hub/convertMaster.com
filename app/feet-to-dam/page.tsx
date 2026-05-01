import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet to Dekameters Converter – ft to dam | Free Tool',
  description: 'Free feet to dekameters converter. Convert ft to dam instantly with accurate results.',
  keywords: 'feet to dekameters, ft to dam, convert feet to dekameters, length converter',
  openGraph: {
    title: 'Feet to Dekameters Converter – ft to dam',
    description: 'Convert feet to dekameters instantly with accurate results',
    type: 'website',
  },
};

export default function FeetToDamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Feet to Dekameters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert feet to dekameters instantly. 1 ft = 0.0305 dam.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="foot" defaultTo="dekameter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
