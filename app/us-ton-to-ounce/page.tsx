import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'US Tons to Ounces Converter – US ton to oz | Free Tool',
  description: 'Free US tons to ounces converter. Convert US ton to oz instantly with accurate results.',
  keywords: 'us tons to ounces, us ton to oz, convert us tons to ounces, weight converter',
  openGraph: {
    title: 'US Tons to Ounces Converter – US ton to oz',
    description: 'Convert US tons to ounces instantly with accurate results',
    type: 'website',
  },
};

export default function UsTonToOuncePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              US Tons to Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert US tons to ounces instantly. 1 US ton = 32,000 oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="us-ton" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
