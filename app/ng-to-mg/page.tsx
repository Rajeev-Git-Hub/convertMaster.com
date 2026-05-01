import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanograms to Milligrams Converter – ng to mg | Free Tool',
  description: 'Free nanograms to milligrams converter. Convert ng to mg instantly with accurate results.',
  keywords: 'nanograms to milligrams, ng to mg, convert nanograms to milligrams, weight converter',
  openGraph: {
    title: 'Nanograms to Milligrams Converter – ng to mg',
    description: 'Convert nanograms to milligrams instantly with accurate results',
    type: 'website',
  },
};

export default function NgToMgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanograms to Milligrams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanograms to milligrams instantly. 1M ng = 1 mg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="nanogram" defaultTo="milligram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
