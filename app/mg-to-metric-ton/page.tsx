import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milligrams to Metric Tons Converter – mg to t | Free Tool',
  description: 'Free milligrams to metric tons converter. Convert mg to t instantly with accurate results.',
  keywords: 'milligrams to metric tons, mg to t, convert milligrams to metric tons, weight converter',
  openGraph: {
    title: 'Milligrams to Metric Tons Converter – mg to t',
    description: 'Convert milligrams to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function MgToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milligrams to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milligrams to metric tons instantly. 1B mg = 1 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="milligram" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
