import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrograms to Pounds Converter – μg to lb | Free Tool',
  description: 'Free micrograms to pounds converter. Convert μg to lb instantly with accurate results.',
  keywords: 'micrograms to pounds, μg to lb, convert micrograms to pounds, weight converter',
  openGraph: {
    title: 'Micrograms to Pounds Converter – μg to lb',
    description: 'Convert micrograms to pounds instantly with accurate results',
    type: 'website',
  },
};

export default function MicrogToPoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrograms to Pounds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrograms to pounds instantly. 1 μg = 0.0000000022 lb.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="microgram" defaultTo="pound" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
