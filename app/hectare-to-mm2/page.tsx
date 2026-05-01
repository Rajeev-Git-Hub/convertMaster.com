import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectares to Square Millimeters Converter – ha to mm² | Free Tool',
  description: 'Free hectares to square millimeters converter. Convert ha to mm² instantly with accurate results.',
  keywords: 'hectares to square millimeters, ha to mm², convert hectares to square millimeters, area converter',
  openGraph: {
    title: 'Hectares to Square Millimeters Converter – ha to mm²',
    description: 'Convert hectares to square millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function HectareToMm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectares to Square Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectares to square millimeters instantly. 1 ha = 10B mm².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="hectare" defaultTo="square-millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
