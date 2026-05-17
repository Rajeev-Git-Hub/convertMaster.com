'use client';
import React from 'react';
import { FiTarget, FiZap, FiHeart, FiGlobe, FiAward, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { useLocalization } from './LocalizationContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children }) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 overflow-hidden border border-gray-100 dark:border-gray-700">
    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-400/10 to-purple-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
    <div className="relative z-10">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <div className="h-1 w-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-16">{children}</p>
    </div>
  </div>
);

const StatCard: React.FC<{ number: string; label: string; icon: React.ReactNode }> = ({ number, label, icon }) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
        {icon}
      </div>
      <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{number}</div>
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">{label}</div>
    </div>
  </div>
);

function AboutContent() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section - Completely Unique Design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
                <FiGlobe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{t('about.trusted.worldwide')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="block text-gray-900 dark:text-white">{t('app.title')}</span>
                <span className="block text-3xl md:text-4xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  {t('about.title')}
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('about.intro')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Always Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">No Registration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                    <FiTarget className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-black text-gray-900 dark:text-white">150+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Unit Types</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                    <FiZap className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-black text-gray-900 dark:text-white">&lt;1s</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl">
                    <FiShield className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-black text-gray-900 dark:text-white">100%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Private</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-2xl">
                    <FiHeart className="h-8 w-8 text-pink-600 dark:text-pink-400 mx-auto mb-2" />
                    <div className="text-2xl font-black text-gray-900 dark:text-white">Free</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">No Cost Ever</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-br from-purple-400 to-pink-600 rounded-2xl transform -rotate-12 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50+" label="Converters Available" icon={<FiTrendingUp className="h-6 w-6" />} />
            <StatCard number="150+" label="Unit Types" icon={<FiTarget className="h-6 w-6" />} />
            <StatCard number="50+" label="Countries" icon={<FiGlobe className="h-6 w-6" />} />
            <StatCard number="99.9%" label="Accuracy Rate" icon={<FiAward className="h-6 w-6" />} />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
            {t('about.mission.title')}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
            {t('about.why.choose.convertmaster')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={<FiTarget className="h-8 w-8 text-white" />}
              title={t('about.accuracy.title')}
            >
              {t('about.accuracy.desc')}
            </FeatureCard>
            <FeatureCard
              icon={<FiZap className="h-8 w-8 text-white" />}
              title={t('about.speed.title')}
            >
              {t('about.speed.desc')}
            </FeatureCard>
            <FeatureCard
              icon={<FiHeart className="h-8 w-8 text-white" />}
              title={t('about.userfriendly.title')}
            >
              {t('about.userfriendly.desc')}
            </FeatureCard>
          </div>
          
          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex items-start space-x-4">
              <div className="p-3 bg-linear-to-br from-green-400 to-blue-500 rounded-full text-white shrink-0">
                <FiShield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
                <p className="text-gray-600 dark:text-gray-300">Your conversions are processed locally in your browser. We never store or transmit your data.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex items-start space-x-4">
              <div className="p-3 bg-linear-to-br from-purple-400 to-pink-500 rounded-full text-white shrink-0">
                <FiUsers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Built for Everyone</h3>
                <p className="text-gray-600 dark:text-gray-300">From students to engineers, our tool adapts to your needs with professional-grade precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-blue-500 mb-4 text-3xl">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">100% Private</h3>
              <p className="text-gray-600 dark:text-gray-300">All conversions happen locally in your browser. We never collect, store, or share any of your data.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-green-500 mb-4 text-3xl">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Instant & Offline-Ready</h3>
              <p className="text-gray-600 dark:text-gray-300">Lightning-fast conversions with no server round-trips. Works even without an internet connection.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-purple-500 mb-4 text-3xl">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Professional Grade</h3>
              <p className="text-gray-600 dark:text-gray-300">Industry-standard conversion factors covering engineering, healthcare, chemistry, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {t('about.cta.ready')}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t('about.cta.ready.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105"
            >
              {t('about.cta.button')}
            </a>
            <a
              href="#features"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutClient() {
  return (
    <AboutContent />
  );
}
