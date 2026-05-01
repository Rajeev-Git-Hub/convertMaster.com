import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to Micrograms Converter – oz to μg | Free Tool',
  description: 'Free ounces to micrograms converter. Convert oz to μg instantly with accurate results.',
  keywords: 'ounces to micrograms, oz to μg, convert ounces to micrograms, weight converter',
  openGraph: {
    title: 'Ounces to Micrograms Converter – oz to μg',
    description: 'Convert ounces to micrograms instantly with accurate results',
    type: 'website',
  },
};

export default function OunceToMicrogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ounces to Micrograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert ounces to micrograms instantly. 1 oz = 28.35M μg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="microgram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
