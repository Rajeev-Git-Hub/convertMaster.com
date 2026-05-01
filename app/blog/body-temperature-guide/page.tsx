import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Normal Body Temperature: When to Worry | ConvertMaster',
  description: 'I checked my temperature and panicked. Turns out normal body temp varies more than you think.',
  keywords: 'body temperature, normal temperature, fever, when to worry about temperature',
};

export default function BodyTemperatureGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Normal Body Temperature: When to Worry
          </h1>
          <p className="text-xl text-red-100">
            I thought 98.6°F was normal for everyone. I was wrong.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What is Actually Normal?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I always thought normal body temperature was 98.6°F (37°C). That is what we learned in school, right? 
                But when I started tracking my own temperature, I noticed it was usually around 97.5°F. 
                I thought something was wrong with me.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Turns out, "normal" is more like a range. Anything from 97°F to 99°F can be perfectly fine, 
                depending on the person and time of day.
              </p>
            </section>

            {/* Temperature Ranges Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Body Temperature Ranges
              </h2>
              <div className="overflow-x-auto max-w-full">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-4 font-semibold text-gray-900 dark:text-white rounded-tl-lg">Condition</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white">Celsius</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white rounded-tr-lg">Fahrenheit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Hypothermia</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Below 35.0°C</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Below 95.0°F</td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      <td className="p-4 text-green-700 dark:text-green-300 font-medium">Normal</td>
                      <td className="p-4 text-green-700 dark:text-green-300">36.1°C – 37.2°C</td>
                      <td className="p-4 text-green-700 dark:text-green-300">97.0°F – 99.0°F</td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                      <td className="p-4 text-yellow-700 dark:text-yellow-300 font-medium">Low-Grade Fever</td>
                      <td className="p-4 text-yellow-700 dark:text-yellow-300">37.3°C – 38.0°C</td>
                      <td className="p-4 text-yellow-700 dark:text-yellow-300">99.1°F – 100.4°F</td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-900/20">
                      <td className="p-4 text-orange-700 dark:text-orange-300 font-medium">Fever</td>
                      <td className="p-4 text-orange-700 dark:text-orange-300">38.1°C – 39.4°C</td>
                      <td className="p-4 text-orange-700 dark:text-orange-300">100.5°F – 102.9°F</td>
                    </tr>
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      <td className="p-4 text-red-700 dark:text-red-300 font-medium">High Fever</td>
                      <td className="p-4 text-red-700 dark:text-red-300">Above 39.4°C</td>
                      <td className="p-4 text-red-700 dark:text-red-300">Above 102.9°F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Fever Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding Fever
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                A fever is your body's natural response to infection or illness. It typically indicates 
                that your immune system is working to fight off bacteria, viruses, or other pathogens.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  When to Seek Medical Attention
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Temperature above 103°F (39.4°C) in adults</li>
                  <li>Temperature above 100.4°F (38°C) in infants under 3 months</li>
                  <li>Fever lasting more than 3 days</li>
                  <li>Fever accompanied by severe headache, stiff neck, or confusion</li>
                  <li>Fever with difficulty breathing or chest pain</li>
                </ul>
              </div>
            </section>

            {/* Hypothermia Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Hypothermia Warning Signs
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Hypothermia occurs when your body loses heat faster than it can produce it, causing 
                a dangerously low body temperature. It is a medical emergency.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">
                    Mild Hypothermia
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Shivering</li>
                    <li>• Cold, pale skin</li>
                    <li>• Poor coordination</li>
                    <li>• Slow breathing</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">
                    Severe Hypothermia
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• No shivering</li>
                    <li>• Confusion / Drowsiness</li>
                    <li>• Weak pulse</li>
                    <li>• Loss of consciousness</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conversion Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Conversion Formula
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
                <p className="text-lg text-center text-gray-800 dark:text-gray-200 mb-4">
                  <strong>Celsius to Fahrenheit:</strong> (°C × 9/5) + 32 = °F
                </p>
                <p className="text-lg text-center text-gray-800 dark:text-gray-200">
                  <strong>Fahrenheit to Celsius:</strong> (°F − 32) × 5/9 = °C
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need to Convert Temperatures?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Use our free temperature converter for instant, accurate results
              </p>
              <Link
                href="/celsius-to-fahrenheit"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Try Temperature Converter
              </Link>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
