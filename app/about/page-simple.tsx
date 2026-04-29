'use client';

import Link from 'next/link';
import { FiTrendingUp, FiShield, FiCheckCircle, FiUsers, FiClock, FiArrowRight, FiActivity, FiTarget, FiZap, FiGlobe, FiBookOpen } from 'react-icons/fi';

export default function AboutPageSimple() {
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">The world's most trusted unit conversion platform, helping millions convert with confidence every day.</p>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Unit Conversions Matter</h2>
              <p className="section-subtitle">The everyday challenges we solve for millions of users</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box icon-box-primary">
                    <FiTarget className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Precision Matters</h3>
                </div>
                <p className="text-gray-600 text-sm">From engineering calculations to cooking recipes, accuracy in unit conversion is critical. A small error can lead to big mistakes.</p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                    <FiGlobe className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Global Standards</h3>
                </div>
                <p className="text-gray-600 text-sm">Different countries use different measurement systems. We bridge this gap with standardized, reliable conversions.</p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                    <FiZap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Time is Valuable</h3>
                </div>
                <p className="text-gray-600 text-sm">Manual conversions are time-consuming and error-prone. We deliver instant results you can trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">How ConvertMaster Helps</h2>
              <p className="section-subtitle">Practical solutions for real-world conversion needs</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">For Professionals</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Engineers & Scientists</h4>
                      <p className="text-sm text-gray-600">Precise calculations for critical projects with 10-decimal accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Healthcare Professionals</h4>
                      <p className="text-sm text-gray-600">Medical dosage conversions and body temperature calculations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Construction & Manufacturing</h4>
                      <p className="text-sm text-gray-600">Length, weight, and volume conversions for project planning</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">For Everyday Life</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Home Cooking</h4>
                      <p className="text-sm text-gray-600">Recipe conversions between metric and imperial measurements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Travel & Shopping</h4>
                      <p className="text-sm text-gray-600">Currency, temperature, and distance conversions while abroad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Fitness & Health</h4>
                      <p className="text-sm text-gray-600">Weight, height, and body measurement tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Solution Approach</h2>
              <p className="section-subtitle">Simple, accurate, and accessible conversion tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="icon-box icon-box-primary mb-4 mx-auto">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Unmatched Accuracy</h3>
                <p className="text-sm text-gray-600 mb-4">Built on international standards with 99.9% accuracy guarantee</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>SI unit standards compliance</li>
                  <li>IEEE 754 precision</li>
                  <li>Regular validation testing</li>
                </ul>
              </div>
              
              <div className="card p-6 text-center">
                <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                  <FiZap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-sm text-gray-600 mb-4">Instant results in 0.1 seconds, no waiting required</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>Optimized algorithms</li>
                  <li>Global CDN delivery</li>
                  <li>Real-time processing</li>
                </ul>
              </div>
              
              <div className="card p-6 text-center">
                <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                  <FiUsers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Friendly</h3>
                <p className="text-sm text-gray-600 mb-4">Intuitive interface designed for all skill levels</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>No registration required</li>
                  <li>Mobile responsive</li>
                  <li>Ad-free experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Categories */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Comprehensive Conversion Coverage</h2>
              <p className="section-subtitle">All your conversion needs in one place</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">ð</div>
                <h4 className="font-semibold text-gray-900 text-sm">Length</h4>
                <p className="text-xs text-gray-600">m, ft, in, km, mi</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">â°</div>
                <h4 className="font-semibold text-gray-900 text-sm">Weight</h4>
                <p className="text-xs text-gray-600">kg, lbs, g, oz</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">ðª</div>
                <h4 className="font-semibold text-gray-900 text-sm">Temperature</h4>
                <p className="text-xs text-gray-600">°C, °F, K</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">ð</div>
                <h4 className="font-semibold text-gray-900 text-sm">Volume</h4>
                <p className="text-xs text-gray-600">L, gal, mL, oz</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">â¡</div>
                <h4 className="font-semibold text-gray-900 text-sm">Data</h4>
                <p className="text-xs text-gray-600">MB, GB, TB, KB</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">â°</div>
                <h4 className="font-semibold text-gray-900 text-sm">Area</h4>
                <p className="text-xs text-gray-600">m², ft², acres</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Making a Difference</h2>
              <p className="section-subtitle">Real impact in people's daily lives</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="metric-value">50M+</div>
                <div className="metric-label">Active Users</div>
                <p className="text-xs text-gray-500 mt-2">Trusting us daily</p>
              </div>
              <div className="card p-6 text-center">
                <div className="metric-value">100M+</div>
                <div className="metric-label">Monthly Conversions</div>
                <p className="text-xs text-gray-500 mt-2">Across all categories</p>
              </div>
              <div className="card p-6 text-center">
                <div className="metric-value">180+</div>
                <div className="metric-label">Countries</div>
                <p className="text-xs text-gray-500 mt-2">Global reach</p>
              </div>
              <div className="card p-6 text-center">
                <div className="metric-value">99.9%</div>
                <div className="metric-label">Accuracy Rate</div>
                <p className="text-xs text-gray-500 mt-2">Precision guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to You</h3>
                <p className="text-gray-700 mb-6">
                  We're dedicated to providing the most accurate, fastest, and user-friendly conversion tools available. 
                  Every conversion is backed by our commitment to precision and reliability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <FiShield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Always Accurate</h4>
                    <p className="text-sm text-gray-600">Verified against international standards</p>
                  </div>
                  <div>
                    <FiZap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Always Fast</h4>
                    <p className="text-sm text-gray-600">Instant results when you need them</p>
                  </div>
                  <div>
                    <FiUsers className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Easy to Use</h4>
                    <p className="text-sm text-gray-600">Simple interface for quick conversions</p>
                  </div>
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
              Join millions who trust ConvertMaster for their daily conversion needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn btn-primary"
              >
                <span>Try ConvertMaster Now</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/all-converters"
                className="btn btn-secondary"
              >
                <span>Explore All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
