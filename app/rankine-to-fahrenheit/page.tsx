import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Rankine to Fahrenheit Converter – °R to °F | Free Tool',
  description: 'Free Rankine to Fahrenheit converter. Convert °R to °F instantly with accurate temperature conversion results.',
  keywords: 'rankine to fahrenheit, °R to °F, convert rankine to fahrenheit, temperature converter',
  openGraph: {
    title: 'Rankine to Fahrenheit Converter – °R to °F',
    description: 'Convert rankine to fahrenheit instantly with accurate results',
    type: 'website',
  },
};

export default function RankineToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Rankine to Fahrenheit Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert rankine to fahrenheit instantly. °F = °R − 459.67.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="rankine" defaultTo="fahrenheit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
