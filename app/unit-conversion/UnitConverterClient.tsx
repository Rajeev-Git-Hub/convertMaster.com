'use client';

import { Suspense, useState, useMemo } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiMaximize, FiAnchor, FiThermometer, FiClock, FiGlobe, FiGrid, FiSearch, FiHome } from 'react-icons/fi';

const unitCategories = [
  { 
    name: 'Length', 
    icon: FiMaximize, 
    color: 'bg-blue-600', 
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Convert between meters, feet, inches, cm, km, miles',
    converters: ['cm-to-inches', 'inches-to-cm', 'meters-to-feet', 'feet-to-meters', 'km-to-miles', 'miles-to-km']
  },
  { 
    name: 'Weight', 
    icon: FiAnchor, 
    color: 'bg-green-600', 
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    description: 'Convert between kg, lbs, grams, ounces, tons',
    converters: ['kg-to-lbs', 'lbs-to-kg', 'grams-to-ounces', 'ounces-to-grams']
  },
  { 
    name: 'Temperature', 
    icon: FiThermometer, 
    color: 'bg-orange-600', 
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    description: 'Convert between Celsius, Fahrenheit, Kelvin',
    converters: ['celsius-to-fahrenheit', 'fahrenheit-to-celsius']
  },
  { 
    name: 'Time', 
    icon: FiClock, 
    color: 'bg-purple-600', 
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Convert between seconds, minutes, hours, days',
    converters: ['seconds-to-minutes', 'minutes-to-hours', 'hours-to-days']
  },
  { 
    name: 'Data', 
    icon: FiGlobe, 
    color: 'bg-pink-600', 
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    description: 'Convert between bytes, KB, MB, GB, TB',
    converters: ['mb-to-gb', 'gb-to-tb', 'bytes-to-kb']
  },
];

const popularConverters = [
  { name: 'CM to Inches', href: '/cm-to-inches', category: 'Length' },
  { name: 'KG to LBS', href: '/kg-to-lbs', category: 'Weight' },
  { name: 'Celsius to Fahrenheit', href: '/celsius-to-fahrenheit', category: 'Temperature' },
  { name: 'Inches to CM', href: '/inches-to-cm', category: 'Length' },
  { name: 'Miles to KM', href: '/miles-to-km', category: 'Length' },
  { name: 'Feet to Meters', href: '/feet-to-meters', category: 'Length' },
];

export default function UnitConverterClient() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConverters = useMemo(() => {
    if (!searchTerm) return [];
    return popularConverters.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FiHome className="w-5 h-5" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <FiArrowRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-600 font-semibold">Unit Converter</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-900/20 dark:to-cyan-900/20" />
        <div className="relative container py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Unit Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Free online unit conversion tools. Convert between metric, imperial, and local units instantly.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search converters... (e.g., 'cm to inches')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Search Dropdown */}
              {searchTerm && filteredConverters.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                  {filteredConverters.map((converter) => (
                    <Link
                      key={converter.name}
                      href={converter.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                        <FiSearch className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{converter.name}</p>
                        <p className="text-sm text-gray-500">{converter.category}</p>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ))}
                  <Link
                    href="/all-converters"
                    className="block w-full text-center py-3 text-blue-600 font-medium hover:bg-blue-50 border-t border-gray-200 dark:border-gray-700"
                  >
                    View all converters →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Converters */}
      <section className="container pb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiGrid className="w-5 h-5 text-blue-600" />
              Popular Converters
            </h2>
            <Link href="/all-converters" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {popularConverters.map((converter) => (
              <Link
                key={converter.name}
                href={converter.href}
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all text-center group"
              >
                <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 text-sm">
                  {converter.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{converter.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="container pb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unitCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${category.bgColor} ${category.textColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.converters.slice(0, 4).map((converter) => (
                      <Link
                        key={converter}
                        href={`/${converter}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                          {converter.replace(/-/g, ' ')}
                        </span>
                        <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </Link>
                    ))}
                    {category.converters.length > 4 && (
                      <Link
                        href="/all-converters"
                        className="flex items-center justify-center gap-2 w-full py-2 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      >
                        +{category.converters.length - 4} more
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Back to Home */}
      <section className="container pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FiHome className="w-5 h-5" />
          <span className="font-medium">← Back to ConvertMaster Home</span>
        </Link>
      </section>
    </div>
  );
}
