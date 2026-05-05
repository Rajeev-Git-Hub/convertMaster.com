import { Metadata } from 'next';
import SentenceCaseClient from './SentenceCaseClient';

export const metadata: Metadata = {
  title: 'Sentence Case Converter – Convert Text to Sentence Case Online',
  description: 'Free online sentence case converter. Capitalize the first letter of each sentence automatically. Perfect for essays, articles, and documents.',
  keywords: 'sentence case, sentence case converter, capitalize sentences, text formatter, sentence capitalization',
  openGraph: {
    title: 'Sentence Case Converter – Free Online Tool',
    description: 'Convert your text to proper sentence case instantly. First letter capitalized, rest lowercase.',
    type: 'website',
  },
};

export default function SentenceCasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Sentence Case Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert your text to proper sentence case. The first letter of each sentence is capitalized while the rest remains lowercase. Perfect for writing articles, essays, and professional documents.
          </p>
        </section>

        {/* Main Converter */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <SentenceCaseClient />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Use Sentence Case?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Writing</h4>
              <p className="text-sm text-gray-600">The standard format for articles, blog posts, and formal documents.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy to Read</h4>
              <p className="text-sm text-gray-600">Natural flow that readers expect in prose and content.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Conversion</h4>
              <p className="text-sm text-gray-600">Paste your text and get properly formatted sentences immediately.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is sentence case?</h4>
              <p className="text-sm text-gray-600">Sentence case is a text formatting style where the first letter of each sentence is capitalized and the rest of the text is in lowercase. It is the standard format for most written content including articles, emails, and documents.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">When should I use sentence case?</h4>
              <p className="text-sm text-gray-600">Use sentence case for body text in articles, blog posts, emails, essays, books, and any prose writing. It is the most readable format for long-form content.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Does this tool detect sentences automatically?</h4>
              <p className="text-sm text-gray-600">Yes, our tool automatically detects the start of each sentence after periods, exclamation marks, question marks, and new lines, then capitalizes the first letter appropriately.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore Other Case Converters</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/upper-case/" className="btn btn-secondary">UPPER CASE</a>
              <a href="/lower-case/" className="btn btn-secondary">lower case</a>
              <a href="/title-case/" className="btn btn-secondary">Title Case</a>
              <a href="/alternate-case/" className="btn btn-secondary">aLtErNaTe</a>
              <a href="/toggle-case/" className="btn btn-secondary">tOGGLE</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
