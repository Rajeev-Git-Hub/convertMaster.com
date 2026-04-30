import { Metadata } from 'next';
import { FiArrowRight, FiCpu, FiCheckCircle, FiActivity, FiShield, FiTrendingUp, FiCalendar, FiTool, FiZap } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Electronics Tools (Free & Instant) | ConvertMaster',
  description: 'Collection of electronics calculators including op-amp, filter design, and digital logic tools. Free online calculators for electronics engineers.',
  keywords: ['electronics tools', 'op amp calculator', 'filter design', 'digital logic', 'electronics engineering'],
  openGraph: {
    title: 'Electronics Tools',
    description: 'Comprehensive electronics engineering calculators',
    type: 'website',
  },
};

export default function ElectronicsToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Electronics Tools</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Collection of electronics calculators including op-amp, filter design, digital logic, and signal processing tools. 
            Essential for electronics engineers and hobbyists.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="text-center py-12">
                <div className="icon-box icon-box-primary mx-auto mb-4" style={{ background: '#10b981' }}>
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tools Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're building a comprehensive collection of electronics tools.
                </p>
                <div className="text-sm text-gray-500">
                  Op-amps | Filters | Digital Logic | Signal Processing
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Electronics Tools Collection</h3>
            <p className="section-subtitle">Upcoming calculators and tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiTool className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Op-Amp Calculator</h4>
              <p className="text-sm text-gray-600">
                Inverting, non-inverting, and differential amplifier configurations.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiActivity className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Filter Design</h4>
              <p className="text-sm text-gray-600">
                RC, RL, and active filter component calculations.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiCpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Digital Logic</h4>
              <p className="text-sm text-gray-600">
                Boolean algebra, Karnaugh maps, and logic gate tools.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#f59e0b' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Signal Processing</h4>
              <p className="text-sm text-gray-600">
                ADC/DAC calculations, sampling theory, and FFT tools.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Electronics Tools</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/engineering-calculators/" className="btn btn-primary">
                <span>All Engineering Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="/resistor-calculator/" className="btn btn-secondary">
                <span>Resistor Calculator</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
