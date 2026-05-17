import { Metadata } from 'next';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Fluid Mechanics Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate flow rate, pressure drop, Reynolds number, and fluid properties. Free online calculator for mechanical and chemical engineers.',
  keywords: ['fluid mechanics calculator', 'flow rate', 'reynolds number', 'pressure drop', 'fluid dynamics'],
  openGraph: {
    title: 'Fluid Mechanics Calculator',
    description: 'Calculate fluid properties and flow parameters instantly',
    type: 'website',
  },
};

export default function FluidMechanicsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Fluid Mechanics Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate flow rate, pressure drop, Reynolds number, and fluid properties. 
            Essential tool for mechanical, chemical, and civil engineers.
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
                  We're building a comprehensive fluid mechanics calculator.
                </p>
                <div className="text-sm text-gray-500">
                  Re = (ρ × v × D) / μ
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Fluid Mechanics Calculations</h3>
            <p className="section-subtitle">Essential fluid flow formulas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reynolds Number</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">Re = ρvD/μ</div>
              <p className="text-sm text-gray-600">Flow regime determination</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Flow Rate</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">Q = A × v</div>
              <p className="text-sm text-gray-600">Volumetric flow rate</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bernoulli</h4>
              <div className="text-lg font-bold text-green-600 mb-2">P + ½ρv² + ρgh</div>
              <p className="text-sm text-gray-600">Energy conservation</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pressure Drop</h4>
              <div className="text-lg font-bold text-orange-600 mb-2">ΔP = f × L/D × ρv²/2</div>
              <p className="text-sm text-gray-600">Darcy-Weisbach equation</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Engineering Tools</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/thermodynamics-calculator/" className="btn btn-secondary">
                <span>Thermodynamics</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
