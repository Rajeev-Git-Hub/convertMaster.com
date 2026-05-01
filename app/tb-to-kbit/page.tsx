import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'TB to Kilobits Converter – TB to Kb | Free Tool',
  description: 'Free terabytes to kilobits converter. Convert TB to Kb instantly with accurate results.',
  keywords: 'TB to kilobits, terabytes to Kb, convert TB to kilobits, data storage converter',
  openGraph: {
    title: 'TB to Kilobits Converter – TB to Kb',
    description: 'Convert TB to kilobits instantly with accurate results',
    type: 'website',
  },
};

export default function TbToKbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Terabytes to Kilobits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert TB to kilobits instantly. 1 TB = 8,589,934,592 kilobits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="tb" defaultTo="kbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
