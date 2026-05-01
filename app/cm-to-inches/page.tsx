import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'CM to Inches Converter – Convert Centimeters to Inches | Free Tool',
  description: 'Free CM to inches converter. Convert centimeters to inches instantly with accurate results. Learn the conversion formula, see common conversions, and understand when to use each unit. Perfect for measurements, screens, and printing.',
  keywords: 'cm to inches, centimeters to inches, cm to in, convert cm to inches, length conversion, 1 cm to inches, how many inches in a centimeter',
  openGraph: {
    title: 'CM to Inches Converter – Convert Centimeters to Inches',
    description: 'Convert centimeters to inches instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function CmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              CM to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Convert centimeters to inches instantly. 1 cm = 0.3937 inches.
            </p>
            <div className="max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="centimeter" defaultTo="inch" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding CM to Inches Conversion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting centimeters (cm) to inches is essential for anyone working with measurements across different systems. 
              Whether you are buying furniture online, measuring your height, working on DIY projects, or designing graphics, 
              knowing how to convert between metric and imperial length units is invaluable.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Centimeters are part of the metric system and are used by most countries worldwide. Inches belong to the imperial 
              system and are primarily used in the United States, United Kingdom, and Canada. Understanding both units helps you 
              navigate international shopping, technical specifications, and everyday measurements with ease.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free cm to inches converter provides instant, accurate results. Simply enter your measurement in centimeters, 
              and see the equivalent in inches immediately. Perfect for quick conversions without any calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Formula */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            CM to Inches Conversion Formula
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                inches = centimeters × 0.3937
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Or divide by 2.54: inches = centimeters ÷ 2.54
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common CM to Inches Conversions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { cm: '1 cm', inch: '0.39 in' },
              { cm: '5 cm', inch: '1.97 in' },
              { cm: '10 cm', inch: '3.94 in' },
              { cm: '15 cm', inch: '5.91 in' },
              { cm: '20 cm', inch: '7.87 in' },
              { cm: '25 cm', inch: '9.84 in' },
              { cm: '30 cm', inch: '11.81 in' },
              { cm: '50 cm', inch: '19.69 in' },
              { cm: '100 cm', inch: '39.37 in' },
              { cm: '150 cm', inch: '59.06 in' },
              { cm: '200 cm', inch: '78.74 in' },
              { cm: '250 cm', inch: '98.43 in' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-700">{item.cm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.inch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Practical Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📏 Measuring Height</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A person who is 175 cm tall is approximately 5 feet 9 inches (68.9 inches).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📐 Screen Size</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A 27 cm laptop screen is about 10.6 inches diagonally.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🖼️ Picture Frames</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A 30 × 40 cm photo frame equals approximately 11.8 × 15.7 inches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How many inches are in 1 cm?</h3>
              <p className="text-gray-600 dark:text-gray-300">1 centimeter equals approximately 0.3937 inches, or about 0.4 inches when rounded.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is the formula to convert cm to inches?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply centimeters by 0.3937, or divide by 2.54. Both give the same result.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How many cm are in an inch?</h3>
              <p className="text-gray-600 dark:text-gray-300">1 inch equals exactly 2.54 centimeters. This is the standard conversion factor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            When to Convert CM to Inches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Body Measurements</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Converting height, waist, and clothing sizes when shopping internationally or following fitness plans.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🛋️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Furniture Shopping</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check if furniture dimensions fit your space when buying from international retailers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Electronics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                TV screens, monitors, and tablets are often listed in inches, but specs may be in centimeters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Length Converters</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Explore more length conversion tools for all your measurement needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/inches-to-cm/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Inches to CM
            </Link>
            <Link href="/meters-to-feet/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              Meters to Feet
            </Link>
            <Link href="/mm-to-inches/" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md">
              MM to Inches
            </Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md">
              All Length Converters
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About CM to Inches Conversion
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Centimeters and inches are both units of length measurement used worldwide. The centimeter is part of the metric system 
            and equals one-hundredth of a meter. The inch is part of the imperial system and equals exactly 2.54 centimeters. 
            Understanding how to convert between these units is essential for anyone working with measurements in different contexts.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The conversion formula is straightforward: multiply centimeters by 0.3937 to get inches, or divide by 2.54. 
            For quick mental calculations, you can approximate by dividing by 2.5. While this gives slightly less precise results, 
            it is accurate enough for most everyday situations like estimating furniture sizes or checking screen dimensions.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our cm to inches converter uses the exact conversion factor of 0.393700787 inches per centimeter, ensuring 
            precision for all your conversion needs. Whether you are a student, professional, or simply someone who 
            needs to convert measurements occasionally, our free tool provides instant, accurate results every time.
          </p>
        </div>
      </section>
    </div>
  );
}
