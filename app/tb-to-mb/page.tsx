import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'TB to MB Converter – TB to MB | Free Tool',
  description: 'Free terabytes to megabytes converter. Convert TB to MB instantly with accurate results.',
  keywords: 'TB to MB, terabytes to megabytes, convert TB to MB, data storage converter',
  openGraph: {
    title: 'TB to MB Converter – TB to MB',
    description: 'Convert TB to MB instantly with accurate results',
    type: 'website',
  },
};

export default function TbToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Terabytes to Megabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert TB to MB instantly. 1 TB = 1,048,576 MB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="tb" defaultTo="mb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
