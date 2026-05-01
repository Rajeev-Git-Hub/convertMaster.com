import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrograms to Nanograms Converter – μg to ng | Free Tool',
  description: 'Free micrograms to nanograms converter. Convert μg to ng instantly with accurate results.',
  keywords: 'micrograms to nanograms, μg to ng, convert micrograms to nanograms, weight converter',
  openGraph: {
    title: 'Micrograms to Nanograms Converter – μg to ng',
    description: 'Convert micrograms to nanograms instantly with accurate results',
    type: 'website',
  },
};

export default function MicrogToNgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrograms to Nanograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrograms to nanograms instantly. 1 μg = 1,000 ng.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="microgram" defaultTo="nanogram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
