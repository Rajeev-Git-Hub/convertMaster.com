import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiClock, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiCalendar, FiBriefcase, FiTarget } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Time Duration Calculator - Free Online Tool | Calculate Time Differences, Duration',
  description: 'Free online time duration calculator. Calculate time differences, duration between dates, work hours, project timelines. Accurate calculations and business applications.',
  keywords: 'time duration calculator, time difference calculator, work hours calculator, project timeline, date calculator, time calculator, online tool',
  openGraph: {
    title: 'Time Duration Calculator - Free Online Tool',
    description: 'Calculate time differences and durations instantly',
    type: 'website',
  },
};

export default function TimeDurationCalculatorLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Time Duration Calculator</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate time differences, work hours, and project durations
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="card p-8">
              <div className="text-center mb-6">
                <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                  <FiClock className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600">Calculate time differences and durations</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="datetime-local" 
                    className="input w-full"
                    placeholder="Start Date & Time"
                  />
                  <input 
                    type="datetime-local" 
                    className="input w-full"
                    placeholder="End Date & Time"
                  />
                </div>
                <button className="btn btn-primary w-full">
                  <span>Calculate Duration</span>
                  <FiClock className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Duration Calculation Features</h3>
            <p className="section-subtitle">Professional time duration capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiCalendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Date Range</h4>
              <p className="text-sm text-gray-600">
                Calculate duration between any two dates and times with precision.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiBriefcase className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Work Hours</h4>
              <p className="text-sm text-gray-600">
                Track work hours, calculate overtime, and manage time sheets.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiTarget className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Timeline</h4>
              <p className="text-sm text-gray-600">
                Plan project durations, track milestones, and manage deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Use Cases</h3>
            <p className="section-subtitle">Where duration calculation is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiBriefcase className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Work & Business</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Work week:</strong> Calculate total hours worked</p>
                <p><strong>Overtime:</strong> Track extra hours beyond schedule</p>
                <p><strong>Meetings:</strong> Calculate meeting durations</p>
                <p><strong>Deadlines:</strong> Time remaining for projects</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiCalendar className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Personal Planning</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Vacation planning:</strong> Calculate trip duration</p>
                <p><strong>Event timing:</strong> Schedule duration events</p>
                <p><strong>Age calculation:</strong> Time since birth</p>
                <p><strong>Anniversaries:</strong> Years and days since</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiTarget className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Project Management</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Sprint duration:</strong> Agile sprint timelines</p>
                <p><strong>Milestone tracking:</strong> Time between goals</p>
                <p><strong>Resource planning:</strong> Time allocation</p>
                <p><strong>Delivery schedules:</strong> ETA calculations</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiClock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Time Tracking</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Study sessions:</strong> Learning time tracking</p>
                <p><strong>Exercise routines:</strong> Workout durations</p>
                <p><strong>Travel time:</strong> Journey calculations</p>
                <p><strong>Cooking time:</strong> Recipe timers</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Calculate Duration</h3>
            <p className="section-subtitle">Simple steps for accurate time calculations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Start Time</h4>
              <p className="text-sm text-gray-600">Enter start date and time</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">End Time</h4>
              <p className="text-sm text-gray-600">Enter end date and time</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Calculate</h4>
              <p className="text-sm text-gray-600">Click to calculate duration</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">View Result</h4>
              <p className="text-sm text-gray-600">See detailed breakdown</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about duration calculation</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you calculate time duration?</h4>
              <p className="text-sm text-gray-600">Time duration is calculated by subtracting the start time from the end time, accounting for years, months, days, hours, minutes, and seconds.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Does it handle time zones?</h4>
              <p className="text-sm text-gray-600">Yes, the calculator automatically adjusts for time zone differences when calculating duration between different locations.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I calculate work hours?</h4>
              <p className="text-sm text-gray-600">Absolutely! Enter your clock-in and clock-out times to calculate total work hours, including overtime calculations.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this calculator?</h4>
              <p className="text-sm text-gray-600">Our calculator provides results with second-level precision, accounting for leap years and daylight saving time changes.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Calculate More?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free calculation tools for all your measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/time-converter/"
                className="btn btn-primary"
              >
                <span>Time Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/age-calculator/"
                className="btn btn-secondary"
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
