import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metric or Imperial: Which One is Better? | ConvertMaster',
  description: 'I have lived in countries that use both systems. Here is my honest take on which one makes more sense.',
  keywords: 'metric vs imperial, measurement systems, which is better metric or imperial',
};

export default function MetricVsImperialPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Metric or Imperial: Which One is Better?
          </h1>
          <p className="text-xl text-blue-100">
            I have used both. Here is the honest truth.
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
                I grew up with imperial. Miles, pounds, feet, inches. Made perfect sense because 
                that is what my parents used, what my teachers used, what everyone around me used.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Then I moved to a country that uses metric. At first, everything felt wrong. 
                "It is 25 degrees outside" - is that hot? "The store is 2 kilometers away" - is that far? 
                "I weigh 70 kilos" - is that heavy?
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                But after a few months, I started to get it. And now I have opinions.
              </p>
            </section>

            {/* The Case for Metric */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Metric is Actually Better (Sorry, America)
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">It is All Base-10</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  10 millimeters = 1 centimeter<br/>
                  100 centimeters = 1 meter<br/>
                  1000 meters = 1 kilometer
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  See the pattern? You just move the decimal point. No weird fractions, 
                  no remembering that 12 inches make a foot but 3 feet make a yard but 1760 yards make a mile.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Water Makes It Simple</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  1 liter of water weighs 1 kilogram and fills a 10cm × 10cm × 10cm cube. 
                  Try doing that math with gallons and pounds. You cannot.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">The Whole World Uses It</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Only the US, Liberia, and Myanmar still use imperial officially. 
                  When you travel, work internationally, or buy imported products, 
                  you are doing conversions constantly.
                </p>
              </div>
            </section>

            {/* The Case for Imperial */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                But Imperial Has Its Moments
              </h2>
              <div className="space-y-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Human-Scale Measurements</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A foot is roughly... a foot. An inch is roughly a thumb width. 
                    A mile is about 20 minutes of walking. These are intuitive because 
                    they evolved from actual human use, not scientific ideals.
                  </p>
                </div>
                              </div>
            </section>

            {/* My Verdict */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Honest Verdict
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Metric is better for science, math, and international communication. 
                No question. The base-10 system is just cleaner.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                But imperial feels more... human? I still think of my weight in pounds 
                and my height in feet and inches. Those numbers mean something to me 
                emotionally that kilos and centimeters do not.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The best system is whatever you grew up with, plus the ability to 
                roughly convert when you need to. That is why I built this converter.
              </p>
            </section>

            {/* Quick Reference */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Numbers I Keep Handy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Length</p>
                  <p className="text-gray-600 dark:text-gray-400">1 meter ≈ 3.3 feet (a bit more than a yard)</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Weight</p>
                  <p className="text-gray-600 dark:text-gray-400">1 kg ≈ 2.2 lbs</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Distance</p>
                  <p className="text-gray-600 dark:text-gray-400">1 km ≈ 0.6 miles</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 dark:text-white">Volume</p>
                  <p className="text-gray-600 dark:text-gray-400">1 liter ≈ 1 quart (close enough)</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Stuck Converting?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our converters handle both systems
              </p>
              <Link
                href="/all-converters"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Browse All Converters
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
            <Link href="/blog/understanding-celsius-fahrenheit" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600">Celsius vs Fahrenheit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Temperature scale drama</p>
            </Link>
                        <Link href="/blog" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600">All Articles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse everything</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
