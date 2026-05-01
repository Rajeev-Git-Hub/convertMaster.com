import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to Nanograms Converter – g to ng | Free Tool',
  description: 'Free grams to nanograms converter. Convert g to ng instantly with accurate results.',
  keywords: 'grams to nanograms, g to ng, convert grams to nanograms, weight converter',
  openGraph: {
    title: 'Grams to Nanograms Converter – g to ng',
    description: 'Convert grams to nanograms instantly with accurate results',
    type: 'website',
  },
};

export default function GToNgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Grams to Nanograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert grams to nanograms instantly. 1 g = 1B ng.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="nanogram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
