import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to Metric Tons Converter – g to t | Free Tool',
  description: 'Free grams to metric tons converter. Convert g to t instantly with accurate results.',
  keywords: 'grams to metric tons, g to t, convert grams to metric tons, weight converter',
  openGraph: {
    title: 'Grams to Metric Tons Converter – g to t',
    description: 'Convert grams to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function GToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Grams to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert grams to metric tons instantly. 1,000,000 g = 1 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
