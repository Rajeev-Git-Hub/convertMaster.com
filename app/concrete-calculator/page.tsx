import { Metadata } from 'next';
import { FiArrowRight, FiLayers, FiShield, FiTrendingUp, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Concrete Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate concrete volume, mix ratios, and reinforcement requirements. Free online calculator for construction and civil engineering.',
  keywords: ['concrete calculator', 'concrete volume', 'mix ratio', 'construction calculator', 'civil engineering'],
  openGraph: {
    title: 'Concrete Calculator',
    description: 'Calculate concrete volume and mix ratios instantly',
    type: 'website',
  },
};

export default function ConcreteCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Concrete Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate concrete volume, mix ratios, and reinforcement requirements. 
            Essential tool for construction projects and civil engineers.
          </p>
        </section>

        {/* Calculator Component */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#ef4444' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive concrete calculator for construction projects.
                </p>
                <div className="text-sm text-gray-500">
                  Volume = Length × Width × Height
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mix Ratios */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Standard Concrete Mix Ratios</h3>
            <p className="section-subtitle">Common mix proportions by application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">M10 - Lean Mix</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">1:3:6</div>
              <p className="text-sm text-gray-600">Cement:Sand:Aggregate</p>
              <p className="text-xs text-gray-500 mt-2">For non-structural work</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">M20 - Standard</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">1:1.5:3</div>
              <p className="text-sm text-gray-600">Cement:Sand:Aggregate</p>
              <p className="text-xs text-gray-500 mt-2">For general construction</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">M25 - High Strength</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">1:1:2</div>
              <p className="text-sm text-gray-600">Cement:Sand:Aggregate</p>
              <p className="text-xs text-gray-500 mt-2">For heavy structures</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Calculator Features</h3>
            <p className="section-subtitle">Complete concrete calculation tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiLayers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Volume Calculation</h4>
              <p className="text-sm text-gray-600">
                Calculate concrete volume for slabs, columns, and beams.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiCalendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mix Design</h4>
              <p className="text-sm text-gray-600">
                Calculate cement, sand, and aggregate quantities.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Reinforcement</h4>
              <p className="text-sm text-gray-600">
                Calculate steel reinforcement requirements.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#f59e0b' }}>
                <FiTrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cost Estimate</h4>
              <p className="text-sm text-gray-600">
                Estimate material costs for your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Engineering Tools</h3>
            <p className="section-subtitle mb-8">
              Check out our other civil and mechanical engineering calculators
            </p>
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
