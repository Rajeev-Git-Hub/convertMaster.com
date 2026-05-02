'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiFileText, FiLock, FiLink, FiClock, FiUser, FiPercent, FiTrendingUp, FiHome, FiActivity, FiSettings, FiChevronDown, FiChevronUp, FiCpu, FiZap, FiTool, FiLayers, FiGlobe } from 'react-icons/fi';
import { CategoryMenu } from '../lib/CategoryMenu';
import { LocalizationProvider, useLocalization } from '../lib/LocalizationContext';
import { CategoryKey } from '../lib';
import { categories } from '../lib/categories';
import Footer from './Footer';
import CommandPaletteProvider from './CommandPaletteProvider';
import DarkModeProvider from './DarkModeProvider';
import DarkModeToggle from './DarkModeToggle';

// Filter out dev-tools and utilities, and add individual tools
const sidebarCategories = categories.filter(c => c.key !== 'dev-tools' && c.key !== 'utilities');

// Individual developer tools for sidebar
const developerToolsSidebar = [
  { key: 'json-formatter', title: 'JSON Formatter', icon: FiFileText, color: 'text-blue-600' },
  { key: 'base64-encoder', title: 'Base64 Encoder', icon: FiLock, color: 'text-green-600' },
  { key: 'url-encoder', title: 'URL Encoder', icon: FiLink, color: 'text-purple-600' },
  { key: 'timestamp-converter', title: 'Timestamp Converter', icon: FiClock, color: 'text-orange-600' },
];

