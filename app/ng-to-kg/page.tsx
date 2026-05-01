import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanograms to Kilograms Converter – ng to kg | Free Tool',
  description: 'Free nanograms to kilograms converter. Convert ng to kg instantly with accurate results.',
  keywords: 'nanograms to kilograms, ng to kg, convert nanograms to kilograms, weight converter',
  openGraph: {
    title: 'Nanograms to Kilograms Converter – ng to kg',
    description: 'Convert nanograms to kilograms instantly with accurate results',
    type: 'website',
  },
};

export default function NgToKgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanograms to Kilograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanograms to kilograms instantly. 1T ng = 1 kg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="nanogram" defaultTo="kilogram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
