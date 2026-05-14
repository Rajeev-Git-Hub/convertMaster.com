import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiPackage, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Weight Converter - Free Online Tool | Convert kg, lbs, ounces, grams',
  description: 'Free online weight converter. Convert between kilograms, pounds, ounces, grams, tons. Accurate calculations, conversion tables, and practical examples for everyday use.',
  keywords: 'weight converter, kg to lbs, pounds to ounces, grams to kg, ton to kg, weight conversion, mass converter, online tool',
  openGraph: {
    title: 'Weight Converter - Free Online Tool',
    description: 'Convert between different units of weight and mass instantly',
    type: 'website',
  },
};

export default function WeightConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="h-16" />
          <h1 className="hero-gradient text-4xl font-bold mb-4">Weight Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between kilograms, pounds, ounces, grams, and tons
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="weight" defaultFrom="kg" defaultTo="lbs" />
          </div>
        </section>

        {/* Understanding Weight Conversion */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Understanding Weight Conversion</h3>
            <p className="section-subtitle">Metric vs Imperial systems and their applications</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Metric vs Imperial Systems</h4>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Metric System (International):</strong> Based on the kilogram, used worldwide in science and most countries. 
                  Available units: Kilogram (kg), Gram (g), Milligram (mg), Microgram (g), Nanogram (ng), Metric Ton.
                </p>
                <p>
                  <strong>Imperial System (US Customary):</strong> Used primarily in the United States. 
                  Available units: Pound (lbs), Ounce (oz), US Ton.
                </p>
                <p>
                  Understanding both systems is essential for international trade, fitness, and scientific applications.
                </p>
              </div>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Applications</h4>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                    <FiPackage className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong>Fitness & Health:</strong> Tracking body weight, gym weights, and supplement measurements
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                    <FiPackage className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong>Shipping & Logistics:</strong> Calculating shipping costs and cargo weights
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                    <FiPackage className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong>Science & Medicine:</strong> Laboratory measurements and medical dosages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metric Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Weight Unit Definitions</h3>
            <p className="section-subtitle">Understanding measurement standards and applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Kilogram (kg)</h5>
              <p className="text-sm text-gray-600">The base unit of mass in the International System of Units (SI). 1 kg = 1,000 grams. Commonly used for measuring body weight, food items, and commercial goods.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Gram (g)</h5>
              <p className="text-sm text-gray-600">One thousandth of a kilogram. Used for measuring small quantities of food, precious metals, and scientific samples. 1 g = 0.001 kg.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Milligram (mg)</h5>
              <p className="text-sm text-gray-600">One thousandth of a gram. Commonly used in medicine for measuring drug dosages and in nutrition for vitamin and mineral content. 1 mg = 0.001 g.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Microgram (g)</h5>
              <p className="text-sm text-gray-600">One millionth of a gram. Used for extremely small measurements such as trace nutrients, pollutants, and pharmaceutical compounds. 1 g = 0.000001 g.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Nanogram (ng)</h5>
              <p className="text-sm text-gray-600">One billionth of a gram. Used in molecular biology, genetics (DNA/RNA measurements), and ultra-sensitive chemical analysis. 1 ng = 0.000000001 g.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Metric Ton</h5>
              <p className="text-sm text-gray-600">Equal to 1,000 kilograms or 1 million grams. Used for measuring large quantities such as cargo, industrial materials, and vehicle weights. Also known as tonne.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">US Ton</h5>
              <p className="text-sm text-gray-600">Equal to 2,000 pounds or approximately 907 kilograms. Used in the United States for measuring large quantities of materials and cargo.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Pound (lbs)</h5>
              <p className="text-sm text-gray-600">Equal to 453.592 grams. Used primarily in the United States and UK for measuring body weight, food products, and commercial goods.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Ounce (oz)</h5>
              <p className="text-sm text-gray-600">Equal to 28.3495 grams. Used for measuring smaller quantities of food, precious metals, and postal items in countries using imperial units.</p>
            </div>
          </div>
        </section>

        {/* Conversion Tables */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Weight Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Kilograms to Pounds</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 kg = 2.20462 lbs</li>
                <li>5 kg = 11.0231 lbs</li>
                <li>10 kg = 22.0462 lbs</li>
                <li>50 kg = 110.231 lbs</li>
                <li>100 kg = 220.462 lbs</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Pounds to Kilograms</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 lb = 0.453592 kg</li>
                <li>5 lbs = 2.26796 kg</li>
                <li>10 lbs = 4.53592 kg</li>
                <li>50 lbs = 22.6796 kg</li>
                <li>100 lbs = 45.3592 kg</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Grams to Ounces</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 g = 0.035274 oz</li>
                <li>28.35 g = 1 oz</li>
                <li>100 g = 3.5274 oz</li>
                <li>250 g = 8.8185 oz</li>
                <li>500 g = 17.637 oz</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Conversion Examples</h3>
            <p className="section-subtitle">Practical applications for everyday use</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Kitchen Conversions</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Flour:</strong> 500g = 1.1 lbs = 17.6 oz</p>
                <p><strong>Sugar:</strong> 250g = 0.55 lbs = 8.8 oz</p>
                <p><strong>Butter:</strong> 225g = 0.5 lbs = 8 oz (1 stick)</p>
                <p><strong>Rice:</strong> 1kg = 2.2 lbs = 35.3 oz</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Fitness Conversions</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Dumbbells:</strong> 10 lbs = 4.5 kg</p>
                <p><strong>Plates:</strong> 45 lbs = 20.4 kg</p>
                <p><strong>Body weight:</strong> 150 lbs = 68 kg</p>
                <p><strong>Protein powder:</strong> 5 lbs = 2.27 kg</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Shipping Examples</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Package:</strong> 2 lbs = 0.91 kg</p>
                <p><strong>Letter:</strong> 1 oz = 28.35 g</p>
                <p><strong>Box:</strong> 10 lbs = 4.54 kg</p>
                <p><strong>Pallet:</strong> 1 ton = 907.185 kg</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiPackage className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Baby Weight</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Birth weight:</strong> 7.5 lbs = 3.4 kg</p>
                <p><strong>6 months:</strong> 18 lbs = 8.2 kg</p>
                <p><strong>1 year:</strong> 22 lbs = 10 kg</p>
                <p><strong>Formula:</strong> 8 oz = 227 g per feeding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Weight Units</h3>
            <p className="section-subtitle">Step-by-step guide for accurate conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Identify Units</h4>
              <p className="text-sm text-gray-600">Know your starting unit (kg, lbs, oz, g) and target unit</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Conversion Factor</h4>
              <p className="text-sm text-gray-600">Multiply by the correct conversion rate</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Calculate</h4>
              <p className="text-sm text-gray-600">Perform the multiplication or division</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#f59e0b' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Verify</h4>
              <p className="text-sm text-gray-600">Check your result makes sense</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about weight conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many pounds are in a kilogram?</h4>
              <p className="text-sm text-gray-600">There are 2.20462 pounds in one kilogram. This is the standard conversion used worldwide.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between weight and mass?</h4>
              <p className="text-sm text-gray-600">Mass is the amount of matter in an object (measured in kg), while weight is the force of gravity on that mass (measured in newtons). In everyday use, we use weight units for both.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do different countries use different weight systems?</h4>
              <p className="text-sm text-gray-600">The metric system was developed in France during the French Revolution and adopted by most countries. The US retained the imperial system due to historical reasons and industrial inertia.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this weight converter?</h4>
              <p className="text-sm text-gray-600">Our converter provides results with up to 10 decimal places, using standard international conversion factors for professional accuracy.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Convert More Units?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free conversion tools for all your measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/length-converter/"
                className="btn btn-primary"
              >
                <span>Length Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/temperature-converter/"
                className="btn btn-secondary"
              >
                <span>Temperature Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/all-converters/"
                className="btn btn-secondary"
              >
                <span>All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
