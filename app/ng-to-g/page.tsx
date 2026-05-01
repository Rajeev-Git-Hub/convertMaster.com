import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanograms to Grams Converter – ng to g | Free Tool',
  description: 'Free nanograms to grams converter. Convert ng to g instantly with accurate results.',
  keywords: 'nanograms to grams, ng to g, convert nanograms to grams, weight converter',
  openGraph: {
    title: 'Nanograms to Grams Converter – ng to g',
    description: 'Convert nanograms to grams instantly with accurate results',
    type: 'website',
  },
};

export default function NgToGPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanograms to Grams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanograms to grams instantly. 1B ng = 1 g.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="nanogram" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
