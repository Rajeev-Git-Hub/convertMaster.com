import { Metadata } from 'next';
import UpperCaseClient from './UpperCaseClient';

export const metadata: Metadata = {
  title: 'UPPER CASE Converter – Convert Text to ALL CAPS Online',
  description: 'Free online UPPER CASE converter. Transform any text to ALL CAPITAL LETTERS instantly. Perfect for headlines, legal documents, and emphasis.',
  keywords: 'upper case, all caps, uppercase converter, capital letters, text to uppercase, all capital letters',
  openGraph: {
    title: 'UPPER CASE Converter – Free Online Tool',
    description: 'Convert any text to ALL CAPITAL LETTERS instantly. Fast and free uppercase converter.',
    type: 'website',
  },
};

export default function UpperCasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">UPPER CASE Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert your text to ALL CAPITAL LETTERS instantly. Perfect for headlines, legal documents, forms, and when you need maximum emphasis.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <UpperCaseClient />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">When to Use UPPER CASE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Headlines</h4>
              <p className="text-sm text-gray-600">Create bold, attention-grabbing headlines and titles.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Legal Documents</h4>
              <p className="text-sm text-gray-600">Many legal forms and contracts require uppercase text.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Emphasis</h4>
              <p className="text-sm text-gray-600">Draw attention to important information or warnings.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is UPPER CASE?</h4>
              <p className="text-sm text-gray-600">UPPER CASE (also called ALL CAPS) is when every letter in the text is capitalized. It is commonly used for emphasis, headlines, and certain formal documents like legal papers and military communications.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">When should I use uppercase?</h4>
              <p className="text-sm text-gray-600">Use uppercase for headlines, titles, legal documents, warning labels, and when you need to emphasize important text. Avoid using it for long paragraphs as it reduces readability.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore Other Case Converters</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/sentence-case/" className="btn btn-secondary">Sentence case</a>
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
