import { Metadata } from 'next';
import AgeCalculatorClient from './AgeCalculatorClient';
import { FiArrowRight, FiCalendar, FiGift, FiClock } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Age Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with birthday countdown.',
  keywords: ['age calculator', 'birthday calculator', 'age in days', 'age calculator online', 'how old am i'],
  openGraph: {
    title: 'Age Calculator',
    description: 'Calculate your exact age with birthday countdown and detailed breakdown',
    type: 'website',
  },
};

export default function AgeCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Age Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with birthday countdown.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="gradient-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiCalendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Smart Features</h3>
              </div>
              <p className="text-sm text-gray-600">
                Exact age calculation, birthday countdown, next birthday details, and age milestones.
              </p>
            </div>
          </div>
        </section>

        {/* Age Calculator Component */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <AgeCalculatorClient />
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Age Calculation Examples</h3>
            <p className="section-subtitle">See how the age calculator works with sample dates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiCalendar className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Born Jan 1, 2000</h4>
              </div>
              <p className="text-sm text-gray-600">
                Currently {new Date().getFullYear() - 2000} years old
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiGift className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Born Dec 31, 1999</h4>
              </div>
              <p className="text-sm text-gray-600">
                {new Date().getFullYear() - 1999} years old (birthday soon!)
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Calculator Features</h3>
            <p className="section-subtitle">Advanced age calculation capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiClock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Precise Timing</h4>
              <p className="text-sm text-gray-600">
                Calculate age down to hours, minutes, and seconds for maximum accuracy.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiCalendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Birthday Countdown</h4>
              <p className="text-sm text-gray-600">
                See exactly when your next birthday arrives and how many days remain.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiGift className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Milestone Tracking</h4>
              <p className="text-sm text-gray-600">
                Track important age milestones and upcoming celebrations.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use the Age Calculator</h3>
            <p className="section-subtitle">Simple steps to calculate your exact age</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Birth Date</h4>
              <p className="text-sm text-gray-600">Select your date of birth using the calendar picker</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Add Time (Optional)</h4>
              <p className="text-sm text-gray-600">Include birth time for even more precise calculations</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Calculate</h4>
              <p className="text-sm text-gray-600">Click calculate to see your exact age breakdown</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">View Results</h4>
              <p className="text-sm text-gray-600">See age in years, months, days, hours, and minutes</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about age calculation</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is the age calculator?</h4>
              <p className="text-sm text-gray-600">Our calculator provides exact age calculations down to seconds, accounting for leap years and time zones.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Does it account for leap years?</h4>
              <p className="text-sm text-gray-600">Yes, the calculator automatically accounts for leap years in all age calculations for complete accuracy.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I calculate someone else's age?</h4>
              <p className="text-sm text-gray-600">Absolutely! Simply enter any birth date to calculate that person's exact current age.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What time format should I use?</h4>
              <p className="text-sm text-gray-600">Use 24-hour format (00:00 to 23:59) for birth time. Time is optional but provides more precise results.</p>
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
              <a
                href="/percentage-calculator/"
                className="btn btn-primary"
              >
                <span>Percentage Calculator</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="btn btn-secondary"
              >
                <span>All Calculators</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
