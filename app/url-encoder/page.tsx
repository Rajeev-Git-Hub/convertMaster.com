'use client';

import URLEncoderClient from './URLEncoderClient';
import { useLocalization } from '../../lib/LocalizationContext';
import { FiArrowRight, FiLink, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiGlobe, FiServer } from 'react-icons/fi';

export default function URLEncoderPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">{t('url.title')}</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('url.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="gradient-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiLink className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('url.smart_features')}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {t('url.smart_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Encoder */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <URLEncoderClient />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">URL Encoding Features</h3>
            <p className="section-subtitle">Professional URL encoding capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiGlobe className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('url.what_is_encoding')}</h4>
              <p className="text-sm text-gray-600">
                {t('url.what_is_encoding_desc')}
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiServer className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('url.use_cases')}</h4>
              <p className="text-sm text-gray-600">
                Safe transmission of URLs in web applications and APIs.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiGlobe className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Browser Compatible</h4>
              <p className="text-sm text-gray-600">
                Follows RFC 3986 standards for maximum compatibility.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Use Cases</h3>
            <p className="section-subtitle">Where URL encoding is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiGlobe className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Web Development</h4>
              </div>
              <p className="text-sm text-gray-600">
                {t('url.use_case_1')}
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiServer className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">API Requests</h4>
              </div>
              <p className="text-sm text-gray-600">
                {t('url.use_case_2')}
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiGlobe className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Query Parameters</h4>
              </div>
              <p className="text-sm text-gray-600">
                {t('url.use_case_3')}
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiLink className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Form Data</h4>
              </div>
              <p className="text-sm text-gray-600">
                {t('url.use_case_4')}
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#ef4444' }}>
                  <FiShield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Security</h4>
              </div>
              <p className="text-sm text-gray-600">
                {t('url.use_case_5')}
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use URL Encoder</h3>
            <p className="section-subtitle">Simple steps to encode/decode URLs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Input URL</h4>
              <p className="text-sm text-gray-600">Enter your URL or string</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Choose Action</h4>
              <p className="text-sm text-gray-600">Select encode or decode</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Process</h4>
              <p className="text-sm text-gray-600">Click to convert instantly</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Copy Result</h4>
              <p className="text-sm text-gray-600">Copy to clipboard</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about URL encoding</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What characters need URL encoding?</h4>
              <p className="text-sm text-gray-600">Characters like spaces, special symbols (!@#$%^&*), and non-ASCII characters need to be encoded for safe URL transmission.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between encoding and escaping?</h4>
              <p className="text-sm text-gray-600">URL encoding converts characters to %XX format, while HTML escaping uses &amp; entities. They serve different purposes in web development.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is URL encoding reversible?</h4>
              <p className="text-sm text-gray-600">Yes, URL encoding is fully reversible. Our tool can both encode and decode URLs back to their original form.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is my data secure?</h4>
              <p className="text-sm text-gray-600">Yes, all encoding happens in your browser. Your URLs never leave your device, ensuring complete privacy.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Encode More?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free developer tools for all your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/json-formatter/"
                className="btn btn-primary"
              >
                <span>JSON Formatter</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/base64-encoder/"
                className="btn btn-secondary"
              >
                <span>Base64 Encoder</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="btn btn-secondary"
              >
                <span>All Tools</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
