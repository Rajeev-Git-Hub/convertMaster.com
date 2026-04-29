'use client';

import React from 'react';
import Link from 'next/link';
import { FiFileText, FiShield, FiAlertTriangle, FiCheckCircle, FiInfo } from 'react-icons/fi';

export default function DisclaimerClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="premium-badge">
                <FiShield className="w-3 h-3" />
                <span>Legal Notice</span>
              </div>
              <div className="badge badge-warning">
                <FiAlertTriangle className="w-3 h-3" />
                <span>Important</span>
              </div>
              <div className="badge badge-secondary">
                <FiCheckCircle className="w-3 h-3" />
                <span>Required</span>
              </div>
            </div>
            
            <h1 className="hero-gradient text-2xl font-bold mb-4">Disclaimer</h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Important information about the use of our conversion tools and services.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-12 animate-slide-in-up">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <FiAlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">General Use Only</h2>
                <p className="text-white/90">Important information about the use of our conversion tools</p>
              </div>
              
              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-900 mb-2">General Use Only</h3>
                  <p className="text-gray-700">
                    ConvertMaster provides unit conversion tools for general informational and educational purposes only. All results are calculated using standard formulas and are intended for everyday use.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Not Professional Advice</h3>
                  <p className="text-gray-700">
                    This tool is not a substitute for professional advice. Do not rely solely on this Service for decisions related to Engineering, Medical, Financial, or Scientific work.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Accuracy</h3>
                  <p className="text-gray-700">
                    We aim to provide accurate and up-to-date results. However, we do not guarantee that all conversions are free from errors or suitable for every use case.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Use at Your Own Risk</h3>
                  <p className="text-gray-700">
                    Your use of this Service is at your own risk. ConvertMaster is not responsible for any loss, damage, or issues arising from the use of this website.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-900 mb-2">External Links</h3>
                  <p className="text-gray-700">
                    This website may include links to third-party websites or services. We are not responsible for their content or accuracy.
                  </p>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">Changes</h3>
                  <p className="text-gray-700">
                    We may update this Disclaimer at any time. Updates will be reflected on this page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          </div>
  );
}
