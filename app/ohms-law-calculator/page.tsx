import { Metadata } from 'next';
import { FiArrowRight, FiZap, FiShield, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Ohm\'s Law Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate voltage, current, resistance, and power using Ohm\'s Law. Free online electrical calculator for engineers and students.',
  keywords: ['ohm\'s law calculator', 'voltage calculator', 'current calculator', 'resistance calculator', 'electrical calculator'],
  openGraph: {
    title: 'Ohm\'s Law Calculator',
    description: 'Calculate voltage, current, resistance, and power instantly',
    type: 'website',
  },
};

export default function OhmsLawCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Ohm's Law Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate voltage, current, resistance, and power using Ohm's Law. 
            Essential tool for electrical engineers, technicians, and students.
          </p>
        </section>

        {/* Calculator Component */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#f59e0b' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive Ohm's Law calculator for you.
                </p>
                <div className="text-sm text-gray-500">
                  V = I × R (Voltage = Current × Resistance)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formula Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Ohm's Law Formulas</h3>
            <p className="section-subtitle">The fundamental relationships in electrical circuits</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">V = I × R</div>
              <p className="text-sm text-gray-600">Voltage = Current × Resistance</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">I = V ÷ R</div>
              <p className="text-sm text-gray-600">Current = Voltage ÷ Resistance</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">R = V ÷ I</div>
              <p className="text-sm text-gray-600">Resistance = Voltage ÷ Current</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">P = V × I</div>
              <p className="text-sm text-gray-600">Power = Voltage × Current</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Calculator Features</h3>
            <p className="section-subtitle">Professional electrical calculation tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Instant Calculation</h4>
              <p className="text-sm text-gray-600">
                Calculate any variable (V, I, R, P) when you know the other two.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Safe Design</h4>
              <p className="text-sm text-gray-600">
                Ensure your circuits operate within safe electrical parameters.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiCalendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Unit Support</h4>
              <p className="text-sm text-gray-600">
                Support for various units: volts, amps, ohms, watts, milliamps, kiloohms.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Engineering Tools</h3>
            <p className="section-subtitle mb-8">
              Check out our other electrical and engineering calculators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/power-calculator/" className="btn btn-secondary">
                <span>Power Calculator</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
