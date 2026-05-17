import { Metadata } from 'next';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Circuit Analysis Calculator (Free & Instant) | ConvertMaster',
  description: 'Analyze DC and AC circuits, calculate node voltages and mesh currents. Free online calculator for electrical engineers.',
  keywords: ['circuit analysis', 'node voltage', 'mesh current', 'electrical circuit', 'circuit solver'],
  openGraph: {
    title: 'Circuit Analysis Calculator',
    description: 'Analyze electrical circuits instantly',
    type: 'website',
  },
};

export default function CircuitAnalysisCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Circuit Analysis Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Analyze DC and AC circuits, calculate node voltages, mesh currents, and circuit parameters. 
            Essential tool for electrical engineers and technicians.
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
                  We're building a comprehensive circuit analysis calculator.
                </p>
                <div className="text-sm text-gray-500">
                  ΣI = 0 (KCL) | ΣV = 0 (KVL)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Circuit Analysis Methods</h3>
            <p className="section-subtitle">Essential circuit solving techniques</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">KCL</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">ΣI = 0</div>
              <p className="text-sm text-gray-600">Kirchhoff's Current Law</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">KVL</h4>
              <div className="text-lg font-bold text-green-600 mb-2">ΣV = 0</div>
              <p className="text-sm text-gray-600">Kirchhoff's Voltage Law</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Node Voltage</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">G·V = I</div>
              <p className="text-sm text-gray-600">Nodal analysis</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mesh Current</h4>
              <div className="text-lg font-bold text-orange-600 mb-2">R·I = V</div>
              <p className="text-sm text-gray-600">Mesh analysis</p>
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
