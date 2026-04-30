import { Metadata } from 'next';
import { FiArrowRight, FiSettings, FiCheckCircle, FiActivity, FiShield, FiTrendingUp, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Process Calculations (Free & Instant) | ConvertMaster',
  description: 'Calculate material balances, energy balances, and process parameters. Free online calculator for chemical engineers.',
  keywords: ['process calculations', 'material balance', 'energy balance', 'chemical engineering', 'process design'],
  openGraph: {
    title: 'Process Calculations',
    description: 'Calculate chemical process parameters instantly',
    type: 'website',
  },
};

export default function ProcessCalculationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Process Calculations</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate material balances, energy balances, and chemical process parameters. 
            Essential tool for chemical process engineers.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#3b82f6' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive process calculations tool.
                </p>
                <div className="text-sm text-gray-500">
                  Input = Output + Accumulation
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Process Engineering Calculations</h3>
            <p className="section-subtitle">Fundamental process design formulas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Material Balance</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">In = Out</div>
              <p className="text-sm text-gray-600">Mass conservation</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Energy Balance</h4>
              <div className="text-lg font-bold text-green-600 mb-2">ΔH = Q - W</div>
              <p className="text-sm text-gray-600">First law for open systems</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Conversion</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">X = (F-P)/F</div>
              <p className="text-sm text-gray-600">Reactant conversion</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Yield</h4>
              <div className="text-lg font-bold text-orange-600 mb-2">Y = P/F</div>
              <p className="text-sm text-gray-600">Product yield</p>
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
              <a href="/reaction-kinetics/" className="btn btn-secondary">
                <span>Reaction Kinetics</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
