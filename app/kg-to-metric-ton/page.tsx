import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilograms to Metric Tons Converter – kg to t | Free Tool',
  description: 'Free kilograms to metric tons converter. Convert kg to t instantly with accurate results.',
  keywords: 'kilograms to metric tons, kg to t, convert kilograms to metric tons, weight converter',
  openGraph: {
    title: 'Kilograms to Metric Tons Converter – kg to t',
    description: 'Convert kilograms to metric tons instantly with accurate results',
    type: 'website',
  },
};

export default function KgToMetricTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilograms to Metric Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilograms to metric tons instantly. 1,000 kg = 1 t.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="kilogram" defaultTo="metric-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
