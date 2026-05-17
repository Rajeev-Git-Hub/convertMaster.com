import { Metadata } from 'next';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Fluid Flow Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate flow rate, pressure drop, pipe sizing, and pump requirements. Free online calculator for chemical and mechanical engineers.',
  keywords: ['fluid flow calculator', 'pipe flow', 'pressure drop', 'pump sizing', 'flow rate'],
  openGraph: {
    title: 'Fluid Flow Calculator',
    description: 'Calculate fluid flow parameters for piping systems',
    type: 'website',
  },
};

export default function FluidFlowCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Fluid Flow Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate flow rate, pressure drop, pipe sizing, and pump requirements. 
            Essential tool for chemical and process engineers.
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
                  We're building a comprehensive fluid flow calculator for piping systems.
                </p>
                <div className="text-sm text-gray-500">
                  ΔP = f(L/D)(ρv²/2)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Fluid Flow Calculations</h3>
            <p className="section-subtitle">Essential piping system formulas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Darcy-Weisbach</h4>
              <div className="text-sm font-bold text-cyan-600 mb-2">ΔP = f(L/D)(ρv²/2)</div>
              <p className="text-sm text-gray-600">Pressure drop in pipes</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuity</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">A₁v₁ = A₂v₂</div>
              <p className="text-sm text-gray-600">Mass conservation</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Hagen-Poiseuille</h4>
              <div className="text-sm font-bold text-green-600 mb-2">ΔP = 32μLv/D²</div>
              <p className="text-sm text-gray-600">Laminar flow</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pump Power</h4>
              <div className="text-lg font-bold text-orange-600 mb-2">P = ρgQH</div>
              <p className="text-sm text-gray-600">Hydraulic power</p>
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
              <a href="/process-calculations/" className="btn btn-secondary">
                <span>Process Calculations</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
