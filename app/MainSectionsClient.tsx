'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMaximize, FiImage, FiVideo, FiFileText, FiTool, FiArrowRight, FiSearch, FiChevronRight } from 'react-icons/fi';

const mainSections = [
  {
    name: 'Unit',
    icon: FiMaximize,
    color: 'blue',
    bgColor: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Convert length, weight, temperature, area, volume, time, speed, data, and more.',
    features: ['Length', 'Weight', 'Temperature', 'Area', 'Volume', 'Time', 'Speed', 'Data'],
    href: '/unit-conversion/',
    popular: [
      { name: 'CM to Inches', href: '/cm-to-inches' },
      { name: 'KG to LBS', href: '/kg-to-lbs' },
      { name: 'Celsius to Fahrenheit', href: '/celsius-to-fahrenheit' },
    ],
    active: true
  },
  {
    name: 'Image',
    icon: FiImage,
    color: 'purple',
    bgColor: 'bg-purple-600',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    description: 'Compress, convert, resize, crop, and edit your images easily online.',
    features: ['Compress', 'Convert', 'Resize', 'Crop', 'Rotate', 'Filters'],
    href: '#',
    popular: [
      { name: 'Compress Image', href: '#' },
      { name: 'JPG to PNG', href: '#' },
      { name: 'Resize Image', href: '#' },
    ],
    comingSoon: true
  },
  {
    name: 'Video',
    icon: FiVideo,
    color: 'red',
    bgColor: 'bg-red-600',
    lightColor: 'bg-red-50',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    description: 'Compress, convert, trim, merge, and edit videos without quality loss.',
    features: ['Compress', 'Convert', 'Trim', 'Merge', 'Add Audio', 'Subtitles'],
    href: '#',
    popular: [
      { name: 'Compress Video', href: '#' },
      { name: 'MP4 to AVI', href: '#' },
      { name: 'Trim Video', href: '#' },
    ],
    comingSoon: true
  },
  {
    name: 'PDF',
    icon: FiFileText,
    color: 'orange',
    bgColor: 'bg-orange-600',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    description: 'Merge, split, compress, convert, and edit PDF documents online.',
    features: ['Merge', 'Split', 'Compress', 'Convert', 'Edit', 'Protect'],
    href: '#',
    popular: [
      { name: 'Merge PDF', href: '#' },
      { name: 'PDF to Word', href: '#' },
      { name: 'Compress PDF', href: '#' },
    ],
    comingSoon: true
  },
  {
    name: 'Tools',
    icon: FiTool,
    color: 'green',
    bgColor: 'bg-green-600',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    description: 'Useful utilities including calculator, password generator, QR code, and more.',
    features: ['Calculator', 'Password', 'QR Code', 'JSON Formatter', 'Base64', 'Hash'],
    href: '#',
    popular: [
      { name: 'Calculator', href: '#' },
      { name: 'Password Generator', href: '#' },
      { name: 'QR Code Generator', href: '#' },
    ],
    comingSoon: true
  }
];

export default function MainSectionsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="relative container py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              All the tools you need,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                in one place
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Free online tools for unit conversion, image editing, video processing, 
              PDF management, and everyday utilities.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for tools... (e.g., 'cm to inches', 'compress image')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Grid */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainSections.map((section) => {
            const Icon = section.icon;
            const isHovered = hoveredSection === section.name;

            return (
              <div
                key={section.name}
                onMouseEnter={() => setHoveredSection(section.name)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`group relative rounded-2xl border-2 ${section.borderColor} bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 ${
                  isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'
                }`}
              >
                {/* Coming Soon Badge */}
                {section.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gray-900 dark:bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Active Badge */}
                {section.active && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`${section.bgColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      Active
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${section.lightColor} ${section.textColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${section.textColor}`}>
                        {section.name}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {section.features.length} tools
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {section.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {section.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs px-2 py-1 rounded-md ${section.lightColor} ${section.textColor} font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                    {section.features.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                        +{section.features.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Popular Tools */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Popular Tools
                    </p>
                    {section.popular.map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        className={`flex items-center justify-between p-2 rounded-lg hover:${section.lightColor} transition-colors group/tool`}
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/tool:text-gray-900 dark:group-hover/tool:text-white">
                          {tool.name}
                        </span>
                        <FiChevronRight className="w-4 h-4 text-gray-400 group-hover/tool:text-gray-600" />
                      </Link>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={section.href}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all ${
                      section.active
                        ? `${section.bgColor} text-white hover:opacity-90`
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={(e) => section.comingSoon && e.preventDefault()}
                  >
                    {section.active ? (
                      <>
                        Explore {section.name} Tools
                        <FiArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      'Coming Soon'
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Unit Converters</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-600">20+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Image Tools</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-red-600">15+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Video Tools</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-600">10+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Utilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container py-8">
          <div className="text-center">
            <p className="text-gray-400">
              ConvertMaster – Free online tools for everyone
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
