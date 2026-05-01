import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KB to EB Converter – KB to EB | Free Tool',
  description: 'Free kilobytes to exabytes converter. Convert KB to EB instantly with accurate results.',
  keywords: 'KB to EB, kilobytes to exabytes, convert KB to EB, data storage converter',
  openGraph: {
    title: 'KB to EB Converter – KB to EB',
    description: 'Convert KB to EB instantly with accurate results',
    type: 'website',
  },
};

export default function KbToEbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kilobytes to Exabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert KB to EB instantly. 1 EB = 1,099,511,627,776 KB.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kb" defaultTo="eb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
