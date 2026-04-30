import { Metadata } from 'next';
import { FiArrowRight, FiTool, FiCheckCircle, FiActivity, FiShield, FiZap, FiCalendar, FiLayers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Resistor Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate resistor color codes, values, and specifications. Free online electronics calculator for engineers and hobbyists.',
  keywords: ['resistor calculator', 'color code calculator', 'resistor value', 'electronics calculator', 'LED resistor'],
  openGraph: {
    title: 'Resistor Calculator',
    description: 'Calculate resistor values and color codes instantly',
    type: 'website',
  },
};

export default function ResistorCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Resistor Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate resistor color codes, values, and LED series resistors. 
            Essential tool for electronics engineers and hobbyists.
          </p>
        </section>

        {/* Calculator Component */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#3b82f6' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive resistor calculator with color code support.
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-8 rounded bg-yellow-500"></div>
                  <div className="w-8 h-8 rounded bg-purple-500"></div>
                  <div className="w-8 h-8 rounded bg-red-500"></div>
                  <div className="w-8 h-8 rounded bg-yellow-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Calculator Features</h3>
            <p className="section-subtitle">Complete resistor calculation tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiLayers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Color Code Decoder</h4>
              <p className="text-sm text-gray-600">
                Decode 4, 5, and 6-band resistor color codes.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiTool className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">LED Resistor</h4>
              <p className="text-sm text-gray-600">
                Calculate series resistor values for LEDs.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiCalendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Parallel/Series</h4>
              <p className="text-sm text-gray-600">
                Calculate total resistance for resistor networks.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#f59e0b' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Power Rating</h4>
              <p className="text-sm text-gray-600">
                Calculate power dissipation and required wattage.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Electronics Tools</h3>
            <p className="section-subtitle mb-8">
              Check out our other electronics and engineering calculators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/ohms-law-calculator/" className="btn btn-secondary">
                <span>Ohm's Law Calculator</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
