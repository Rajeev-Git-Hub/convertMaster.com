import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Celsius vs Fahrenheit: What is the Difference? | ConvertMaster',
  description: 'Ever wondered why some countries use Celsius and others use Fahrenheit? I break it down simply.',
  keywords: 'celsius vs fahrenheit, temperature scales, why different temperature systems',
};

export default function CelsiusVsFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Celsius vs Fahrenheit: What is the Difference?
          </h1>
          <p className="text-xl text-orange-100">
            Why does the US use a different system than everyone else?
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I grew up with Fahrenheit. 90°F meant hot summer day, 32°F meant freezing, 212°F meant boiling water. 
                Made perfect sense to me.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Then I traveled to Europe and saw weather forecasts saying 25°C. Is that hot? Cold? 
                I had no idea. I kept having to ask people "What is that in real temperature?"
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Here is what I learned about why we have two systems and how to actually think in both.
              </p>
            </section>

            {/* The Basics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Quick Conversion Trick
              </h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-900 dark:text-white mb-2">
                  <strong>Celsius to Fahrenheit:</strong> Double it and add 30
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  20°C × 2 + 30 = 70°F (actual: 68°F, close enough)
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-900 dark:text-white mb-2">
                  <strong>Fahrenheit to Celsius:</strong> Subtract 30 and halve it
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  70°F - 30 = 40, ÷ 2 = 20°C (actual: 21°C, close enough)
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                This gets you within a couple degrees. Good enough for weather.
              </p>
            </section>

            {/* Reference Points */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Temperatures I Memorized
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Water Freezes</p>
                  <p className="text-gray-600 dark:text-gray-400">0°C = 32°F</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Room Temperature</p>
                  <p className="text-gray-600 dark:text-gray-400">20°C = 68°F</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Hot Summer Day</p>
                  <p className="text-gray-600 dark:text-gray-400">30°C = 86°F</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Water Boils</p>
                  <p className="text-gray-600 dark:text-gray-400">100°C = 212°F</p>
                </div>
              </div>
            </section>

            {/* Why Two Systems */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Does the US Still Use Fahrenheit?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Short answer: We tried to switch in the 1970s. People hated it. 
                There were protests. Literally protests about temperature.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                The rest of the world uses Celsius because it is simpler for science. 
                Water freezes at 0, boils at 100. Nice round numbers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                But if you grew up with Fahrenheit, Celsius feels wrong. 
                37°C sounds cold, but it is body temperature. 
                100°F sounds hot, and it is. The numbers just match the feeling better for weather.
              </p>
            </section>

            {/* Which is Better */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Which One is Actually Better?
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Celsius Wins For:</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Science and math (water-based scale)</li>
                    <li>International travel</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Fahrenheit Wins For:</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Weather (0-100 covers most human experience)</li>
                    <li>Everyday "feel" (higher numbers = hotter)</li>
                    <li>Fine-grained control (more degrees between freezing and boiling)</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                Honestly? Use whatever you grew up with. Just learn the rough conversions so you 
                do not panic when you see 30°C and think it is cold.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Exact Numbers?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our converter handles both systems instantly
              </p>
              <Link
                href="/celsius-to-fahrenheit"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg"
              >
                Try Temperature Converter
              </Link>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/body-temperature-guide" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600">Body Temperature Guide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">What is actually normal?</p>
            </Link>
            <Link href="/blog/metric-vs-imperial-systems" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600">Metric vs Imperial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">The bigger picture</p>
            </Link>
            <Link href="/blog" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600">All Articles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse everything</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
