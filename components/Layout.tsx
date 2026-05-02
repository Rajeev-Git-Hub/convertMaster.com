'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiFileText, FiLock, FiLink, FiClock, FiUser, FiPercent, FiTrendingUp, FiHome, FiActivity, FiSettings, FiChevronDown, FiChevronUp, FiCpu, FiZap, FiTool, FiLayers, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
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
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleSection = (sectionName: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md group-hover:shadow-lg transition-all duration-200 shrink-0">
            <FiLayers className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
            ConvertMaster
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <CategoryMenu selectedCategory={category} />
      </div>

      <div className="flex flex-1 overflow-x-hidden pt-16 md:pt-0">
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 md:top-16 w-64 h-[calc(100vh-4rem)] bg-gray-800 dark:bg-gray-950 border-r border-gray-700 dark:border-gray-800 overflow-y-auto custom-scrollbar transition-transform duration-300 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:block`}>
          <div className="p-2 md:p-6">
            {/* Main Navigation */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('main')}
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Main</span>
                <span>{collapsedSections['main'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['main'] && (
                <nav className="space-y-1">
                <Link
                  href="/all-converters"
                  className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Converters"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiActivity className="w-5 h-5 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                  <span className="md:inline">Converters</span>
                </Link>
                <Link
                  href="/analytics"
                  className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Analytics"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiTrendingUp className="w-5 h-5 md:w-4 md:h-4 text-purple-400 flex-shrink-0" />
                  <span className="md:inline">Analytics</span>
                </Link>
              </nav>
              )}
            </div>

            {/* Categories Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('categories')}
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Categories</span>
                <span>{collapsedSections['categories'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['categories'] && (
                <nav className="space-y-1">
                {sidebarCategories.map((c) => (
                  <Link
                    key={c.key}
                    href={`/${c.key}-converter`}
                    className={`flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                      category === c.key ? 'text-white bg-blue-600' : ''
                    }`}
                    title={t(`category.${c.key}`)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <c.icon className={`w-5 h-5 md:w-4 md:h-4 ${c.color} shrink-0`} />
                    <span>{t(`category.${c.key}`)}</span>
                    {category === c.key && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold shrink-0">Active</span>}
                  </Link>
                ))}
              </nav>
              )}
            </div>

            {/* Developer Tools Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('developerTools')}
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Developer Tools</span>
                <span>{collapsedSections['developerTools'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['developerTools'] && (
                <nav className="space-y-1">
                {developerToolsSidebar.map((tool) => {
                  const isActive = pathname === `/${tool.key}`;
                  return (
                    <Link
                      key={tool.key}
                      href={`/${tool.key}`}
                      className={`flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        isActive ? 'text-white bg-blue-600' : ''
                      }`}
                      title={tool.title}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <tool.icon className={`w-5 h-5 md:w-4 md:h-4 ${tool.color} flex-shrink-0`} />
                      <span className="md:inline">{tool.title}</span>
                      {isActive && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0">Active</span>}
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
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Engineering</span>
                <span>{collapsedSections['engineering'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['engineering'] && (
                <nav className="space-y-1">
                  {/* Main Engineering Page */}
                  <Link
                    href="/engineering-calculators"
                    className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="All Engineering Calculators"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiCpu className="w-5 h-5 md:w-4 md:h-4 text-orange-400 shrink-0" />
                    <span>All Engineering</span>
                  </Link>

                  {/* Mechanical Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('mechanical')}
                      className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span>Mechanical</span>
                      <span>{collapsedSections['mechanical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['mechanical'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/thermodynamics-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiActivity className="w-4 h-4 text-red-400 shrink-0" />
                          <span>Thermodynamics</span>
                        </Link>
                        <Link
                          href="/fluid-mechanics-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiGlobe className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>Fluid Mechanics</span>
                        </Link>
                        <Link
                          href="/stress-analysis-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiTool className="w-4 h-4 text-green-400 shrink-0" />
                          <span>Stress Analysis</span>
                        </Link>
                        <Link
                          href="/machine-design-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiCpu className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Machine Design</span>
                        </Link>
                        <Link
                          href="/concrete-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiLayers className="w-4 h-4 text-orange-400 shrink-0" />
                          <span>Concrete</span>
                        </Link>
                      </nav>
                    )}
                  </div>

                  {/* Electrical Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('electrical')}
                      className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span>Electrical</span>
                      <span>{collapsedSections['electrical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['electrical'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/ohms-law-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiZap className="w-4 h-4 text-yellow-400 shrink-0" />
                          <span>Ohm's Law</span>
                        </Link>
                        <Link
                          href="/circuit-analysis-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiActivity className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Circuit Analysis</span>
                        </Link>
                        <Link
                          href="/power-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiZap className="w-4 h-4 text-green-400 shrink-0" />
                          <span>Power Calculations</span>
                        </Link>
                      </nav>
                    )}
                  </div>

                  {/* Chemical Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('chemical')}
                      className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span>Chemical</span>
                      <span>{collapsedSections['chemical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['chemical'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/process-calculations"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiSettings className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>Process Calculations</span>
                        </Link>
                        <Link
                          href="/chemical-thermodynamics"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiActivity className="w-4 h-4 text-red-400 shrink-0" />
                          <span>Thermodynamics</span>
                        </Link>
                        <Link
                          href="/fluid-flow-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiGlobe className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Fluid Flow</span>
                        </Link>
                        <Link
                          href="/reaction-kinetics"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiZap className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Reaction Kinetics</span>
                        </Link>
                      </nav>
                    )}
                  </div>

                  {/* Electronics Engineering */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection('electronics')}
                      className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span>Electronics</span>
                      <span>{collapsedSections['electronics'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                    </button>
                    {!collapsedSections['electronics'] && (
                      <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                        <Link
                          href="/resistor-calculator"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiTool className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>Resistor</span>
                        </Link>
                        <Link
                          href="/electronics-tools"
                          className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiCpu className="w-4 h-4 text-green-400 shrink-0" />
                          <span>Electronics Tools</span>
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
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Utilities</span>
                <span>{collapsedSections['utilities'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
              </button>
              {!collapsedSections['utilities'] && (
                <nav className="space-y-1">
                  <Link
                    href="/time-duration-calculator"
                    className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Time Duration"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiClock className="w-5 h-5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                    <span>Time Duration</span>
                  </Link>
                  <Link
                    href="/percentage-calculator"
                    className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Percentage"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiPercent className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                    <span>Percentage</span>
                  </Link>
                  <Link
                    href="/age-calculator"
                    className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    title="Age Calculator"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiUser className="w-5 h-5 md:w-4 md:h-4 text-violet-400 shrink-0" />
                    <span>Age</span>
                  </Link>
                </nav>
              )}
            </div>

          </div>
        </aside>

        <main className={`flex-1 min-w-0 w-full overflow-x-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'md:ml-64' : 'ml-0 md:ml-64'
        }`}>
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