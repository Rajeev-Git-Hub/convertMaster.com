import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles per Hour to Speed of Light Converter – mph to c | Free Tool',
  description: 'Free miles per hour to speed of light converter. Convert mph to c instantly with accurate results.',
  keywords: 'mph to speed of light, miles per hour to c, convert mph to c, speed converter',
  openGraph: {
    title: 'Miles per Hour to Speed of Light Converter – mph to c',
    description: 'Convert mph to speed of light instantly with accurate results',
    type: 'website',
  },
};

export default function MphToCPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Miles per Hour to Speed of Light Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert mph to speed of light instantly. 1 mph = 0.0000000015 c.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mph" defaultTo="c" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
