import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrograms to Ounces Converter – μg to oz | Free Tool',
  description: 'Free micrograms to ounces converter. Convert μg to oz instantly with accurate results.',
  keywords: 'micrograms to ounces, μg to oz, convert micrograms to ounces, weight converter',
  openGraph: {
    title: 'Micrograms to Ounces Converter – μg to oz',
    description: 'Convert micrograms to ounces instantly with accurate results',
    type: 'website',
  },
};

export default function MicrogToOuncePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrograms to Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrograms to ounces instantly. 1 μg = 0.000000035 oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="microgram" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