// Individual utility tools for sidebar
const utilityToolsSidebar = [
  { key: 'time-duration-calculator', title: 'Time Duration Calculator', icon: FiClock, color: 'text-violet-600' },
  { key: 'percentage-calculator', title: 'Percentage Calculator', icon: FiPercent, color: 'text-green-600' },
  { key: 'age-calculator', title: 'Age Calculator', icon: FiUser, color: 'text-violet-600' }
];

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const category = pathname?.split('/')[1] as CategoryKey | undefined;
  const { t } = useLocalization();
  
  // Collapsible state for each section
  const [collapsedSections, setCollapsedSections] = React.useState<Record<string, boolean>>({});

  const toggleSection = (sectionName: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <CategoryMenu selectedCategory={category} />

      <div className="flex flex-1 overflow-x-hidden">
        <aside className="fixed left-0 top-16 w-16 md:w-64 h-[calc(100vh-4rem)] bg-gray-800 dark:bg-gray-950 border-r border-gray-700 dark:border-gray-800 overflow-y-auto custom-scrollbar transition-all duration-300 z-40">
          <div className="p-2 md:p-6">
            {/* Main Navigation */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('main')}
                className="flex items-center justify-center md:justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span className="hidden md:inline">Main</span>
                <span className="md:hidden">...</span>
                <span className="hidden md:inline">{collapsedSections['main'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['main'] && (
                <nav className="space-y-1">
                <Link
                  href="/all-converters"
                  className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Converters"
                >
                  <FiActivity className="w-5 h-5 md:w-4 md:h-4 text-green-400" />
                  <span className="hidden md:inline">Converters</span>
                </Link>
                <Link
                  href="/analytics"
                  className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Analytics"
                >
                  <FiTrendingUp className="w-5 h-5 md:w-4 md:h-4 text-purple-400" />
                  <span className="hidden md:inline">Analytics</span>
                </Link>
              </nav>
              )}
            </div>

            {/* Categories Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('categories')}
                className="flex items-center justify-center md:justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span className="hidden md:inline">Categories</span>
                <span className="md:hidden">...</span>
                <span className="hidden md:inline">{collapsedSections['categories'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['categories'] && (
                <nav className="space-y-1">
                {sidebarCategories.map((c) => (
                  <Link
                    key={c.key}
                    href={`/${c.key}-converter`}
                    className={`flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                      category === c.key ? 'text-white bg-blue-600' : ''
                    }`}
                    title={t(`category.${c.key}`)}
                  >
                    <c.icon className={`w-5 h-5 md:w-4 md:h-4 ${c.color}`} />
                    <span className="hidden md:inline">{t(`category.${c.key}`)}</span>
                    {category === c.key && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                  </Link>
                ))}
              </nav>
              )}
            </div>

            {/* Developer Tools Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('developerTools')}
                className="flex items-center justify-center md:justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span className="hidden md:inline">Developer Tools</span>
                <span className="md:hidden">...</span>
                <span className="hidden md:inline">{collapsedSections['developerTools'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['developerTools'] && (
                <nav className="space-y-1">
                {developerToolsSidebar.map((tool) => {
                  const isActive = pathname === `/${tool.key}`;
                  return (
                    <Link
                      key={tool.key}
                      href={`/${tool.key}`}
                      className={`flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        isActive ? 'text-white bg-blue-600' : ''
                      }`}
                      title={tool.title}
                    >
                      <tool.icon className={`w-5 h-5 md:w-4 md:h-4 ${tool.color}`} />
                      <span className="hidden md:inline">{tool.title}</span>
                      {isActive && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                    </Link>
                  );
                })}
              </nav>
              )}
            </div>

            {/* Engineering Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('engineering')}
                className="flex items-center justify-center md:justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span className="hidden md:inline">Engineering</span>
                <span className="md:hidden">...</span>
                <span className="hidden md:inline">{collapsedSections['engineering'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['engineering'] && (
                <nav className="space-y-1">
                  {/* Main Engineering Page */}
                  <Link
                    href="/engineering-calculators"
                    className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="All Engineering Calculators"
                  >
                    <FiCpu className="w-5 h-5 md:w-4 md:h-4 text-orange-400" />
                    <span className="hidden md:inline">All Engineering</span>
                  </Link>

                  {/* Mechanical Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('mechanical')}
                      className="flex items-center justify-center md:justify-between w-full px-2 md:px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span className="hidden md:inline">Mechanical</span>
                      <span className="md:hidden">Mech</span>
                      <span className="hidden md:inline">{collapsedSections['mechanical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['mechanical'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/thermodynamics-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiActivity className="w-4 h-4 text-red-400" />
                          <span className="hidden md:inline">Thermodynamics</span>
                        </Link>
                        <Link
                          href="/fluid-mechanics-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiGlobe className="w-4 h-4 text-blue-400" />
                          <span className="hidden md:inline">Fluid Mechanics</span>
                        </Link>
                        <Link
                          href="/stress-analysis-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiTool className="w-4 h-4 text-green-400" />
                          <span className="hidden md:inline">Stress Analysis</span>
                        </Link>
                        <Link
                          href="/machine-design-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiCpu className="w-4 h-4 text-purple-400" />
                          <span className="hidden md:inline">Machine Design</span>
                        </Link>
                        <Link
                          href="/concrete-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiLayers className="w-4 h-4 text-orange-400" />
                          <span className="hidden md:inline">Concrete</span>
                        </Link>
                      </nav>
                    )}
                  </div>

                  {/* Electrical Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('electrical')}
                      className="flex items-center justify-center md:justify-between w-full px-2 md:px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span className="hidden md:inline">Electrical</span>
                      <span className="md:hidden">Elec</span>
                      <span className="hidden md:inline">{collapsedSections['electrical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['electrical'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/ohms-law-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiZap className="w-4 h-4 text-yellow-400" />
                          <span className="hidden md:inline">Ohm's Law</span>
                        </Link>
                        <Link
                          href="/circuit-analysis-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiActivity className="w-4 h-4 text-cyan-400" />
                          <span className="hidden md:inline">Circuit Analysis</span>
                        </Link>
                        <Link
                          href="/power-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiZap className="w-4 h-4 text-green-400" />
                          <span className="hidden md:inline">Power Calculations</span>
                        </Link>
                      </nav>
                    )}
                  </div>

                  {/* Chemical Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('chemical')}
                      className="flex items-center justify-center md:justify-between w-full px-2 md:px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span className="hidden md:inline">Chemical</span>
                      <span className="md:hidden">Chem</span>
                      <span className="hidden md:inline">{collapsedSections['chemical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['chemical'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/process-calculations"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiSettings className="w-4 h-4 text-blue-400" />
                          <span className="hidden md:inline">Process Calculations</span>
                        </Link>
                        <Link
                          href="/chemical-thermodynamics"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiActivity className="w-4 h-4 text-red-400" />
                          <span className="hidden md:inline">Thermodynamics</span>
                        </Link>
                        <Link
                          href="/fluid-flow-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiGlobe className="w-4 h-4 text-cyan-400" />
                          <span className="hidden md:inline">Fluid Flow</span>
                        </Link>
                        <Link
                          href="/reaction-kinetics"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiZap className="w-4 h-4 text-purple-400" />
                          <span className="hidden md:inline">Reaction Kinetics</span>
                        </Link>
                      </nav>
                    )}
                  </div>

                  {/* Electronics Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('electronics')}
                      className="flex items-center justify-center md:justify-between w-full px-2 md:px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span className="hidden md:inline">Electronics</span>
                      <span className="md:hidden">Elec</span>
                      <span className="hidden md:inline">{collapsedSections['electronics'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['electronics'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/resistor-calculator"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiTool className="w-4 h-4 text-blue-400" />
                          <span className="hidden md:inline">Resistor</span>
                        </Link>
                        <Link
                          href="/electronics-tools"
                          className="flex items-center justify-center md:justify-start gap-0 md:gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                        >
                          <FiCpu className="w-4 h-4 text-green-400" />
                          <span className="hidden md:inline">Electronics Tools</span>
                        </Link>
                      </nav>
                    )}
                  </div>
                </nav>
              )}
            </div>

            {/* Utilities Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('utilities')}
                className="flex items-center justify-center md:justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span className="hidden md:inline">Utilities</span>
                <span className="md:hidden">...</span>
                <span className="hidden md:inline">{collapsedSections['utilities'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['utilities'] && (
                <nav className="space-y-1">
                  <Link
                    href="/time-duration-calculator"
                    className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Time Duration"
                  >
                    <FiClock className="w-5 h-5 md:w-4 md:h-4 text-blue-400" />
                    <span className="hidden md:inline">Time Duration</span>
                  </Link>
                  <Link
                    href="/percentage-calculator"
                    className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Percentage"
                  >
                    <FiPercent className="w-5 h-5 md:w-4 md:h-4 text-green-400" />
                    <span className="hidden md:inline">Percentage</span>
                  </Link>
                  <Link
                    href="/age-calculator"
                    className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Age Calculator"
                  >
                    <FiUser className="w-5 h-5 md:w-4 md:h-4 text-violet-400" />
                    <span className="hidden md:inline">Age</span>
                  </Link>
                  <Link
                    href="/tip-calculator"
                    className="flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Tip Calculator"
                  >
                    <FiTrendingUp className="w-5 h-5 md:w-4 md:h-4 text-orange-400" />
                    <span className="hidden md:inline">Tip</span>
                  </Link>
                </nav>
              )}
            </div>

          </div>
        </aside>

        <main className="flex-1 min-w-0 w-full ml-16 md:ml-64 overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </div>
    </div>
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider>
      <DarkModeProvider>
        <CommandPaletteProvider>
          <LayoutContent>{children}</LayoutContent>
        </CommandPaletteProvider>
      </DarkModeProvider>
    </LocalizationProvider>
  );
}