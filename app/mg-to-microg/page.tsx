import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milligrams to Micrograms Converter – mg to μg | Free Tool',
  description: 'Free milligrams to micrograms converter. Convert mg to μg instantly with accurate results.',
  keywords: 'milligrams to micrograms, mg to μg, convert milligrams to micrograms, weight converter',
  openGraph: {
    title: 'Milligrams to Micrograms Converter – mg to μg',
    description: 'Convert milligrams to micrograms instantly with accurate results',
    type: 'website',
  },
};

export default function MgToMicrogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milligrams to Micrograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milligrams to micrograms instantly. 1 mg = 1,000 μg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="milligram" defaultTo="microgram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
