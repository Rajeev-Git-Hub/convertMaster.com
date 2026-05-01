import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Celsius to Kelvin Converter - Convert C to K',
  description: 'Free Celsius to Kelvin converter. Convert C to K instantly. Formula: K = C + 273.15. Accurate results and practical examples.',
  keywords: 'celsius to kelvin, c to k, convert celsius to kelvin, celsius kelvin converter, temperature converter',
  openGraph: {
    title: 'Celsius to Kelvin Converter',
    description: 'Convert Celsius to Kelvin instantly',
    type: 'website',
  },
};

export default function CelsiusToKelvinPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Celsius to Kelvin Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert Celsius to Kelvin instantly. Formula: K = C + 273.15
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="kelvin" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">K = C + 273.15</p>
              <p className="text-gray-600 dark:text-gray-300">Simply add 273.15 to Celsius temperature</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { c: '-273.15°C', k: '0 K' },
              { c: '0°C', k: '273.15 K' },
              { c: '25°C', k: '298.15 K' },
              { c: '100°C', k: '373.15 K' },
              { c: '-196°C', k: '77.15 K' },
              { c: '-78.5°C', k: '194.65 K' },
              { c: '37°C', k: '310.15 K' },
              { c: '20°C', k: '293.15 K' },
              { c: '50°C', k: '323.15 K' },
              { c: '-40°C', k: '233.15 K' },
              { c: '300°C', k: '573.15 K' },
              { c: '1000°C', k: '1273.15 K' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-purple-600">{item.c}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/kelvin-to-celsius/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Kelvin to Celsius</Link>
            <Link href="/celsius-to-fahrenheit/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Celsius to Fahrenheit</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
