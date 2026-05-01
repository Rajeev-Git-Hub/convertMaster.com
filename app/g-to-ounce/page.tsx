import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to Ounces Converter – g to oz | Free Tool',
  description: 'Free grams to ounces converter. Convert g to oz instantly with accurate results.',
  keywords: 'grams to ounces, g to oz, convert grams to ounces, weight converter',
  openGraph: {
    title: 'Grams to Ounces Converter – g to oz',
    description: 'Convert grams to ounces instantly with accurate results',
    type: 'website',
  },
};

export default function GToOuncePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Grams to Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert grams to ounces instantly. 1 g = 0.035 oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
