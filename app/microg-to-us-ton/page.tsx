import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrograms to US Tons Converter – μg to ton | Free Tool',
  description: 'Free micrograms to US tons converter. Convert μg to US ton instantly with accurate results.',
  keywords: 'micrograms to us tons, μg to us ton, convert micrograms to us tons, weight converter',
  openGraph: {
    title: 'Micrograms to US Tons Converter – μg to ton',
    description: 'Convert micrograms to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function MicrogToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrograms to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrograms to US tons instantly. 1 μg = 0.0000000000011 US ton.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="microgram" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
