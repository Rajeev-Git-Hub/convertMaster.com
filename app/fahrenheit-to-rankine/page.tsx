import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Fahrenheit to Rankine Converter – °F to °R | Free Tool',
  description: 'Free Fahrenheit to Rankine converter. Convert °F to °R instantly with accurate temperature conversion results.',
  keywords: 'fahrenheit to rankine, °F to °R, convert fahrenheit to rankine, temperature converter',
  openGraph: {
    title: 'Fahrenheit to Rankine Converter – °F to °R',
    description: 'Convert fahrenheit to rankine instantly with accurate results',
    type: 'website',
  },
};

export default function FahrenheitToRankinePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Fahrenheit to Rankine Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert fahrenheit to rankine instantly. °R = °F + 459.67.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="fahrenheit" defaultTo="rankine" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
