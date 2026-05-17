import { Metadata } from 'next';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Thermodynamics Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate heat transfer, work, and efficiency in thermodynamic systems. Free online calculator for mechanical and chemical engineers.',
  keywords: ['thermodynamics calculator', 'heat transfer', 'entropy', 'enthalpy', 'thermal efficiency'],
  openGraph: {
    title: 'Thermodynamics Calculator',
    description: 'Calculate thermodynamic properties instantly',
    type: 'website',
  },
};

export default function ThermodynamicsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Thermodynamics Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate heat transfer, work, efficiency, and thermodynamic properties. 
            Essential tool for mechanical and chemical engineers.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#f59e0b' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <h1 className="hero-gradient text-4xl font-bold mb-4">Thermodynamics Calculator</h1>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive thermodynamics calculator for thermal systems.
                </p>
                <div className="text-sm text-gray-500">
                  First Law: ΔU = Q - W
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Thermodynamic Calculations</h3>
            <p className="section-subtitle">Key properties and formulas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Heat Transfer</h4>
              <div className="text-xl font-bold text-orange-600 mb-2">Q = mcΔT</div>
              <p className="text-sm text-gray-600">Sensible heat calculation</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Work Done</h4>
              <div className="text-xl font-bold text-blue-600 mb-2">W = PΔV</div>
              <p className="text-sm text-gray-600">PV work in systems</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Efficiency</h4>
              <div className="text-xl font-bold text-green-600 mb-2">η = W/QH</div>
              <p className="text-sm text-gray-600">Thermal efficiency</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ideal Gas</h4>
              <div className="text-xl font-bold text-purple-600 mb-2">PV = nRT</div>
              <p className="text-sm text-gray-600">Equation of state</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Mechanical Tools</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/fluid-mechanics-calculator/" className="btn btn-secondary">
                <span>Fluid Mechanics</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
