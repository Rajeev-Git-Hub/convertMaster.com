import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Room Temperature Converter - Celsius & Fahrenheit',
  description: 'Room temperature guide. Standard room temperature is 20-22°C (68-72°F). Learn about comfortable indoor temperatures and conversions.',
  keywords: 'room temperature celsius, room temperature fahrenheit, comfortable room temperature, indoor temperature, 20 celsius to fahrenheit',
  openGraph: {
    title: 'Room Temperature Guide',
    description: 'Standard room temperature in Celsius and Fahrenheit',
    type: 'website',
  },
};

export default function RoomTemperaturePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Room Temperature Guide</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Standard room temperature: 20-22°C (68-72°F)
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="temperature" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Comfortable Room Temperatures</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">❄️ Cool Comfort</h3>
                <p className="text-gray-600 dark:text-gray-300">18-20°C (64-68°F) - Ideal for sleeping and physical activities. Energy efficient setting.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">✅ Standard Comfort</h3>
                <p className="text-gray-600 dark:text-gray-300">20-22°C (68-72°F) - Most comfortable for everyday activities and working.</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🔥 Warm Comfort</h3>
                <p className="text-gray-600 dark:text-gray-300">22-24°C (72-75°F) - Preferred by elderly or those sensitive to cold. Higher energy use.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">💡 Energy Saving</h3>
                <p className="text-gray-600 dark:text-gray-300">19°C (66°F) - Recommended winter setting to save energy while maintaining comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Room Temperature Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { c: '16°C', f: '61°F', note: 'Cool' },
              { c: '18°C', f: '64°F', note: 'Fresh' },
              { c: '20°C', f: '68°F', note: 'Comfortable' },
              { c: '21°C', f: '70°F', note: 'Ideal' },
              { c: '22°C', f: '72°F', note: 'Warm' },
              { c: '24°C', f: '75°F', note: 'Hot' },
              { c: '26°C', f: '79°F', note: 'Very hot' },
              { c: '28°C', f: '82°F', note: 'Uncomfortable' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.c}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.f}</p>
                <p className="text-sm text-gray-500 mt-1">{item.note}</p>
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
            <Link href="/37-celsius-to-fahrenheit/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Body Temperature</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
