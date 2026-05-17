import { Metadata } from 'next';
import Link from 'next/link';
import ConversionAnalytics from '../../components/ConversionAnalytics';
import { FiArrowRight, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Conversion Analytics - Track Your Unit Conversions | Free Analytics Tool',
  description: 'Free conversion analytics tool. Track your unit conversion history, usage patterns, and statistics. Monitor conversion activity, popular categories, and usage trends.',
  keywords: 'conversion analytics, usage statistics, conversion history, track conversions, conversion data, analytics tool, online tool',
  openGraph: {
    title: 'Conversion Analytics - Track Your Usage',
    description: 'Monitor your conversion activity and statistics',
    type: 'website',
  },
};

export default function AnalyticsLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="premium-badge">
                <FiZap className="w-3 h-3"></FiZap>
                <span>Real-time</span>
              </div>
              <div className="badge badge-success">
                <FiCheckCircle className="w-3 h-3"></FiCheckCircle>
                <span>Track Usage</span>
              </div>
              <div className="badge badge-secondary">
                <FiActivity className="w-3 h-3"></FiActivity>
                <span>Analytics</span>
              </div>
            </div>
            
            <h1 className="hero-gradient text-4xl md:text-6xl font-bold mb-6">
              Conversion Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Track your conversion history, usage patterns, and statistics
            </p>
            
            <div className="max-w-6xl mx-auto">
              <ConversionAnalytics />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Analytics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Understanding Your Conversion Analytics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-blue-100 dark:bg-blue-900/30">
                <span className="text-3xl">.</span>
              </div>
              <h3 className="icon-box-title">Activity History</h3>
              <div className="icon-box-description">
                <p className="mb-2">View daily conversion counts</p>
                <p className="mb-2">Track usage patterns over time</p>
                <p className="mb-2">Monitor conversion trends</p>
                <p>Identify peak usage periods</p>
              </div>
            </div>
            
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-green-100 dark:bg-green-900/30">
                <span className="text-3xl">.</span>
              </div>
              <h3 className="icon-box-title">Popular Categories</h3>
              <div className="icon-box-description">
                <p className="mb-2">Most-used converter categories</p>
                <p className="mb-2">Top conversion types</p>
                <p className="mb-2">Category usage statistics</p>
                <p>User preference insights</p>
              </div>
            </div>
            
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-yellow-100 dark:bg-yellow-900/30">
                <span className="text-3xl">.</span>
              </div>
              <h3 className="icon-box-title">Hourly Activity</h3>
              <div className="icon-box-description">
                <p className="mb-2">Peak usage hours</p>
                <p className="mb-2">Time-based patterns</p>
                <p className="mb-2">Busiest conversion times</p>
                <p>Activity distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Benefits of Conversion Analytics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="icon-box bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-blue-100 dark:bg-blue-900/30">
                <FiTrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="icon-box-title">Track Usage Patterns</h3>
              <div className="icon-box-description">
                <p>Monitor how often you use each converter</p>
                <p>Identify your most-used conversion types</p>
                <p>Track daily, weekly, and monthly usage</p>
                <p>Discover conversion trends over time</p>
              </div>
            </div>
            
            <div className="icon-box bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-green-100 dark:bg-green-900/30">
                <FiTarget className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="icon-box-title">Optimize Workflow</h3>
              <div className="icon-box-description">
                <p>Find your most efficient conversion tools</p>
                <p>Identify frequently used unit combinations</p>
                <p>Streamline your measurement workflow</p>
                <p>Improve productivity with data insights</p>
              </div>
            </div>
            
            <div className="icon-box bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-purple-100 dark:bg-purple-900/30">
                <FiUsers className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="icon-box-title">Personal Insights</h3>
              <div className="icon-box-description">
                <p>Understand your conversion habits</p>
                <p>Discover which tools save you time</p>
                <p>Track your measurement needs evolution</p>
                <p>Get personalized usage statistics</p>
              </div>
            </div>
            
            <div className="icon-box bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-orange-100 dark:bg-orange-900/30">
                <FiShield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="icon-box-title">Privacy First</h3>
              <div className="icon-box-description">
                <p>All data stored locally in your browser</p>
                <p>No data sent to external servers</p>
                <p>Complete privacy and security</p>
                <p>Clear history anytime you want</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How is my conversion data stored?</h3>
              <p className="text-gray-600 dark:text-gray-300">All conversion history is stored locally in your browser using localStorage. No data is sent to any server, ensuring complete privacy and security of your usage information.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Can I clear my analytics history?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes! You can clear your conversion history anytime from the analytics dashboard. This will remove all stored data from your browser.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What statistics are tracked?</h3>
              <p className="text-gray-600 dark:text-gray-300">We track daily conversion counts, popular categories, most-used units, hourly activity patterns, and your favorite converters. This helps you understand your usage patterns.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Is my data shared with anyone?</h3>
              <p className="text-gray-600 dark:text-gray-300">No. Your analytics data never leaves your device. It is stored locally and is completely private. We do not collect, share, or sell any usage data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Convert More Units?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our other free conversion tools for all your measurement needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/length-converter/" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Length Converter
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/weight-converter/" 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Weight Converter
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              All Converters
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
