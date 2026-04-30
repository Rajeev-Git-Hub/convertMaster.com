import { Metadata } from 'next';
import { FiArrowRight, FiZap, FiCheckCircle, FiActivity, FiShield, FiTrendingUp, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Power Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate electrical power, energy consumption, and efficiency. Free online calculator for electrical engineers and technicians.',
  keywords: ['power calculator', 'watt calculator', 'energy calculator', 'electrical power', 'power consumption'],
  openGraph: {
    title: 'Power Calculator',
    description: 'Calculate electrical power and energy instantly',
    type: 'website',
  },
};

export default function PowerCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Power Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate electrical power, energy consumption, and efficiency ratings. 
            Essential tool for electrical engineers and energy managers.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#06b6d4' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive power calculator for electrical systems.
                </p>
                <div className="text-sm text-gray-500">
                  P = V × I (Power = Voltage × Current)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Power Formulas</h3>
            <p className="section-subtitle">Fundamental electrical power calculations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-cyan-600 mb-2">P = V × I</div>
              <p className="text-sm text-gray-600">DC Power (Watts)</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">P = I² × R</div>
              <p className="text-sm text-gray-600">Power via Resistance</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">P = V² ÷ R</div>
              <p className="text-sm text-gray-600">Power via Voltage</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Electrical Tools</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/ohms-law-calculator/" className="btn btn-secondary">
                <span>Ohm's Law</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
