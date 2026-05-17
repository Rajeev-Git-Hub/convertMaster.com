import { Metadata } from 'next';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Chemical Thermodynamics Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate enthalpy, entropy, Gibbs free energy, and chemical equilibrium. Free online calculator for chemical engineers.',
  keywords: ['chemical thermodynamics', 'enthalpy', 'entropy', 'gibbs free energy', 'chemical equilibrium'],
  openGraph: {
    title: 'Chemical Thermodynamics Calculator',
    description: 'Calculate thermodynamic properties for chemical systems',
    type: 'website',
  },
};

export default function ChemicalThermodynamicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Chemical Thermodynamics</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate enthalpy, entropy, Gibbs free energy, and chemical equilibrium constants. 
            Essential tool for chemical reaction engineering.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#ef4444' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive chemical thermodynamics calculator.
                </p>
                <div className="text-sm text-gray-500">
                  ΔG = ΔH - TΔS
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Chemical Thermodynamics</h3>
            <p className="section-subtitle">Essential thermodynamic relationships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Gibbs Energy</h4>
              <div className="text-lg font-bold text-red-600 mb-2">ΔG = ΔH - TΔS</div>
              <p className="text-sm text-gray-600">Spontaneity criterion</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Equilibrium</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">K = e^(-ΔG°/RT)</div>
              <p className="text-sm text-gray-600">Equilibrium constant</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Van't Hoff</h4>
              <div className="text-lg font-bold text-green-600 mb-2">ln(K₂/K₁) = -ΔH°/R(1/T₂-1/T₁)</div>
              <p className="text-sm text-gray-600">Temperature dependence</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reaction Quotient</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">Q = Πaᵢ^νᵢ</div>
              <p className="text-sm text-gray-600">Activity product</p>
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
