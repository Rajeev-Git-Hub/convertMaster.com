import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Yards Converter – mi to yd | Free Tool',
  description: 'Free miles to yards converter. Convert mi to yd instantly with accurate results.',
  keywords: 'miles to yards, mi to yd, convert miles to yards, length converter',
  openGraph: {
    title: 'Miles to Yards Converter – mi to yd',
    description: 'Convert miles to yards instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToYardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles to Yards Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert miles to yards instantly. 1 mi = 1,760 yd.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="yard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
