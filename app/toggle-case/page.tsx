import { Metadata } from 'next';
import ToggleCaseClient from './ToggleCaseClient';

export const metadata: Metadata = {
  title: 'Toggle Case Converter – Swap Letter Case Online',
  description: 'Free online toggle case converter. Swap the case of every letter instantly. Uppercase becomes lowercase and vice versa. Fix text typed in wrong case.',
  keywords: 'toggle case, swap case, invert case, change case, case swap, reverse case',
  openGraph: {
    title: 'Toggle Case Converter – Free Online Tool',
    description: 'Swap uppercase and lowercase letters instantly. Fix text typed in the wrong case.',
    type: 'website',
  },
};

export default function ToggleCasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">tOGGLE cASE cONVERTER</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Swap the case of every letter instantly. Uppercase becomes lowercase and lowercase becomes uppercase. Perfect for fixing text that was accidentally typed with Caps Lock on.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <ToggleCaseClient />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Use Toggle Case?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fix Caps Lock</h4>
              <p className="text-sm text-gray-600">Quickly fix text typed with Caps Lock accidentally on.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Invert Text</h4>
              <p className="text-sm text-gray-600">Create interesting effects by inverting all letter cases.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Fix</h4>
              <p className="text-sm text-gray-600">No need to retype — just paste and toggle instantly.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is tOGGLE case?</h4>
              <p className="text-sm text-gray-600">Toggle case swaps the case of every letter in your text. Every uppercase letter becomes lowercase, and every lowercase letter becomes uppercase. It is perfect for fixing text that was accidentally typed with Caps Lock on.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">When would I use toggle case?</h4>
              <p className="text-sm text-gray-600">Use toggle case when you have accidentally typed something with Caps Lock on, or when you want to invert the case of existing text for creative or formatting purposes.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Does this affect numbers or symbols?</h4>
              <p className="text-sm text-gray-600">No, toggle case only affects alphabetic characters (A-Z, a-z). Numbers, symbols, spaces, and special characters remain unchanged.</p>
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
              <a href="/title-case/" className="btn btn-secondary">Title Case</a>
              <a href="/alternate-case/" className="btn btn-secondary">aLtErNaTe</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
