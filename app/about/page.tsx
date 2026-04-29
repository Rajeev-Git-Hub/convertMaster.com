'use client';

import Link from 'next/link';
import { useLocalization } from '../../lib/LocalizationContext';
import { FiTrendingUp, FiShield, FiCheckCircle, FiUsers, FiClock, FiArrowRight, FiActivity, FiTarget, FiCpu, FiZap, FiDatabase, FiServer, FiSend } from 'react-icons/fi';

export default function AboutPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="premium-badge">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Industry Leading</span>
              </div>
              <div className="badge badge-success">
                <FiCheckCircle className="w-3 h-3"></FiCheckCircle>
                <span>99.9% Accurate</span>
              </div>
              <div className="badge badge-secondary">
                <FiActivity className="w-3 h-3"></FiActivity>
                <span>Instant</span>
              </div>
            </div>
            
            <h1 className="hero-gradient text-4xl font-bold mb-4">About ConvertMaster</h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">ConvertMaster is a simple tool built to make unit conversion fast, accurate, and easy for everyone.</p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Whether you're a student, developer, professional, or just need a quick calculation, our goal is to give you instant results without complexity.</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Mission Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FiTarget className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Simple, fast, and accurate unit conversions for everyone. No complexity, just results.
                </p>
              </div>

              {/* How It Works Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <FiCpu className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">How It Works</h2>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Browser-based calculations</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Lightning fast performance</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>No installation needed</span>
                  </li>
                </ul>
              </div>

              {/* Who It's For Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <FiUsers className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Who It's For</h2>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <FiArrowRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Students solving problems</span>
                  </li>
                  <li className="flex items-center">
                    <FiArrowRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Developers working with data</span>
                  </li>
                  <li className="flex items-center">
                    <FiArrowRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Professionals in daily work</span>
                  </li>
                  <li className="flex items-center">
                    <FiArrowRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Anyone needing quick conversions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        
        {/* Features Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Privacy First */}
              <div className="bg-white rounded-xl shadow-sm p-6 text-center border-l-4 border-red-500">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiShield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-600 text-sm">
                  No tracking, no data collection. Your conversions stay private.
                </p>
              </div>

              
              {/* Open Source */}
              <div className="bg-white rounded-xl shadow-sm p-6 text-center border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiDatabase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Code</h3>
                <p className="text-gray-600 text-sm">
                  Transparent code that you can review and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="section-title">Get in Touch</h3>
              <p className="section-subtitle">Your feedback helps us improve</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="text-center">
                <p className="text-gray-700 mb-6 text-lg">
                  Have a suggestion or need a new converter?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn btn-primary"
                  >
                    <FiSend className="w-4 h-4 mr-2" />
                    <span>Contact Us</span>
                  </Link>
                  <Link
                    href="/all-converters"
                    className="btn btn-secondary"
                  >
                    <FiServer className="w-4 h-4 mr-2" />
                    <span>Explore Tools</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Start Converting with Confidence</h3>
            <p className="section-subtitle mb-8">
              Experience clean, fast, and accurate unit conversions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn btn-primary"
              >
                <span>Try ConvertMaster Now</span>
                <FiArrowRight className="w-4 h-4"></FiArrowRight>
              </Link>
              <Link
                href="/all-converters"
                className="btn btn-secondary"
              >
                <span>Explore All Converters</span>
                <FiArrowRight className="w-4 h-4"></FiArrowRight>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
