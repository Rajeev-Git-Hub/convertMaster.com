'use client';

import { useState } from 'react';
import { FiCheckCircle, FiSend } from 'react-icons/fi';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Store email locally (in real app, this would go to a backend/ESP)
    const existingEmails = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    
    if (existingEmails.includes(email)) {
      setSubscribed(true);
      return;
    }

    existingEmails.push({
      email,
      subscribedAt: new Date().toISOString(),
      source: window.location.pathname
    });
    
    localStorage.setItem('newsletter_subscribers', JSON.stringify(existingEmails));
    setSubscribed(true);
    setEmail('');

    // Track subscription (can be sent to analytics)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container text-center">
        <h3 className="section-title">Stay Updated</h3>
        <p className="section-subtitle">Get the latest conversion tips and features delivered to your inbox</p>
        
        <div className="max-w-2xl mx-auto">
          {subscribed ? (
            <div className="card p-8 text-center">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Successfully Subscribed!</h4>
              <p className="text-gray-600">Thanks for subscribing! Check your inbox soon for conversion tips and updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="input"
                    aria-label="Email address"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <span>Subscribe</span>
                  <FiSend className="w-4 h-4" />
                </button>
              </div>
              {error && (
                <p className="text-red-600 text-sm mb-4" role="alert">
                  {error}
                </p>
              )}
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-green-600" />
                  Weekly tips
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-green-600" />
                  New features
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-green-600" />
                  No spam
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
