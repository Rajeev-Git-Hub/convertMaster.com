import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Rankine to Réaumur Converter – °R to °Ré | Free Tool',
  description: 'Free Rankine to Réaumur converter. Convert °R to °Ré instantly with accurate temperature conversion results.',
  keywords: 'rankine to réaumur, °R to °Ré, convert rankine to réaumur, temperature converter',
  openGraph: {
    title: 'Rankine to Réaumur Converter – °R to °Ré',
    description: 'Convert rankine to réaumur instantly with accurate results',
    type: 'website',
  },
};

export default function RankineToReaumurPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Rankine to Réaumur Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert rankine to réaumur instantly. °Ré = (°R − 491.67) × 4/9.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="rankine" defaultTo="reaumur" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
