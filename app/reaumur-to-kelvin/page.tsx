import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Réaumur to Kelvin Converter – °Ré to K | Free Tool',
  description: 'Free Réaumur to Kelvin converter. Convert °Ré to K instantly with accurate temperature conversion results.',
  keywords: 'réaumur to kelvin, °Ré to K, convert réaumur to kelvin, temperature converter',
  openGraph: {
    title: 'Réaumur to Kelvin Converter – °Ré to K',
    description: 'Convert réaumur to kelvin instantly with accurate results',
    type: 'website',
  },
};

export default function ReaumurToKelvinPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Réaumur to Kelvin Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert réaumur to kelvin instantly. K = °Ré × 5/4 + 273.15.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="reaumur" defaultTo="kelvin" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
