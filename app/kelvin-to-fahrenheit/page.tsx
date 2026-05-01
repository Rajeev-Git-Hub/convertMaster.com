import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kelvin to Fahrenheit Converter - Convert K to F',
  description: 'Free Kelvin to Fahrenheit converter. Convert K to F instantly. Formula: F = (K - 273.15) × 9/5 + 32. Accurate results and practical examples.',
  keywords: 'kelvin to fahrenheit, k to f, convert kelvin to fahrenheit, kelvin fahrenheit converter, temperature converter',
  openGraph: {
    title: 'Kelvin to Fahrenheit Converter',
    description: 'Convert Kelvin to Fahrenheit instantly',
    type: 'website',
  },
};

export default function KelvinToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kelvin to Fahrenheit Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert Kelvin to Fahrenheit instantly. Formula: F = (K - 273.15) × 9/5 + 32
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="kelvin" defaultTo="fahrenheit" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">F = (K - 273.15) × 9/5 + 32</p>
              <p className="text-gray-600 dark:text-gray-300">Convert to Celsius first, then to Fahrenheit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { k: '0 K', f: '-459.67°F' },
              { k: '273.15 K', f: '32°F' },
              { k: '293.15 K', f: '68°F' },
              { k: '298.15 K', f: '77°F' },
              { k: '310.15 K', f: '98.6°F' },
              { k: '373.15 K', f: '212°F' },
              { k: '233.15 K', f: '-40°F' },
              { k: '255.37 K', f: '0°F' },
              { k: '310.93 K', f: '100°F' },
              { k: '366.48 K', f: '200°F' },
              { k: '533.15 K', f: '500°F' },
              { k: '810.93 K', f: '1000°F' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-purple-600">{item.k}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/fahrenheit-to-kelvin/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Fahrenheit to Kelvin</Link>
            <Link href="/kelvin-to-celsius/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Kelvin to Celsius</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
