import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Fahrenheit to Réaumur Converter – °F to °Ré | Free Tool',
  description: 'Free Fahrenheit to Réaumur converter. Convert °F to °Ré instantly with accurate temperature conversion results.',
  keywords: 'fahrenheit to réaumur, °F to °Ré, convert fahrenheit to réaumur, temperature converter',
  openGraph: {
    title: 'Fahrenheit to Réaumur Converter – °F to °Ré',
    description: 'Convert fahrenheit to réaumur instantly with accurate results',
    type: 'website',
  },
};

export default function FahrenheitToReaumurPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Fahrenheit to Réaumur Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert fahrenheit to réaumur instantly. °Ré = (°F − 32) × 4/9.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="fahrenheit" defaultTo="reaumur" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
