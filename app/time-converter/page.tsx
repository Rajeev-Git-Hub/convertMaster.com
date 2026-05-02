import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiClock, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiCalendar, FiSun, FiMoon } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Time Converter - Free Online Tool | Convert Seconds, Minutes, Hours, Days',
  description: 'Free online time converter. Convert between seconds, minutes, hours, days, weeks, months, years. Accurate calculations, conversion tables, and practical examples.',
  keywords: 'time converter, seconds to minutes, hours to days, weeks to months, time duration converter, time calculator, online tool',
  openGraph: {
    title: 'Time Converter - Free Online Tool',
    description: 'Convert between different units of time instantly',
    type: 'website',
  },
};

export default function TimeConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Time Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between seconds, minutes, hours, days, weeks, months, and years
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="time" />
          </div>
        </section>

        {/* Time Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Time Unit Definitions</h3>
            <p className="section-subtitle">Understanding time measurement standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Second (s)</h5>
              <p className="text-sm text-gray-600">The SI base unit of time. Defined as the duration of 9,192,631,770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Minute (min)</h5>
              <p className="text-sm text-gray-600">Equal to 60 seconds. A common unit for measuring durations such as meetings, exercise sessions, and short activities. 60 minutes = 1 hour.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Hour (h)</h5>
              <p className="text-sm text-gray-600">Equal to 60 minutes or 3,600 seconds. Used for work schedules, travel times, and daily activities. 24 hours = 1 day.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Day</h5>
              <p className="text-sm text-gray-600">Equal to 24 hours or 1,440 minutes. Based on Earth's rotation period. Used for planning, scheduling, and calendar systems.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Week</h5>
              <p className="text-sm text-gray-600">Equal to 7 days or 168 hours. Standard unit for work schedules, project planning, and recurring events.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Month</h5>
              <p className="text-sm text-gray-600">Variable duration (28-31 days). Used in calendar systems, billing cycles, and long-term planning. Average month = 30.44 days.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Year</h5>
              <p className="text-sm text-gray-600">Equal to 365 days (366 in leap years) or 12 months. Used for long-term planning, age calculations, and historical dating.</p>
            </div>
          </div>
        </section>

        {/* Common Time Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Time Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday time measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiClock className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Seconds to Minutes</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>60 seconds = 1 minute</li>
                <li>300 seconds = 5 minutes</li>
                <li>1,800 seconds = 30 minutes</li>
                <li>3,600 seconds = 1 hour</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiSun className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Hours to Days</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>24 hours = 1 day</li>
                <li>48 hours = 2 days</li>
                <li>168 hours = 1 week</li>
                <li>720 hours = 1 month (30 days)</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiCalendar className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Days to Years</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>365 days = 1 year</li>
                <li>730 days = 2 years</li>
                <li>1,825 days = 5 years</li>
                <li>3,650 days = 10 years</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Applications</h3>
            <p className="section-subtitle">Where time conversion is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiClock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Work & Productivity</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Work week:</strong> 40 hours = 1,440 minutes</p>
                <p><strong>Lunch break:</strong> 1 hour = 60 minutes</p>
                <p><strong>Meeting:</strong> 30 minutes = 1,800 seconds</p>
                <p><strong>Project:</strong> 2 weeks = 336 hours</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiSun className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Travel & Transportation</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Flight:</strong> 6 hours = 360 minutes</p>
                <p><strong>Drive:</strong> 3 hours = 180 minutes</p>
                <p><strong>Layover:</strong> 2 hours = 7,200 seconds</p>
                <p><strong>Vacation:</strong> 2 weeks = 14 days</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiCalendar className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Personal Life</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Sleep:</strong> 8 hours = 480 minutes</p>
                <p><strong>Exercise:</strong> 30 minutes = 1,800 seconds</p>
                <p><strong>Reading:</strong> 1 hour = 60 minutes</p>
                <p><strong>Age:</strong> 25 years = 9,125 days</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiMoon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Science & Technology</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Computer processing:</strong> 1 ms = 0.001 seconds</p>
                <p><strong>Light travel:</strong> 1 second = 300,000 km</p>
                <p><strong>Earth rotation:</strong> 24 hours = 1 day</p>
                <p><strong>Moon orbit:</strong> 27.3 days = 655.2 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Time Units</h3>
            <p className="section-subtitle">Simple steps for accurate time conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Time Value</h4>
              <p className="text-sm text-gray-600">Input the time duration you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Unit</h4>
              <p className="text-sm text-gray-600">Choose the current time unit (seconds, minutes, hours, etc.)</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Unit</h4>
              <p className="text-sm text-gray-600">Select the time unit to convert to</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">View instant, accurate conversion results</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about time conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many seconds are in a day?</h4>
              <p className="text-sm text-gray-600">There are 86,400 seconds in a day (24 hours × 60 minutes × 60 seconds).</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do months have different lengths?</h4>
              <p className="text-sm text-gray-600">Months are based on lunar cycles and historical calendar systems. They range from 28-31 days, with February having 29 days in leap years.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is a leap year?</h4>
              <p className="text-sm text-gray-600">A leap year occurs every 4 years when February has 29 days. This accounts for the fact that Earth's orbit takes 365.25 days.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this time converter?</h4>
              <p className="text-sm text-gray-600">Our converter uses precise mathematical relationships between time units and provides results with up to 10 decimal places for scientific accuracy.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Convert More Units?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free conversion tools for all your measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/length-converter/"
                className="btn btn-primary"
              >
                <span>Length Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/weight-converter/"
                className="btn btn-secondary"
              >
                <span>Weight Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="btn btn-secondary"
              >
                <span>All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
