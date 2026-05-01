import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Metric Tons to Grams Converter – t to g | Free Tool',
  description: 'Free metric tons to grams converter. Convert t to g instantly with accurate results.',
  keywords: 'metric tons to grams, t to g, convert metric tons to grams, weight converter',
  openGraph: {
    title: 'Metric Tons to Grams Converter – t to g',
    description: 'Convert metric tons to grams instantly with accurate results',
    type: 'website',
  },
};

export default function MetricTonToGPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Metric Tons to Grams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert metric tons to grams instantly. 1 t = 1,000,000 g.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="metric-ton" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
