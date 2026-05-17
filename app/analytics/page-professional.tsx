import { Metadata } from 'next';
import Link from 'next/link';
import ConversionAnalytics from '../../components/ConversionAnalytics';
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiActivity, FiZap, FiTrendingUp, FiPieChart } from 'react-icons/fi';

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
              Track your conversion history, usage patterns, and statistics with comprehensive analytics insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#analytics-dashboard"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Analytics
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                Learn More
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section id="analytics-dashboard" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Your Analytics Dashboard</h2>
            <p className="section-subtitle">Real-time insights into your conversion activity</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
              <ConversionAnalytics />
          </div>
        </div>
      </section>

      {/* Understanding Analytics */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Understanding Your Conversion Analytics</h2>
            <p className="section-subtitle">Comprehensive insights into your conversion activity</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Activity History */}
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-blue-100 dark:bg-blue-900/30">
                <FiTrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="icon-box-title">Activity History</h3>
              <p className="icon-box-description">
                Track your daily and weekly conversion patterns with detailed timestamps and usage trends
              </p>
            </div>

            {/* Category Insights */}
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-green-100 dark:bg-green-900/30">
                <FiPieChart className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="icon-box-title">Category Insights</h3>
              <p className="icon-box-description">
                Discover which conversion categories you use most frequently and identify patterns
              </p>
            </div>

            {/* Usage Patterns */}
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-purple-100 dark:bg-purple-900/30">
                <FiBarChart2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="icon-box-title">Usage Patterns</h3>
              <p className="icon-box-description">
                Analyze peak usage times and optimize your conversion workflow for better efficiency
              </p>
            </div>

            {/* Performance Metrics */}
            <div className="icon-box bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="icon-box-icon bg-orange-100 dark:bg-orange-900/30">
                <FiActivity className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="icon-box-title">Performance Metrics</h3>
              <p className="icon-box-description">
                Monitor conversion accuracy, speed, and overall performance statistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Key Analytics Metrics</h2>
            <p className="section-subtitle">Track what matters most for your conversion needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1,247</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Total Conversions</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">89%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Accuracy Rate</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2.3s</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Avg Response Time</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">156</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Daily Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about conversion analytics</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">How is my data stored?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All your conversion data is stored locally in your browser using localStorage. No data is sent to external servers, ensuring complete privacy and security.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Can I export my analytics data?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can export your conversion history as a JSON file for backup or analysis. The export feature is available in the analytics dashboard.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">How long is my data retained?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data is retained indefinitely in your browser unless you clear it manually. You can also clear your conversion history at any time using the clear option.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Is real-time tracking available?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, your conversions are tracked in real-time and the analytics dashboard updates immediately as you use the converter tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Tracking Your Conversions Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get valuable insights into your conversion patterns and optimize your workflow with comprehensive analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analytics"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Go to Analytics Dashboard
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Back to Converters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
