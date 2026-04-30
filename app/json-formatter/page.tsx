'use client';

import JSONFormatterClient from './JSONFormatterClient';
import { useLocalization } from '../../lib/LocalizationContext';
import { FiArrowRight, FiCode, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiTrendingUp, FiFileText, FiCpu, FiTerminal } from 'react-icons/fi';

export default function JSONFormatterPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">{t('json.title')}</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('json.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="gradient-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiCode className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('json.smart_features')}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {t('json.smart_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Formatter */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <JSONFormatterClient />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Advanced Features</h3>
            <p className="section-subtitle">Professional JSON formatting capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiFileText className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('json.auto_format')}</h4>
              <p className="text-sm text-gray-600">
                {t('json.auto_format_desc')}
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <FiCpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('json.error_detection')}</h4>
              <p className="text-sm text-gray-600">
                {t('json.error_detection_desc')}
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <FiTerminal className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Syntax Highlighting</h4>
              <p className="text-sm text-gray-600">
                Color-coded JSON structure for better readability and debugging.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use JSON Formatter</h3>
            <p className="section-subtitle">Simple steps to format your JSON data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Paste JSON</h4>
              <p className="text-sm text-gray-600">Input your JSON data in the text area</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Format</h4>
              <p className="text-sm text-gray-600">Click format to beautify your JSON</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Validate</h4>
              <p className="text-sm text-gray-600">Check for syntax errors and issues</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Copy</h4>
              <p className="text-sm text-gray-600">Copy formatted JSON to clipboard</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about JSON formatting</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is JSON formatting?</h4>
              <p className="text-sm text-gray-600">JSON formatting is the process of organizing JSON data with proper indentation, spacing, and structure to make it more readable and maintainable.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How does error detection work?</h4>
              <p className="text-sm text-gray-600">Our tool analyzes JSON syntax and highlights errors such as missing commas, brackets, quotes, and other structural issues in real-time.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is my data secure?</h4>
              <p className="text-sm text-gray-600">Yes, all formatting happens in your browser. Your JSON data never leaves your device, ensuring complete privacy and security.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I minify JSON too?</h4>
              <p className="text-sm text-gray-600">Yes, our tool supports both formatting (beautifying) and minifying JSON to remove unnecessary whitespace for production use.</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Platform Statistics</h3>
            <p className="section-subtitle">Trusted by developers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="metric-label">JSON Files</div>
              <div className="metric-value">1M+</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Daily</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Accuracy</div>
              <div className="metric-value">100%</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Precise</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Features</div>
              <div className="metric-value">8+</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Tools</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Response Time</div>
              <div className="metric-value">0.1s</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Instant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Choose ConvertMaster?</h3>
            <p className="section-subtitle">Professional features designed for developers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4">
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Privacy First</h4>
              <p className="text-sm text-gray-600 mb-4">
                All formatting happens in your browser. Your data never leaves your device.
              </p>
              <div className="flex items-center justify-center text-blue-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#10b981' }}>
                <FiUsers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Developer Trust</h4>
              <p className="text-sm text-gray-600 mb-4">
                50M+ active users worldwide trust our platform for accurate formatting.
              </p>
              <div className="flex items-center justify-center text-green-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#8b5cf6' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-sm text-gray-600 mb-4">
                0.1s response time with instant formatting and real-time validation.
              </p>
              <div className="flex items-center justify-center text-purple-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Format More?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free developer tools for all your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/base64-encoder/"
                className="btn btn-primary"
              >
                <span>Base64 Encoder</span>
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
