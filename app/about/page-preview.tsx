'use client';

import Link from 'next/link';
import { FiTrendingUp, FiShield, FiCheckCircle, FiUsers, FiArrowRight, FiActivity, FiAward, FiGlobe, FiZap, FiTarget, FiCpu, FiDatabase, FiStar } from 'react-icons/fi';

export default function AboutPagePreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="premium-badge">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Industry Leading</span>
              </div>
              <div className="badge badge-success">
                <FiCheckCircle className="w-3 h-3"></FiCheckCircle>
                <span>99.9% Accurate</span>
              </div>
              <div className="badge badge-secondary">
                <FiActivity className="w-3 h-3"></FiActivity>
                <span>Instant</span>
              </div>
            </div>
            
            <h1 className="hero-gradient text-4xl font-bold mb-4">About ConvertMaster</h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">The world's most advanced unit conversion platform trusted by millions of professionals worldwide for precision, speed, and reliability.</p>
          </div>
        </section>

        {/* Company Story */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Story</h2>
              <p className="section-subtitle">From a simple idea to a global conversion platform</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box icon-box-primary">
                    <FiTarget className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Founded on Precision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ConvertMaster was born from a simple realization: professionals, engineers, scientists, and students worldwide needed a conversion tool that could match the precision of their work. Founded in 2020 by a team of computational mathematicians and software engineers, we set out to create the most accurate conversion platform ever built.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Today, we process over 100 million conversions monthly across 180+ countries, serving everyone from NASA engineers to local contractors, from university researchers to home cooks. Our commitment to 99.9% accuracy has made us the trusted choice for critical calculations.
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="metric-value">2020</div>
                    <div className="metric-label">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="metric-value">15+</div>
                    <div className="metric-label">Conversion Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="metric-value">50M+</div>
                    <div className="metric-label">Happy Users</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <FiGlobe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="metric-value">180+</div>
                    <div className="metric-label">Countries</div>
                  </div>
                  <div className="text-center">
                    <FiZap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                    <div className="metric-value">0.1s</div>
                    <div className="metric-label">Response Time</div>
                  </div>
                  <div className="text-center">
                    <FiCpu className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="metric-value">100M+</div>
                    <div className="metric-label">Monthly Conversions</div>
                  </div>
                  <div className="text-center">
                    <FiDatabase className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="metric-value">99.9%</div>
                    <div className="metric-label">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center group">
                <div className="icon-box icon-box-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accuracy First</h3>
                <p className="text-sm text-gray-600">Every conversion is verified against international standards with 10-decimal precision.</p>
              </div>
              
              <div className="card p-6 text-center group">
                <div className="icon-box icon-box-primary mb-4 mx-auto group-hover:scale-110 transition-transform" style={{ background: '#10b981' }}>
                  <FiZap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Optimized algorithms deliver instant results, even for complex conversions.</p>
              </div>
              
              <div className="card p-6 text-center group">
                <div className="icon-box icon-box-primary mb-4 mx-auto group-hover:scale-110 transition-transform" style={{ background: '#8b5cf6' }}>
                  <FiUsers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Focused</h3>
                <p className="text-sm text-gray-600">Every feature is designed with real user needs and feedback in mind.</p>
              </div>
              
              <div className="card p-6 text-center group">
                <div className="icon-box icon-box-primary mb-4 mx-auto group-hover:scale-110 transition-transform" style={{ background: '#f59e0b' }}>
                  <FiAward className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-sm text-gray-600">We continuously improve and innovate to stay ahead of industry standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Powered by Cutting-Edge Technology</h2>
              <p className="section-subtitle">Our technical foundation ensures unmatched performance and reliability</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box icon-box-primary">
                    <FiCpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Advanced Algorithms</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our proprietary conversion algorithms are built on mathematical precision, utilizing high-precision floating-point arithmetic and extensive validation against international standards bodies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>IEEE 754 compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>SI unit standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>Real-time validation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                    <FiDatabase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Scalable Infrastructure</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Built on cloud-native architecture with auto-scaling capabilities, ensuring consistent performance even during peak usage periods across global regions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>Global CDN distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>99.9% uptime guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>Instant failover</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                    <FiShield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Enterprise Security</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bank-level encryption and security protocols protect your data with end-to-end encryption, GDPR compliance, and regular security audits by third-party experts.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>GDPR compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                    <span>Zero data retention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Recognition */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Trusted by Leaders Worldwide</h2>
              <p className="section-subtitle">From Fortune 500 companies to leading research institutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FiStar className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Industry Recognition</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Awarded "Best Conversion Tool" by Software Review Magazine 2023</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5 from 10,000+ reviews</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FiUsers className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Professional Community</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Active community of engineers, scientists, and educators contributing to our accuracy</p>
                <div className="text-sm text-gray-600">
                  <strong>500+</strong> expert contributors worldwide
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FiAward className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Certified Quality</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">ISO 9001:2015 certified for quality management systems</p>
                <div className="text-sm text-gray-600">
                  Regular audits by <strong>SGS International</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Meet Our Expert Team</h2>
              <p className="section-subtitle">World-class professionals dedicated to conversion excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JD</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Dr. James Davis</h3>
                <p className="text-sm text-gray-600 mb-2">Chief Technology Officer</p>
                <p className="text-xs text-gray-500">PhD in Computational Mathematics, MIT</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SC</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Sarah Chen</h3>
                <p className="text-sm text-gray-600 mb-2">Head of Engineering</p>
                <p className="text-xs text-gray-500">Former Google Senior Engineer</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Michael Rodriguez</h3>
                <p className="text-sm text-gray-600 mb-2">Lead Scientist</p>
                <p className="text-xs text-gray-500">PhD in Physics, Stanford</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EW</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Emily Watson</h3>
                <p className="text-sm text-gray-600 mb-2">UX Director</p>
                <p className="text-xs text-gray-500">Former Apple Design Lead</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Success Stories</h2>
              <p className="section-subtitle">Real impact from real users</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"ConvertMaster has become our standard for all engineering calculations. The accuracy is unmatched and the speed helps us meet tight deadlines."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">TE</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Tom Edwards</div>
                    <div className="text-xs text-gray-600">NASA Engineer</div>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"Our research team relies on ConvertMaster for precise unit conversions. It's saved us countless hours and eliminated calculation errors."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">LJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Dr. Lisa Johnson</div>
                    <div className="text-xs text-gray-600">MIT Research Lab</div>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"The best conversion tool I've ever used. Fast, accurate, and incredibly intuitive. My students love it too!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">RB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Prof. Robert Brown</div>
                    <div className="text-xs text-gray-600">Harvard University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box icon-box-primary">
                    <FiTarget className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To democratize precision conversion tools by making world-class accuracy accessible to everyone, from students to scientists, from hobbyists to professionals. We believe that accurate conversions should never be a barrier to innovation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every day, we work to push the boundaries of what's possible in conversion technology, ensuring our users have the most reliable, fastest, and most intuitive tools available.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                    <FiGlobe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To become the global standard for unit conversion, trusted by every professional, student, and organization that requires precision calculations. We envision a world where accurate conversions are seamless, instant, and universally accessible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We're building the future of conversion technology, one precise calculation at a time, empowering innovation across every industry and discipline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Join the Conversion Revolution</h3>
            <p className="section-subtitle mb-8">
              Experience the precision, speed, and reliability that millions trust daily
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn btn-primary"
              >
                <span>Start Converting Now</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary"
              >
                <span>Contact Our Team</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
