import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrograms to Milligrams Converter – μg to mg | Free Tool',
  description: 'Free micrograms to milligrams converter. Convert μg to mg instantly with accurate results.',
  keywords: 'micrograms to milligrams, μg to mg, convert micrograms to milligrams, weight converter',
  openGraph: {
    title: 'Micrograms to Milligrams Converter – μg to mg',
    description: 'Convert micrograms to milligrams instantly with accurate results',
    type: 'website',
  },
};

export default function MicrogToMgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrograms to Milligrams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrograms to milligrams instantly. 1,000 μg = 1 mg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="microgram" defaultTo="milligram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
