import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to Grams Converter – oz to g | Free Tool',
  description: 'Free ounces to grams converter. Convert oz to g instantly with accurate results.',
  keywords: 'ounces to grams, oz to g, convert ounces to grams, weight converter',
  openGraph: {
    title: 'Ounces to Grams Converter – oz to g',
    description: 'Convert ounces to grams instantly with accurate results',
    type: 'website',
  },
};

export default function OunceToGPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ounces to Grams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert ounces to grams instantly. 1 oz = 28.35 g.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
