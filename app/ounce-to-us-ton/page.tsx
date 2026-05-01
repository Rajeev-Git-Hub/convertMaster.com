import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to US Tons Converter – oz to US ton | Free Tool',
  description: 'Free ounces to US tons converter. Convert oz to US ton instantly with accurate results.',
  keywords: 'ounces to us tons, oz to us ton, convert ounces to us tons, weight converter',
  openGraph: {
    title: 'Ounces to US Tons Converter – oz to US ton',
    description: 'Convert ounces to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function OunceToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ounces to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert ounces to US tons instantly. 1 oz = 0.000031 US ton.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
