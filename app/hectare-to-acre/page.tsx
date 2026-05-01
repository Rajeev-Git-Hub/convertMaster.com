import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectares to Acres Converter – ha to ac | Free Tool',
  description: 'Free hectares to acres converter. Convert ha to ac instantly with accurate results.',
  keywords: 'hectares to acres, ha to ac, convert hectares to acres, area converter',
  openGraph: {
    title: 'Hectares to Acres Converter – ha to ac',
    description: 'Convert hectares to acres instantly with accurate results',
    type: 'website',
  },
};

export default function HectareToAcrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectares to Acres Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectares to acres instantly. 1 ha = 2.471 ac.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="hectare" defaultTo="acre" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
