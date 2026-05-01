import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to Meters Converter – in to m | Free Tool',
  description: 'Free inches to meters converter. Convert in to m instantly with accurate results.',
  keywords: 'inches to meters, in to m, convert inches to meters, length converter',
  openGraph: {
    title: 'Inches to Meters Converter – in to m',
    description: 'Convert inches to meters instantly with accurate results',
    type: 'website',
  },
};

export default function InchesToMetersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Inches to Meters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert inches to meters instantly. 1 in = 0.0254 m.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="meter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
