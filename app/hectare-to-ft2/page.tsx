import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectares to Square Feet Converter – ha to ft² | Free Tool',
  description: 'Free hectares to square feet converter. Convert ha to ft² instantly with accurate results.',
  keywords: 'hectares to square feet, ha to ft², convert hectares to square feet, area converter',
  openGraph: {
    title: 'Hectares to Square Feet Converter – ha to ft²',
    description: 'Convert hectares to square feet instantly with accurate results',
    type: 'website',
  },
};

export default function HectareToFt2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectares to Square Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectares to square feet instantly. 1 ha = 107,639 ft².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="hectare" defaultTo="square-foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
