import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'US Tons to Grams Converter – US ton to g | Free Tool',
  description: 'Free US tons to grams converter. Convert US ton to g instantly with accurate results.',
  keywords: 'us tons to grams, us ton to g, convert us tons to grams, weight converter',
  openGraph: {
    title: 'US Tons to Grams Converter – US ton to g',
    description: 'Convert US tons to grams instantly with accurate results',
    type: 'website',
  },
};

export default function UsTonToGPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              US Tons to Grams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert US tons to grams instantly. 1 US ton = 907,185 g.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="us-ton" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
