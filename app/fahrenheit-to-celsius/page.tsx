import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Fahrenheit to Celsius Converter - Convert F to C',
  description: 'Free Fahrenheit to Celsius converter. Convert F to C instantly. Formula: C = (F - 32) × 5/9. Accurate results and practical examples.',
  keywords: 'fahrenheit to celsius, f to c, convert fahrenheit to celsius, fahrenheit celsius converter, temperature converter',
  openGraph: {
    title: 'Fahrenheit to Celsius Converter',
    description: 'Convert Fahrenheit to Celsius instantly',
    type: 'website',
  },
};

export default function FahrenheitToCelsiusPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fahrenheit to Celsius Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert Fahrenheit to Celsius instantly. Formula: C = (F - 32) × 5/9
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="fahrenheit" defaultTo="celsius" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">C = (F - 32) × 5/9</p>
              <p className="text-gray-600 dark:text-gray-300">Subtract 32 from Fahrenheit, then multiply by 5/9</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { f: '32°F', c: '0°C' },
              { f: '50°F', c: '10°C' },
              { f: '68°F', c: '20°C' },
              { f: '77°F', c: '25°C' },
              { f: '86°F', c: '30°C' },
              { f: '98.6°F', c: '37°C' },
              { f: '104°F', c: '40°C' },
              { f: '212°F', c: '100°C' },
              { f: '14°F', c: '-10°C' },
              { f: '-4°F', c: '-20°C' },
              { f: '-40°F', c: '-40°C' },
              { f: '59°F', c: '15°C' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.f}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/celsius-to-fahrenheit/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Celsius to Fahrenheit</Link>
            <Link href="/fahrenheit-to-kelvin/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Fahrenheit to Kelvin</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
