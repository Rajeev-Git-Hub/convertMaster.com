import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiPercent, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiShoppingCart, FiCreditCard, FiTrendingDown } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Percentage Calculator - Free Online Tool | Calculate Percentages, Discounts, Tips',
  description: 'Free online percentage calculator. Calculate percentages, discounts, tips, tax, interest rates. Accurate calculations and financial applications.',
  keywords: 'percentage calculator, percent calculator, discount calculator, tip calculator, tax calculator, interest calculator, online tool',
  openGraph: {
    title: 'Percentage Calculator - Free Online Tool',
    description: 'Calculate percentages and percent changes instantly',
    type: 'website',
  },
};

export default function PercentageCalculatorLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Percentage Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate percentages, discounts, tips, and financial calculations
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="card p-8">
              <div className="text-center mb-6">
                <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                  <FiPercent className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600">Enter values below to calculate percentages</p>
              </div>
              <div className="space-y-4">
                <input 
                  type="number" 
                  placeholder="Enter value..." 
                  className="input w-full"
                />
                <select className="input w-full">
                  <option>What is X% of Y?</option>
                  <option>X is what % of Y?</option>
                  <option>Percentage increase/decrease</option>
                </select>
                <button className="btn btn-primary w-full">
                  <span>Calculate</span>
                  <FiPercent className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Percentage Calculations */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Percentage Calculations</h3>
            <p className="section-subtitle">Quick reference for everyday percentage problems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiPercent className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">What is X% of Y?</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Example:</strong> What is 25% of 200?</p>
                <p><strong>Formula:</strong> (25/100) × 200 = 50</p>
                <p><strong>Answer:</strong> 50</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiPercent className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">X is what % of Y?</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Example:</strong> 50 is what % of 200?</p>
                <p><strong>Formula:</strong> (50/200) × 100 = 25%</p>
                <p><strong>Answer:</strong> 25%</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Percentage Increase</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Example:</strong> Increase 200 by 25%</p>
                <p><strong>Formula:</strong> 200 + (200 × 25/100) = 250</p>
                <p><strong>Answer:</strong> 250</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Applications</h3>
            <p className="section-subtitle">Where percentage calculations are essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Shopping & Discounts</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>20% off $100:</strong> Save $20, pay $80</p>
                <p><strong>30% off $50:</strong> Save $15, pay $35</p>
                <p><strong>15% off $200:</strong> Save $30, pay $170</p>
                <p><strong>50% off $80:</strong> Save $40, pay $40</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiCreditCard className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Tips & Service</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>15% tip on $50:</strong> $7.50 tip</p>
                <p><strong>20% tip on $100:</strong> $20.00 tip</p>
                <p><strong>18% tip on $75:</strong> $13.50 tip</p>
                <p><strong>25% tip on $40:</strong> $10.00 tip</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiTrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Business & Finance</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>5% interest on $1,000:</strong> $50.00</p>
                <p><strong>8% growth on $500:</strong> $40.00</p>
                <p><strong>10% profit on $200:</strong> $20.00</p>
                <p><strong>3% tax on $1,500:</strong> $45.00</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiTrendingDown className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Academic & Statistics</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>85% of 200 students:</strong> 170 students</p>
                <p><strong>92% of 150 questions:</strong> 138 correct</p>
                <p><strong>75% attendance:</strong> 30 of 40 days</p>
                <p><strong>60% pass rate:</strong> 60 of 100 passed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Calculate Percentages</h3>
            <p className="section-subtitle">Simple steps for accurate percentage calculations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Choose Calculation</h4>
              <p className="text-sm text-gray-600">Select the type of percentage calculation you need</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Values</h4>
              <p className="text-sm text-gray-600">Input the numbers for your calculation</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Calculate</h4>
              <p className="text-sm text-gray-600">Click calculate to get your result</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">View Result</h4>
              <p className="text-sm text-gray-600">See the calculated percentage and formula</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about percentage calculations</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you calculate percentage?</h4>
              <p className="text-sm text-gray-600">To calculate percentage, divide the part by the whole and multiply by 100. Formula: (Part/Whole) × 100 = Percentage.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is a good tip percentage?</h4>
              <p className="text-sm text-gray-600">Standard tip percentages are 15-20% for good service. 15% is standard, 20% is for excellent service.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you calculate percentage increase?</h4>
              <p className="text-sm text-gray-600">Percentage increase = ((New Value - Original Value) / Original Value) × 100.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this percentage calculator?</h4>
              <p className="text-sm text-gray-600">Our calculator provides results with up to 10 decimal places for maximum precision in financial and academic calculations.</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Platform Statistics</h3>
            <p className="section-subtitle">Trusted by professionals worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="metric-label">Calculations</div>
              <div className="metric-value">500K+</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Daily</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Precision</div>
              <div className="metric-value">10</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Decimal Places</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Applications</div>
              <div className="metric-value">20+</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Use Cases</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Response Time</div>
              <div className="metric-value">0.1s</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Instant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Choose ConvertMaster?</h3>
            <p className="section-subtitle">Professional features designed for precision and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4">
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h4>
              <p className="text-sm text-gray-600 mb-4">
                Bank-level encryption with GDPR compliance and complete data privacy protection.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#10b981' }}>
                <FiUsers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Trust</h4>
              <p className="text-sm text-gray-600 mb-4">
                50M+ active users worldwide trust our platform for accurate, instant calculations.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#6b7280' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-sm text-gray-600 mb-4">
                0.1s response time with instant calculations and real-time results.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Calculate More?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free calculation tools for all your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/age-calculator/"
                className="btn btn-primary"
              >
                <span>Age Calculator</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="btn btn-secondary"
              >
                <span>All Calculators</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
