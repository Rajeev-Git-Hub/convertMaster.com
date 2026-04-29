'use client';

import React from 'react';
import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';

export default function TermsClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <FiFileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using ConvertMaster ("the Service"), you agree to these Terms of Service. If you do not agree, please do not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                ConvertMaster is a web-based unit conversion tool that helps users convert values across categories such as length, weight, temperature, area, volume, speed, data, and time.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                The Service is provided for general informational and educational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Use of the Service</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                You agree to use the Service responsibly and only for lawful purposes. You must not:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Use the Service in violation of any applicable laws</li>
                <li>Attempt to disrupt or interfere with the Service</li>
                <li>Attempt unauthorized access to any part of the Service</li>
                <li>Use automated tools (bots or scrapers) without permission</li>
                <li>Upload or transmit harmful code</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Accuracy of Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We aim to provide accurate and up-to-date conversion results. However, we do not guarantee that all results are free from errors.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                The Service should not be relied upon for critical decisions in areas such as engineering, medical, financial, or scientific work. Always verify important calculations with appropriate sources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                All content, design, and functionality of the Service are owned by ConvertMaster and protected by applicable intellectual property laws.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                You may not copy, reproduce, or distribute any part of the Service without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Service may include third-party content or advertisements. We are not responsible for the accuracy or reliability of any third-party content or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your use of the Service is also governed by our{' '}
                <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Privacy Policy
                </Link>
                . Please review it to understand how information is handled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will always be available, error-free, or uninterrupted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, ConvertMaster shall not be liable for any indirect or consequential damages arising from the use of the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to the Service</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update, modify, or discontinue parts of the Service at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms, please contact us through the Contact page.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
