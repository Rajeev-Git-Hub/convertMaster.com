import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to Pounds Converter – oz to lb | Free Tool',
  description: 'Free ounces to pounds converter. Convert oz to lb instantly with accurate results.',
  keywords: 'ounces to pounds, oz to lb, convert ounces to pounds, weight converter',
  openGraph: {
    title: 'Ounces to Pounds Converter – oz to lb',
    description: 'Convert ounces to pounds instantly with accurate results',
    type: 'website',
  },
};

export default function OunceToPoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ounces to Pounds Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert ounces to pounds instantly. 1 oz = 0.0625 lb.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="pound" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
