import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Pounds to Metric Tons Converter – lb to t | Free Tool',
  description: 'Free pounds to metric tons converter. Convert lb to t instantly with accurate results.',
  keywords: 'pounds to metric tons, lb to t, convert pounds to metric tons, weight converter',
  openGraph: {
    title: 'Pounds to Metric Tons Converter – lb to t',
    description: 'Convert pounds to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function PoundToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pounds to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert pounds to metric tons instantly. 1 lb = 0.000454 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
