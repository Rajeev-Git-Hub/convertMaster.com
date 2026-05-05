import { Metadata } from 'next';
import TitleCaseClient from './TitleCaseClient';

export const metadata: Metadata = {
  title: 'Title Case Converter – Capitalize Every Word Online',
  description: 'Free online Title Case converter. Capitalize the first letter of every word instantly. Perfect for headlines, titles, names, and proper nouns.',
  keywords: 'title case, capitalize words, first letter uppercase, title case converter, capitalize each word',
  openGraph: {
    title: 'Title Case Converter – Free Online Tool',
    description: 'Capitalize the first letter of every word instantly. Perfect for titles and headlines.',
    type: 'website',
  },
};

export default function TitleCasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Title Case Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Capitalize the first letter of every word. Perfect for headlines, book titles, movie titles, names, and any content that needs proper title formatting.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <TitleCaseClient />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Perfect For</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Headlines</h4>
              <p className="text-sm text-gray-600">Create professional-looking article and blog headlines.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Book Titles</h4>
              <p className="text-sm text-gray-600">Format book, movie, and song titles properly.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Names</h4>
              <p className="text-sm text-gray-600">Ensure proper names are correctly capitalized.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is Title Case?</h4>
              <p className="text-sm text-gray-600">Title Case (also called First Letter case or Proper Case) capitalizes the first letter of every word. It is commonly used for headlines, titles, names, and any text where each word should stand out.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">When should I use Title Case?</h4>
              <p className="text-sm text-gray-600">Use Title Case for book titles, movie titles, article headlines, presentation titles, and proper nouns. It makes text look polished and professional.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Does this handle small words correctly?</h4>
              <p className="text-sm text-gray-600">This converter capitalizes every word. For strict title case rules (where small words like and, the, of stay lowercase unless first), you may need to adjust manually after conversion.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore Other Case Converters</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/sentence-case/" className="btn btn-secondary">Sentence case</a>
              <a href="/upper-case/" className="btn btn-secondary">UPPER CASE</a>
              <a href="/lower-case/" className="btn btn-secondary">lower case</a>
              <a href="/alternate-case/" className="btn btn-secondary">aLtErNaTe</a>
              <a href="/toggle-case/" className="btn btn-secondary">tOGGLE</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
