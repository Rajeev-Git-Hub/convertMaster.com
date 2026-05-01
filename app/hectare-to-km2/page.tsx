import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectares to Square Kilometers Converter – ha to km² | Free Tool',
  description: 'Free hectares to square kilometers converter. Convert ha to km² instantly with accurate results.',
  keywords: 'hectares to square kilometers, ha to km², convert hectares to square kilometers, area converter',
  openGraph: {
    title: 'Hectares to Square Kilometers Converter – ha to km²',
    description: 'Convert hectares to square kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function HectareToKm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectares to Square Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectares to square kilometers instantly. 1 ha = 0.01 km².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="hectare" defaultTo="square-kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
