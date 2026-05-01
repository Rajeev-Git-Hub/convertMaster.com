import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Meters per Second to Speed of Light Converter – m/s to c | Free Tool',
  description: 'Free meters per second to speed of light converter. Convert m/s to c instantly with accurate results.',
  keywords: 'm/s to speed of light, meters per second to c, convert m/s to c, speed converter',
  openGraph: {
    title: 'Meters per Second to Speed of Light Converter – m/s to c',
    description: 'Convert m/s to speed of light instantly with accurate results',
    type: 'website',
  },
};

export default function MpsToCPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Meters per Second to Speed of Light Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert m/s to speed of light instantly. 1 m/s = 0.0000000033 c.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mps" defaultTo="c" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
