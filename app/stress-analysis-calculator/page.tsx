import { Metadata } from 'next';
import { FiArrowRight, FiTool, FiCheckCircle, FiActivity, FiShield, FiTrendingUp, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Stress Analysis Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate bending stress, shear stress, and deflection in beams. Free online calculator for mechanical and civil engineers.',
  keywords: ['stress analysis', 'beam stress', 'shear stress', 'bending moment', 'structural analysis'],
  openGraph: {
    title: 'Stress Analysis Calculator',
    description: 'Calculate structural stresses and deflections instantly',
    type: 'website',
  },
};

export default function StressAnalysisCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Stress Analysis Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate bending stress, shear stress, and deflection in beams and structural members. 
            Essential tool for mechanical and civil engineers.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#10b981' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculator Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive stress analysis calculator for structural design.
                </p>
                <div className="text-sm text-gray-500">
                  σ = My/I (Bending Stress)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Stress Analysis Formulas</h3>
            <p className="section-subtitle">Fundamental structural mechanics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bending Stress</h4>
              <div className="text-lg font-bold text-green-600 mb-2">σ = My/I</div>
              <p className="text-sm text-gray-600">Flexural stress in beams</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Shear Stress</h4>
              <div className="text-lg font-bold text-blue-600 mb-2">τ = VQ/It</div>
              <p className="text-sm text-gray-600">Transverse shear</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Axial Stress</h4>
              <div className="text-lg font-bold text-orange-600 mb-2">σ = P/A</div>
              <p className="text-sm text-gray-600">Normal stress</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Deflection</h4>
              <div className="text-lg font-bold text-purple-600 mb-2">δ = PL³/3EI</div>
              <p className="text-sm text-gray-600">Beam deflection</p>
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
              <a href="/machine-design-calculator/" className="btn btn-secondary">
                <span>Machine Design</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
