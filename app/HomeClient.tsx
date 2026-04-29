'use client';

import Link from 'next/link';
import { FiSearch, FiArrowRight, FiTrendingUp, FiShield, FiBarChart, FiZap, FiCheckCircle, FiUsers, FiClock, FiChevronRight, FiActivity } from 'react-icons/fi';
import { useLocalization } from '../lib/LocalizationContext';
import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import NewsletterSignup from '../components/NewsletterSignup';

const SearchDropdown = lazy(() => import('../components/SearchDropdown'));

const simpleSearch = (term: string) => {
  const converters = [
    { name: 'KG to LBS', category: 'weight' },
    { name: 'CM to Inches', category: 'length' },
    { name: 'Celsius to Fahrenheit', category: 'temperature' },
    { name: 'MB to GB', category: 'data' },
    { name: 'Meters to Feet', category: 'length' },
    { name: 'Miles to KM', category: 'length' },
  ];
  return converters.filter(c => 
    c.name.toLowerCase().includes(term.toLowerCase()) ||
    c.category.toLowerCase().includes(term.toLowerCase())
  );
};

function HomeContent() {
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConverters, setFilteredConverters] = useState<{ category: string; name: string }[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = simpleSearch(searchTerm);
      setFilteredConverters(results);
      setIsDropdownOpen(true);
    } else {
      setFilteredConverters([]);
      setIsDropdownOpen(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden">
        <div className="container py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="premium-badge">
                <FiZap className="w-3 h-3" />
                <span>AI-Powered</span>
              </div>
              <div className="badge badge-secondary">
                <FiActivity className="w-3 h-3" />
                <span>Instant</span>
              </div>
            </div>
            
            <h1 className="hero-gradient text-2xl font-bold mb-4">ConvertMaster</h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">The most advanced unit conversion platform with real-time calculations, historical tracking, and enterprise-grade accuracy.</p>

            <div className="max-w-2xl mx-auto mb-8" ref={searchContainerRef}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for any converter..."
                  className="input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsDropdownOpen(searchTerm.length > 0)}
                />
                {isDropdownOpen && (
                  <Suspense fallback={<div className="p-4 text-center text-gray-500">Loading...</div>}>
                    <SearchDropdown results={filteredConverters} onClose={() => setIsDropdownOpen(false)} />
                  </Suspense>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="metric-card">
                <div className="metric-label">Speed</div>
                <div className="metric-value">Instant</div>
                <div className="metric-change positive">
                  <FiArrowRight className="w-3 h-3" />
                  <span>Real-time Results</span>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Access</div>
                <div className="metric-value">Free Forever</div>
                <div className="metric-change positive">
                  <FiArrowRight className="w-3 h-3" />
                  <span>No Limits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 animate-slide-in-up">
        <div className="gradient-border p-8">
          <h3 className="section-title">Popular Converters</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: 'Weight', name: 'Weight', converters: 'KG to LBS, G to OZ' },
              { icon: 'Length', name: 'Length', converters: 'M to FT, CM to IN' },
              { icon: 'Temp', name: 'Temperature', converters: 'Celsius to Fahrenheit' },
              { icon: 'Data', name: 'Data', converters: 'MB to GB, KB to MB' },
            ].map((item, index) => (
              <Link
                key={index}
                href="/all-converters"
                className="card p-6 text-center group"
              >
                <div className="icon-box icon-box-primary mb-4">
                  <span className="text-lg font-bold">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.converters}</p>
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <span>Convert now</span>
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12 animate-slide-in-up">
        <div className="container">
          <h3 className="section-title">Why Choose ConvertMaster?</h3>
          <p className="section-subtitle">Advanced features designed for precision, speed, and reliability</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4">
                <FiTrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-sm text-gray-600 mb-4">
                Track conversion trends and usage patterns with comprehensive analytics dashboard.
              </p>
              <div className="flex items-center justify-center text-blue-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#10b981' }}>
                <FiShield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-sm text-gray-600 mb-4">
                Bank-level encryption with GDPR compliance and complete data privacy protection.
              </p>
              <div className="flex items-center justify-center text-green-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#8b5cf6' }}>
                <FiBarChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Calculations</h3>
              <p className="text-sm text-gray-600 mb-4">
                Precision engineering with support for complex units and scientific notation.
              </p>
              <div className="flex items-center justify-center text-purple-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="container">
          <h3 className="section-title">Trust Indicators</h3>
          <p className="section-subtitle">Why professionals choose ConvertMaster</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="icon-box mb-4">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Verified Accuracy</h4>
              <p className="text-sm text-gray-600">ISO certified calculations</p>
            </div>
            
            <div className="text-center">
              <div className="icon-box mb-4">
                <FiUsers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">50K+ Users</h4>
              <p className="text-sm text-gray-600">Trusted worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="icon-box mb-4">
                <FiClock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h4>
              <p className="text-sm text-gray-600">0.1s response time</p>
            </div>
            
            <div className="text-center">
              <div className="icon-box mb-4">
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Private</h4>
              <p className="text-sm text-gray-600">No data collection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="container text-center">
          <h3 className="section-title">Ready to Convert with Precision?</h3>
          <p className="section-subtitle">Join thousands of professionals who trust our platform for accurate, instant conversions every day.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/all-converters"
              className="btn btn-primary"
            >
              <span>Explore All Converters</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="btn btn-secondary"
            >
              <span>Learn More</span>
              <FiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}

export default function HomeClient() {
  return <HomeContent />;
}
