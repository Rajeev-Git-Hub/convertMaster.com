import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Nanograms to Metric Tons Converter – ng to t | Free Tool',
  description: 'Free nanograms to metric tons converter. Convert ng to t instantly with accurate results.',
  keywords: 'nanograms to metric tons, ng to t, convert nanograms to metric tons, weight converter',
  openGraph: {
    title: 'Nanograms to Metric Tons Converter – ng to t',
    description: 'Convert nanograms to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function NgToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nanograms to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert nanograms to metric tons instantly. 1Q ng = 1 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="nanogram" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
