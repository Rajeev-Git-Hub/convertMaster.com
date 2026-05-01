import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilograms to Nanograms Converter – kg to ng | Free Tool',
  description: 'Free kilograms to nanograms converter. Convert kg to ng instantly with accurate results.',
  keywords: 'kilograms to nanograms, kg to ng, convert kilograms to nanograms, weight converter',
  openGraph: {
    title: 'Kilograms to Nanograms Converter – kg to ng',
    description: 'Convert kilograms to nanograms instantly with accurate results',
    type: 'website',
  },
};

export default function KgToNgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilograms to Nanograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilograms to nanograms instantly. 1 kg = 1T ng.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="kilogram" defaultTo="nanogram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
