import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to US Tons Converter – g to ton | Free Tool',
  description: 'Free grams to US tons converter. Convert g to US ton instantly with accurate results.',
  keywords: 'grams to us tons, g to us ton, convert grams to us tons, weight converter',
  openGraph: {
    title: 'Grams to US Tons Converter – g to ton',
    description: 'Convert grams to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function GToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Grams to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert grams to US tons instantly. 1 g = 0.0000011 US ton.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
