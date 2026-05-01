import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milliliters to Fluid Ounces Converter – mL to fl oz | Free Tool',
  description: 'Free milliliters to fluid ounces converter. Convert mL to fl oz instantly with accurate results.',
  keywords: 'milliliters to fluid ounces, mL to fl oz, convert milliliters to fluid ounces, volume converter',
  openGraph: {
    title: 'Milliliters to Fluid Ounces Converter – mL to fl oz',
    description: 'Convert milliliters to fluid ounces instantly with accurate results',
    type: 'website',
  },
};

export default function MlToFlozPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Milliliters to Fluid Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert milliliters to fluid ounces instantly. 1 mL = 0.034 fl oz.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="milliliter" defaultTo="fluid-ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
