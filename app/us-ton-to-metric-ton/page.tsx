import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'US Tons to Metric Tons Converter – US ton to t | Free Tool',
  description: 'Free US tons to metric tons converter. Convert US ton to t instantly with accurate results.',
  keywords: 'us tons to metric tons, us ton to t, convert us tons to metric tons, weight converter',
  openGraph: {
    title: 'US Tons to Metric Tons Converter – US ton to t',
    description: 'Convert US tons to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function UsTonToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              US Tons to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert US tons to metric tons instantly. 1 US ton = 0.907 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="us-ton" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
