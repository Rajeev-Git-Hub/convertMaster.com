import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Micrograms to Metric Tons Converter – μg to t | Free Tool',
  description: 'Free micrograms to metric tons converter. Convert μg to t instantly with accurate results.',
  keywords: 'micrograms to metric tons, μg to t, convert micrograms to metric tons, weight converter',
  openGraph: {
    title: 'Micrograms to Metric Tons Converter – μg to t',
    description: 'Convert micrograms to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function MicrogToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Micrograms to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert micrograms to metric tons instantly. 1T μg = 1 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="microgram" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
