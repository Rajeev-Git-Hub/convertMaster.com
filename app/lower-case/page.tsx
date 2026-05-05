import { Metadata } from 'next';
import LowerCaseClient from './LowerCaseClient';

export const metadata: Metadata = {
  title: 'Lower Case Converter – Convert Text to lowercase Online',
  description: 'Free online lowercase converter. Transform any text to all lowercase letters instantly. Perfect for URLs, emails, coding, and data normalization.',
  keywords: 'lower case, lowercase converter, all lowercase, small letters, text to lowercase',
  openGraph: {
    title: 'Lower Case Converter – Free Online Tool',
    description: 'Convert any text to all lowercase letters instantly. Fast and free lowercase converter.',
    type: 'website',
  },
};

export default function LowerCasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">lower case Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert your text to all lowercase letters instantly. Essential for URLs, email addresses, coding variables, and creating consistent, normalized text.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <LowerCaseClient />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Uses for Lower Case</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">URLs</h4>
              <p className="text-sm text-gray-600">Domain names and URLs should always be lowercase.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h4>
              <p className="text-sm text-gray-600">Standard email format uses lowercase letters.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Coding</h4>
              <p className="text-sm text-gray-600">Variables, functions, and filenames often use lowercase.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is lower case?</h4>
              <p className="text-sm text-gray-600">Lower case is when all letters in the text are small letters (a-z). It is the standard for URLs, email addresses, and many coding conventions. Lowercase text is also more readable for extended content.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do URLs use lowercase?</h4>
              <p className="text-sm text-gray-600">URLs are case-insensitive for the domain part, but using lowercase is the web standard and ensures consistency. Some servers treat paths as case-sensitive, so lowercase prevents errors.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore Other Case Converters</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/sentence-case/" className="btn btn-secondary">Sentence case</a>
              <a href="/upper-case/" className="btn btn-secondary">UPPER CASE</a>
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
