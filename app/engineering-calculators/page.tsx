import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiCpu, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiTool, FiGlobe, FiAward } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Engineering Calculators - Free Tools for Engineers & Students',
  description: 'Free engineering calculators for civil, mechanical, electrical, and chemical engineers. Calculate beam stress, Ohm\'s law, fluid flow, and more.',
  keywords: 'engineering calculators, civil engineering tools, mechanical calculator, electrical engineering, Ohm\'s law calculator, beam stress calculator, fluid flow calculator',
};

export default function EngineeringCalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Engineering Calculators</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Professional-grade calculation tools for engineers, students, and technical professionals. 
            Free, accurate, and always available.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Engineering Calculators Matter</h3>
            <p className="section-subtitle">Precision tools for engineering excellence</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Engineering is built on precision. Whether you are designing a bridge, analyzing electrical circuits, 
                or calculating fluid dynamics, having the right calculation tools is essential. Our engineering 
                calculators are designed to help civil, mechanical, electrical, and chemical engineers solve complex 
                problems quickly and accurately.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From Ohm's Law calculations for electrical engineers to beam stress analysis for structural engineers, 
                our growing collection of engineering tools covers the most common calculations you need in your daily work.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Engineering Disciplines</h3>
            <p className="section-subtitle">Specialized tools for every engineering field</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiTool className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Civil Engineering</h4>
              <p className="text-sm text-gray-600">
                Beam stress, structural analysis, concrete calculations, and surveying tools.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiCpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mechanical Engineering</h4>
              <p className="text-sm text-gray-600">
                Thermodynamics, fluid mechanics, stress analysis, and machine design tools.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Electrical Engineering</h4>
              <p className="text-sm text-gray-600">
                Ohm's Law, circuit analysis, power calculations, and electronics tools.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#f59e0b' }}>
                <FiGlobe className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Chemical Engineering</h4>
              <p className="text-sm text-gray-600">
                Process calculations, thermodynamics, fluid flow, and reaction kinetics tools.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Calculators */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Popular Engineering Calculators</h3>
            <p className="section-subtitle">Most used tools by engineers and students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiTool className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Beam Stress Calculator</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Calculate bending stress, shear force, and deflection in beams for structural analysis.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                <span>Calculate Now</span>
                <FiArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiZap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Ohm's Law Calculator</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Calculate voltage, current, resistance, and power in electrical circuits.
              </p>
              <div className="flex items-center text-green-600 font-medium group-hover:translate-x-1 transition-transform">
                <span>Calculate Now</span>
                <FiArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiGlobe className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Fluid Flow Calculator</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Calculate flow rate, pressure drop, and Reynolds number for fluid systems.
              </p>
              <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
                <span>Calculate Now</span>
                <FiArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiCpu className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Thermodynamics Calculator</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Calculate heat transfer, work, and efficiency in thermodynamic systems.
              </p>
              <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-1 transition-transform">
                <span>Calculate Now</span>
                <FiArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiTool className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Concrete Calculator</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Calculate concrete volume, mix ratios, and reinforcement requirements.
              </p>
              <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-transform">
                <span>Calculate Now</span>
                <FiArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#06b6d4' }}>
                  <FiZap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Power Calculator</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Calculate electrical power, energy consumption, and efficiency ratings.
              </p>
              <div className="flex items-center text-cyan-600 font-medium group-hover:translate-x-1 transition-transform">
                <span>Calculate Now</span>
                <FiArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Engineering Calculator Features</h3>
            <p className="section-subtitle">Professional tools designed for accuracy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiAward className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Industry Standards</h4>
              <p className="text-sm text-gray-600">
                Calculations follow industry standards and engineering best practices.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Safety Factors</h4>
              <p className="text-sm text-gray-600">
                Built-in safety factors and design margins for engineering safety.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiTool className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Unit Conversions</h4>
              <p className="text-sm text-gray-600">
                Automatic unit conversions between SI, imperial, and other systems.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use Engineering Calculators</h3>
            <p className="section-subtitle">Simple steps for accurate engineering calculations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Calculator</h4>
              <p className="text-sm text-gray-600">Choose your engineering discipline</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Input Parameters</h4>
              <p className="text-sm text-gray-600">Enter engineering values</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Calculate</h4>
              <p className="text-sm text-gray-600">Get instant results</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Apply Results</h4>
              <p className="text-sm text-gray-600">Use in your projects</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about engineering calculators</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Are these calculators suitable for professional use?</h4>
              <p className="text-sm text-gray-600">Yes, our calculators follow industry standards and are suitable for professional engineering work, though always verify critical calculations.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Do the calculators include safety factors?</h4>
              <p className="text-sm text-gray-600">Many calculators include standard safety factors and design margins, but always apply appropriate safety factors for your specific application.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I use these for academic work?</h4>
              <p className="text-sm text-gray-600">Absolutely! These calculators are perfect for engineering students to verify homework, study concepts, and learn engineering principles.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Are the calculations accurate?</h4>
              <p className="text-sm text-gray-600">Our calculators use established engineering formulas and provide results with high precision suitable for most engineering applications.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Calculate More?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free engineering and conversion tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/all-converters/"
                className="btn btn-primary"
              >
                <span>All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="btn btn-secondary"
              >
                <span>Home</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
