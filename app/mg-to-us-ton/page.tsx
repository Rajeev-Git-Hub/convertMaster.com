import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milligrams to US Tons Converter – mg to ton | Free Tool',
  description: 'Free milligrams to US tons converter. Convert mg to US ton instantly with accurate results.',
  keywords: 'milligrams to us tons, mg to us ton, convert milligrams to us tons, weight converter',
  openGraph: {
    title: 'Milligrams to US Tons Converter – mg to ton',
    description: 'Convert milligrams to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function MgToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milligrams to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milligrams to US tons instantly. 1 mg = 0.0000000011 US ton.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="milligram" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
