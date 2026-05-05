'use client';

import CaseConverterClient from './CaseConverterClient';
import { FiArrowRight } from 'react-icons/fi';

export default function CaseConverterPageContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Case Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert text between different cases instantly. Sentence case, UPPER CASE, lower case, First Letter, aLtErNaTe, and tOGGLE — all in one tool.
          </p>
          
        </section>

        {/* Main Converter */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <CaseConverterClient />
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Use Case Converter</h3>
            <p className="section-subtitle">Simple steps to convert your text</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Text</h4>
              <p className="text-sm text-gray-600">Type or paste your text in the input area</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Case</h4>
              <p className="text-sm text-gray-600">Choose the desired case conversion type</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">View Result</h4>
              <p className="text-sm text-gray-600">Converted text appears instantly in the output</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Copy</h4>
              <p className="text-sm text-gray-600">Copy the converted text to your clipboard</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about case conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is Sentence case?</h4>
              <p className="text-sm text-gray-600">Sentence case capitalizes the first letter of each sentence while keeping the rest lowercase. It&apos;s the standard format for most prose writing.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is UPPER CASE?</h4>
              <p className="text-sm text-gray-600">UPPER CASE converts every letter to its uppercase form. Commonly used for headings, emphasis, or formatting requirements like legal documents.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is lower case?</h4>
              <p className="text-sm text-gray-600">lower case converts every letter to its lowercase form. Useful for URLs, email addresses, and data normalization where consistency is needed.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is First Letter case?</h4>
              <p className="text-sm text-gray-600">First Letter case (Title Case) capitalizes the first letter of each word. Ideal for titles, headings, and proper nouns formatting.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is aLtErNaTe case?</h4>
              <p className="text-sm text-gray-600">Alternate case (also known as SpongeBob case) alternates between lowercase and uppercase letters, creating a playful, mocking effect often used in memes.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is tOGGLE case?</h4>
              <p className="text-sm text-gray-600">Toggle case swaps the case of every letter — uppercase becomes lowercase and vice versa. Useful for fixing text that was typed in the wrong case.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore More Developer Tools</h3>
            <p className="section-subtitle mb-8">
              Check out our other free developer tools for all your needs
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
