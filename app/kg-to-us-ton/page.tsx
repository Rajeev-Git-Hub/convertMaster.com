import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilograms to US Tons Converter – kg to ton | Free Tool',
  description: 'Free kilograms to US tons converter. Convert kg to US ton instantly with accurate results.',
  keywords: 'kilograms to us tons, kg to us ton, convert kilograms to us tons, weight converter',
  openGraph: {
    title: 'Kilograms to US Tons Converter – kg to ton',
    description: 'Convert kilograms to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function KgToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilograms to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert kilograms to US tons instantly. 1 kg = 0.0011 US ton.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="kilogram" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
