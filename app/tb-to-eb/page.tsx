import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'TB to EB Converter – TB to EB | Free Tool',
  description: 'Free terabytes to exabytes converter. Convert TB to EB instantly with accurate results.',
  keywords: 'TB to EB, terabytes to exabytes, convert TB to EB, data storage converter',
  openGraph: {
    title: 'TB to EB Converter – TB to EB',
    description: 'Convert TB to EB instantly with accurate results',
    type: 'website',
  },
};

export default function TbToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Terabytes to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert TB to EB instantly. 1 EB = 1,048,576 TB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="tb" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
