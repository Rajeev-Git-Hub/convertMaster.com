import { Metadata } from 'next';
import Link from 'next/link';
import ConversionAnalytics from '../../components/ConversionAnalytics';
import { FiCheckCircle, FiActivity, FiZap } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Test Analytics Page',
  description: 'Test page to verify professional styling',
};

export default function TestAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Test Hero Section */}
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
              Test Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              This should show professional styling with gradients and badges
            </p>
            
            <div className="max-w-6xl mx-auto">
              <ConversionAnalytics />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
