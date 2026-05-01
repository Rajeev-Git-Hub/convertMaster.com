import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'TB to KB Converter – TB to KB | Free Tool',
  description: 'Free terabytes to kilobytes converter. Convert TB to KB instantly with accurate results.',
  keywords: 'TB to KB, terabytes to kilobytes, convert TB to KB, data storage converter',
  openGraph: {
    title: 'TB to KB Converter – TB to KB',
    description: 'Convert TB to KB instantly with accurate results',
    type: 'website',
  },
};

export default function TbToKbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Terabytes to Kilobytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert TB to KB instantly. 1 TB = 1,048,576 KB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="tb" defaultTo="kb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
