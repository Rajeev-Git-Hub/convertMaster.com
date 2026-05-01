import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Yards Converter – dm to yd | Free Tool',
  description: 'Free decimeters to yards converter. Convert dm to yd instantly with accurate results.',
  keywords: 'decimeters to yards, dm to yd, convert decimeters to yards, length converter',
  openGraph: {
    title: 'Decimeters to Yards Converter – dm to yd',
    description: 'Convert decimeters to yards instantly with accurate results',
    type: 'website',
  },
};

export default function DmToYardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Decimeters to Yards Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert decimeters to yards instantly. 1 dm = 0.109 yd.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="yard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
