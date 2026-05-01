import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milligrams to Kilograms Converter – mg to kg | Free Tool',
  description: 'Free milligrams to kilograms converter. Convert mg to kg instantly with accurate results.',
  keywords: 'milligrams to kilograms, mg to kg, convert milligrams to kilograms, weight converter',
  openGraph: {
    title: 'Milligrams to Kilograms Converter – mg to kg',
    description: 'Convert milligrams to kilograms instantly with accurate results',
    type: 'website',
  },
};

export default function MgToKgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milligrams to Kilograms Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milligrams to kilograms instantly. 1,000,000 mg = 1 kg.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="milligram" defaultTo="kilogram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
