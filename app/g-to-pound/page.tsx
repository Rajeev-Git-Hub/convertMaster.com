import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to Pounds Converter – g to lb | Free Tool',
  description: 'Free grams to pounds converter. Convert g to lb instantly with accurate results.',
  keywords: 'grams to pounds, g to lb, convert grams to pounds, weight converter',
  openGraph: {
    title: 'Grams to Pounds Converter – g to lb',
    description: 'Convert grams to pounds instantly with accurate results',
    type: 'website',
  },
};

export default function GToPoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Grams to Pounds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert grams to pounds instantly. 1 g = 0.0022 lb.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="pound" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
