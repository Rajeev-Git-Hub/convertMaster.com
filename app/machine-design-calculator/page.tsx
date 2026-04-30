import { Metadata } from 'next';
import { FiArrowRight, FiCpu, FiCheckCircle, FiActivity, FiShield, FiTrendingUp, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Machine Design Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate gear ratios, belt drives, bearing loads, and machine elements. Free online calculator for mechanical engineers.',
  keywords: ['machine design', 'gear calculator', 'belt drive', 'bearing load', 'mechanical design'],
  openGraph: {
    title: 'Machine Design Calculator',
    description: 'Calculate machine element specifications instantly',
    type: 'website',
  },
};

export default function MachineDesignCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Machine Design Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate gear ratios, belt drives, bearing loads, and machine element specifications. 
            Essential tool for mechanical design engineers.
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
                  We're building a comprehensive machine design calculator.
                </p>
                <div className="text-sm text-gray-500">
                  Gear Ratio = N₂/N₁ = D₁/D₂
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Machine Design Calculations</h3>
            <p className="section-subtitle">Essential mechanical design formulas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Gear Ratio</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">G = N₂/N₁</div>
              <p className="text-sm text-gray-600">Speed ratio</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Belt Velocity</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">v = πDN/60</div>
              <p className="text-sm text-gray-600">Belt speed m/s</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bearing Life</h4>
              <div className="text-lg font-bold text-green-600 mb-2">L₁₀ = (C/P)³</div>
              <p className="text-sm text-gray-600">Rated bearing life</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Torque</h4>
              <div className="text-lg font-bold text-orange-600 mb-2">T = P/ω</div>
              <p className="text-sm text-gray-600">Power transmission</p>
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
              <a href="/stress-analysis-calculator/" className="btn btn-secondary">
                <span>Stress Analysis</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
