'use client';

import Base64EncoderClient from './Base64EncoderClient';
import { useLocalization } from '../../lib/LocalizationContext';
import { FiArrowRight, FiLock, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiFile, FiKey, FiShieldOff } from 'react-icons/fi';

export default function Base64EncoderPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">{t('base64.title')}</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('base64.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="gradient-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiLock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('base64.smart_features')}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {t('base64.smart_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Encoder */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <Base64EncoderClient />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Encoding Features</h3>
            <p className="section-subtitle">Professional Base64 encoding capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiFile className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('base64.encode')}</h4>
              <p className="text-sm text-gray-600">
                {t('base64.text_input_placeholder')}
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiKey className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('base64.decode')}</h4>
              <p className="text-sm text-gray-600">
                {t('base64.base64_input_placeholder')}
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiShieldOff className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h4>
              <p className="text-sm text-gray-600">
                All encoding happens in your browser for complete privacy and security.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use Base64 Encoder</h3>
            <p className="section-subtitle">Simple steps to encode/decode your data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Input Data</h4>
              <p className="text-sm text-gray-600">Enter text or Base64 string</p>
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
            <p className="section-subtitle">Common questions about Base64 encoding</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is Base64 encoding?</h4>
              <p className="text-sm text-gray-600">Base64 is an encoding scheme that converts binary data into ASCII characters, making it safe for transmission over text-based protocols.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is Base64 encryption?</h4>
              <p className="text-sm text-gray-600">No, Base64 is encoding, not encryption. It's designed for safe data transmission, not security. Anyone can decode Base64 data.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Where is Base64 used?</h4>
              <p className="text-sm text-gray-600">Commonly used in email attachments, HTML/CSS data URIs, API responses, and storing binary data in text formats.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is my data secure?</h4>
              <p className="text-sm text-gray-600">Yes, all encoding happens in your browser. Your data never leaves your device, ensuring complete privacy.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Encode More?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free developer All Converters for all your needs
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
                href="/url-encoder/"
                className="btn btn-secondary"
              >
                <span>URL Encoder</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/all-converters/"
                className="btn btn-secondary"
              >
                <span>All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
