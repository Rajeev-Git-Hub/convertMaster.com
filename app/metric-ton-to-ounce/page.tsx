import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Metric Tons to Ounces Converter – t to oz | Free Tool',
  description: 'Free metric tons to ounces converter. Convert t to oz instantly with accurate results.',
  keywords: 'metric tons to ounces, t to oz, convert metric tons to ounces, weight converter',
  openGraph: {
    title: 'Metric Tons to Ounces Converter – t to oz',
    description: 'Convert metric tons to ounces instantly with accurate results',
    type: 'website',
  },
};

export default function MetricTonToOuncePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Metric Tons to Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert metric tons to ounces instantly. 1 t = 35,274 oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="metric-ton" defaultTo="ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
