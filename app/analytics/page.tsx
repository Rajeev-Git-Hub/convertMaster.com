import { Metadata } from 'next';
import ConversionAnalytics from '../../components/ConversionAnalytics';
import { FiShield, FiUsers, FiTrendingUp, FiPieChart, FiClock, FiTarget } from 'react-icons/fi';

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
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Conversion Analytics Dashboard
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Track your conversion history, usage patterns, and statistics
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <ConversionAnalytics />
        </div>

        {/* Understanding Analytics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Your Conversion Analytics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FiTrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Activity History</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• View daily conversion counts</p>
                <p>• Track usage patterns over time</p>
                <p>• Monitor conversion trends</p>
                <p>• Identify peak usage periods</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FiPieChart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• Most used conversion types</p>
                <p>• Category distribution</p>
                <p>• Popular unit pairs</p>
                <p>• Conversion preferences</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <FiClock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Time Analysis</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• Time-based patterns</p>
                <p>• Busiest conversion times</p>
                <p>• Activity distribution</p>
                <p>• Peak hours analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Conversion Analytics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FiTrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Track Usage Patterns</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• Monitor how often you use each converter</p>
                <p>• Identify your most-used conversion types</p>
                <p>• Track daily, weekly, and monthly usage</p>
                <p>• Discover conversion trends over time</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FiTarget className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Optimize Workflow</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• Find your most efficient conversion tools</p>
                <p>• Identify frequently used unit combinations</p>
                <p>• Streamline your measurement workflow</p>
                <p>• Improve productivity with data insights</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <FiUsers className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Personal Insights</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• Understand your conversion habits</p>
                <p>• Discover your measurement preferences</p>
                <p>• Track learning progress</p>
                <p>• Personalize your experience</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <FiShield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Data Privacy</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• All data stored locally in your browser</p>
                <p>• No external data transmission</p>
                <p>• Complete control over your analytics</p>
                <p>• Clear data anytime with one click</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How is my data stored?</h3>
              <p className="text-gray-600 text-sm">All your conversion data is stored locally in your browser's localStorage. No data is sent to external servers, ensuring complete privacy.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I export my analytics?</h3>
              <p className="text-gray-600 text-sm">Yes! You can export all your analytics data as a JSON file for backup or analysis in external tools.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How far back does data go?</h3>
              <p className="text-gray-600 text-sm">Analytics tracks all conversions from when you started using the tool. You can clear data at any time to reset the tracking.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is this really free?</h3>
              <p className="text-gray-600 text-sm">Yes! All analytics features are completely free with no limits.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Start Tracking Your Conversions</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Begin using our conversion tools today and automatically start building your analytics dashboard. The more you convert, the more insights you'll gain!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Explore Converters
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
