import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Megabits to Kilobits Converter – Mb to Kb | Free Tool',
  description: 'Free megabits to kilobits converter. Convert Mb to Kb instantly with accurate results.',
  keywords: 'megabits to kilobits, Mb to Kb, convert megabits to kilobits, data storage converter',
  openGraph: {
    title: 'Megabits to Kilobits Converter – Mb to Kb',
    description: 'Convert megabits to kilobits instantly with accurate results',
    type: 'website',
  },
};

export default function MbitToKbitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Megabits to Kilobits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert megabits to kilobits instantly. 1 megabit = 1,024 kilobits.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mbit" defaultTo="kbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
