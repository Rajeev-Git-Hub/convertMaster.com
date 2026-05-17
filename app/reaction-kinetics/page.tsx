import { Metadata } from 'next';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Reaction Kinetics Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate reaction rates, rate constants, and conversion for chemical reactions. Free online calculator for chemical engineers.',
  keywords: ['reaction kinetics', 'rate constant', 'conversion', 'reaction rate', 'chemical reactor'],
  openGraph: {
    title: 'Reaction Kinetics Calculator',
    description: 'Calculate chemical reaction kinetics parameters',
    type: 'website',
  },
};

export default function ReactionKineticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Reaction Kinetics</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate reaction rates, rate constants, activation energy, and reactor design parameters. 
            Essential tool for chemical reaction engineering.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#8b5cf6' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive reaction kinetics calculator.
                </p>
                <div className="text-sm text-gray-500">
                  -rA = k·Cₐⁿ
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Reaction Kinetics</h3>
            <p className="section-subtitle">Essential rate equations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Rate Law</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">-rA = k·Cₐⁿ</div>
              <p className="text-sm text-gray-600">Power law model</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Arrhenius</h4>
              <div className="text-sm font-bold text-blue-600 mb-2">k = A·e^(-Ea/RT)</div>
              <p className="text-sm text-gray-600">Temperature dependence</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">1st Order</h4>
              <div className="text-lg font-bold text-green-600 mb-2">ln(1-X) = -kt</div>
              <p className="text-sm text-gray-600">Integrated rate law</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2nd Order</h4>
              <div className="text-sm font-bold text-orange-600 mb-2">X/(1-X) = kCₐ₀t</div>
              <p className="text-sm text-gray-600">Integrated rate law</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Chemical Tools</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/chemical-thermodynamics/" className="btn btn-secondary">
                <span>Chemical Thermodynamics</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
