import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Metric Tons to US Tons Converter – t to US ton | Free Tool',
  description: 'Free metric tons to US tons converter. Convert t to US ton instantly with accurate results.',
  keywords: 'metric tons to us tons, t to us ton, convert metric tons to us tons, weight converter',
  openGraph: {
    title: 'Metric Tons to US Tons Converter – t to US ton',
    description: 'Convert metric tons to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function MetricTonToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Metric Tons to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert metric tons to US tons instantly. 1 t = 1.102 US ton.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="metric-ton" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
