import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectares to Square Miles Converter – ha to mi² | Free Tool',
  description: 'Free hectares to square miles converter. Convert ha to mi² instantly with accurate results.',
  keywords: 'hectares to square miles, ha to mi², convert hectares to square miles, area converter',
  openGraph: {
    title: 'Hectares to Square Miles Converter – ha to mi²',
    description: 'Convert hectares to square miles instantly with accurate results',
    type: 'website',
  },
};

export default function HectareToMi2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hectares to Square Miles Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert hectares to square miles instantly. 1 ha = 0.00386 mi².
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="hectare" defaultTo="square-mile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
