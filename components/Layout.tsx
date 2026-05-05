'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome,
  FiGrid,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiSettings,
  FiMoon,
  FiSun,
  FiUser,
  FiFileText,
  FiLink,
  FiLock,
  FiClock,
  FiPercent,
  FiTrendingUp,
  FiLayers,
  FiGlobe,
  FiGitMerge,
  FiMaximize,
  FiImage,
  FiVideo,
  FiTool,
  FiType,
  FiScissors,
  FiMinimize2,
  FiFile,
  FiRotateCw,
  FiUnlock,
  FiActivity,
  FiCpu,
  FiZap,
  FiBox,
  FiPackage,
  FiThermometer,
  FiDatabase,
  FiSquare,
  FiHash,
  FiBook,
  FiCalendar,
  FiDollarSign,
  FiRefreshCw
} from 'react-icons/fi';
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

// Individual developer tools for sidebar (removed - now only PDF tools in sidebar)
const developerToolsSidebar = [];

// Individual utility tools for sidebar (removed - now only PDF tools in sidebar)
const utilityToolsSidebar = [];

// Main sections for convertMaster.com sidebar
const mainSectionsSidebar = [
  { key: 'unit-conversion', title: 'Converter', icon: FiMaximize, color: 'text-blue-400', href: '/unit-conversion/', active: true },
  { key: 'pdf-conversion', title: 'PDF', icon: FiFileText, color: 'text-orange-400', href: '/pdf-conversion/', active: true },
  { key: 'tools', title: 'Tools', icon: FiTool, color: 'text-green-400', href: '/tools-conversion/', active: true },
];

// Developer tools for tools-conversion sidebar (removed - now only PDF tools in sidebar)
const developerToolsForTools = [];

// Utility tools for tools-conversion sidebar (removed - now only PDF tools in sidebar)
const utilityToolsForTools = [
  // PDF tools for sidebar - only the 9 specific tools requested
  { key: 'merge-pdf', title: 'Merge PDF', icon: FiGitMerge, color: 'text-orange-600' },
  { key: 'split-pdf', title: 'Split PDF', icon: FiScissors, color: 'text-green-600' },
  { key: 'compress-pdf', title: 'Compress PDF', icon: FiMinimize2, color: 'text-blue-600' },
  { key: 'pdf-to-word', title: 'PDF to Word', icon: FiFile, color: 'text-purple-600' },
  { key: 'pdf-to-excel', title: 'PDF to Excel', icon: FiFileText, color: 'text-indigo-600' },
  { key: 'pdf-to-jpg', title: 'PDF to JPG', icon: FiImage, color: 'text-cyan-600' },
  { key: 'rotate-pdf', title: 'Rotate PDF', icon: FiRotateCw, color: 'text-teal-600' },
  { key: 'protect-pdf', title: 'Protect PDF', icon: FiLock, color: 'text-red-600' },
  { key: 'unlock-pdf', title: 'Unlock PDF', icon: FiUnlock, color: 'text-yellow-600' }
];

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathSegment = pathname?.split('/')[1];
// Only treat as category if it's exactly a category key (not an individual converter)
const category = (pathSegment === 'length' || pathSegment === 'weight' || pathSegment === 'temperature' || pathSegment === 'data')
  ? (pathSegment as CategoryKey)
  : undefined;
  const { t } = useLocalization();
  const isConvertMasterPage = pathname?.includes('/convertMaster.com') || pathname === '/convertMaster.com';
  
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col" suppressHydrationWarning>
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link
            href="/convertMaster.com"
            className="font-bold text-xl tracking-tight text-gray-900 dark:text-white whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ConvertMaster
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/blog"
            className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Header - Same for all pages */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <CategoryMenu selectedCategory={category} />
      </div>

      <div className="flex flex-1 overflow-x-hidden pt-16 md:pt-16">
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 md:top-16 w-64 h-[calc(100vh-4rem)] bg-gray-800 dark:bg-gray-950 border-r border-gray-700 dark:border-gray-800 overflow-y-auto custom-scrollbar z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:block transition-transform duration-300`}>
          <div className="p-2 md:p-6">
            {isConvertMasterPage ? (
              /* ConvertMaster.com Main Sections Sidebar */
              <div className="mb-8">
                <nav className="space-y-1">
                  {mainSectionsSidebar.map((section) => {
                    const isActive = pathname === section.href || (section.key === 'unit-conversion' && pathname === '/unit-conversion/');
                    return (
                      <Link
                        key={section.key}
                        href={section.href}
                        className={`flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                          isActive ? 'text-white bg-blue-600' : ''
                        }`}
                        title={section.title}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <section.icon className={`w-5 h-5 md:w-4 md:h-4 ${section.color} shrink-0`} />
                        <span>{section.title}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ) : pathname?.includes('/unit-conversion') ? (
              /* Unit Conversion Sidebar - PDF, Tools, Collapsible Converter */
              <>
                {/* PDF and Tools - Standalone */}
                <div className="mb-4">
                  <nav className="space-y-1">
                    <Link
                      href="/pdf-conversion/"
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname?.includes('pdf') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                      }`}
                      title="PDF"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiFileText className="w-5 h-5 md:w-4 md:h-4 text-orange-400 shrink-0" />
                      <span>PDF</span>
                    </Link>
                    <Link
                      href="/tools-conversion/"
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname?.includes('tools-conversion') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                      }`}
                      title="Tools"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiTool className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                      <span>Tools</span>
                    </Link>
                  </nav>
                </div>

                {/* Converter - Collapsible Section */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('converter')}
                    className="flex items-center justify-between w-full mb-4 text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <FiMaximize className="w-5 h-5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                      <span>Converter</span>
                    </div>
                    <span>{collapsedSections['converter'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
                  </button>
                  {!collapsedSections['converter'] && (
                    <>
                      {/* All Converters */}
                      <nav className="space-y-1 mb-4">
                        <Link
                          href="/all-converters"
                          className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                          title="All Converters"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FiActivity className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                          <span>All Converters</span>
                        </Link>
                      </nav>

                      {/* Categories Section - Alphabetical */}
                      <div className="mb-4">
                        <button
                          onClick={() => toggleSection('categories')}
                          className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <span>Categories</span>
                          <span>{collapsedSections['categories'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                        </button>
                        {!collapsedSections['categories'] && (
                          <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                            <Link href="/area-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'area' ? 'text-white bg-blue-600' : ''}`} title="Area" onClick={() => setMobileMenuOpen(false)}><FiGrid className="w-4 h-4 text-yellow-400 shrink-0" /><span>Area</span></Link>
                            <Link href="/data-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'data' ? 'text-white bg-blue-600' : ''}`} title="Data" onClick={() => setMobileMenuOpen(false)}><FiDatabase className="w-4 h-4 text-indigo-400 shrink-0" /><span>Data</span></Link>
                            <Link href="/length-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'length' ? 'text-white bg-blue-600' : ''}`} title="Length" onClick={() => setMobileMenuOpen(false)}><FiMaximize className="w-4 h-4 text-blue-400 shrink-0" /><span>Length</span></Link>
                            <Link href="/speed-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'speed' ? 'text-white bg-blue-600' : ''}`} title="Speed" onClick={() => setMobileMenuOpen(false)}><FiTrendingUp className="w-4 h-4 text-orange-400 shrink-0" /><span>Speed</span></Link>
                            <Link href="/temperature-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'temperature' ? 'text-white bg-blue-600' : ''}`} title="Temperature" onClick={() => setMobileMenuOpen(false)}><FiThermometer className="w-4 h-4 text-red-400 shrink-0" /><span>Temperature</span></Link>
                            <Link href="/time-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'time' ? 'text-white bg-blue-600' : ''}`} title="Time" onClick={() => setMobileMenuOpen(false)}><FiClock className="w-4 h-4 text-teal-400 shrink-0" /><span>Time</span></Link>
                            <Link href="/volume-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'volume' ? 'text-white bg-blue-600' : ''}`} title="Volume" onClick={() => setMobileMenuOpen(false)}><FiBox className="w-4 h-4 text-purple-400 shrink-0" /><span>Volume</span></Link>
                            <Link href="/weight-converter" className={`flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors ${category === 'weight' ? 'text-white bg-blue-600' : ''}`} title="Weight" onClick={() => setMobileMenuOpen(false)}><FiPackage className="w-4 h-4 text-green-400 shrink-0" /><span>Weight</span></Link>
                          </nav>
                        )}
                      </div>

                      {/* Engineering Section - Alphabetical */}
                      <div className="mb-4">
                        <button
                          onClick={() => toggleSection('engineering')}
                          className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <span>Engineering</span>
                          <span>{collapsedSections['engineering'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span>
                        </button>
                        {!collapsedSections['engineering'] && (
                          <nav className="space-y-1 pl-2 md:pl-4 mt-1">
                            <Link href="/engineering-calculators" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" title="All Engineering" onClick={() => setMobileMenuOpen(false)}><FiCpu className="w-4 h-4 text-orange-400 shrink-0" /><span>All Engineering</span></Link>

                            {/* Chemical - Alphabetical */}
                            <div className="mb-2">
                              <button onClick={() => toggleSection('chemical')} className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"><span>Chemical</span><span>{collapsedSections['chemical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span></button>
                              {!collapsedSections['chemical'] && (
                                <nav className="space-y-1 pl-2 mt-1">
                                  <Link href="/fluid-flow-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiGlobe className="w-3 h-3 text-cyan-400 shrink-0" /><span>Fluid Flow</span></Link>
                                  <Link href="/process-calculations" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiSettings className="w-3 h-3 text-blue-400 shrink-0" /><span>Process Calculations</span></Link>
                                  <Link href="/reaction-kinetics" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiZap className="w-3 h-3 text-purple-400 shrink-0" /><span>Reaction Kinetics</span></Link>
                                  <Link href="/chemical-thermodynamics" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiActivity className="w-3 h-3 text-red-400 shrink-0" /><span>Thermodynamics</span></Link>
                                </nav>
                              )}
                            </div>

                            {/* Electrical - Alphabetical */}
                            <div className="mb-2">
                              <button onClick={() => toggleSection('electrical')} className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"><span>Electrical</span><span>{collapsedSections['electrical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span></button>
                              {!collapsedSections['electrical'] && (
                                <nav className="space-y-1 pl-2 mt-1">
                                  <Link href="/circuit-analysis-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiActivity className="w-3 h-3 text-cyan-400 shrink-0" /><span>Circuit Analysis</span></Link>
                                  <Link href="/ohms-law-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiZap className="w-3 h-3 text-yellow-400 shrink-0" /><span>Ohm's Law</span></Link>
                                  <Link href="/power-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiZap className="w-3 h-3 text-green-400 shrink-0" /><span>Power Calculations</span></Link>
                                </nav>
                              )}
                            </div>

                            {/* Electronics - Alphabetical */}
                            <div className="mb-2">
                              <button onClick={() => toggleSection('electronics')} className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"><span>Electronics</span><span>{collapsedSections['electronics'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span></button>
                              {!collapsedSections['electronics'] && (
                                <nav className="space-y-1 pl-2 mt-1">
                                  <Link href="/electronics-tools" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiCpu className="w-3 h-3 text-green-400 shrink-0" /><span>Electronics Tools</span></Link>
                                  <Link href="/resistor-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiTool className="w-3 h-3 text-blue-400 shrink-0" /><span>Resistor</span></Link>
                                </nav>
                              )}
                            </div>

                            {/* Mechanical - Alphabetical */}
                            <div className="mb-2">
                              <button onClick={() => toggleSection('mechanical')} className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"><span>Mechanical</span><span>{collapsedSections['mechanical'] ? <FiChevronUp className="w-3 h-3" /> : <FiChevronDown className="w-3 h-3" />}</span></button>
                              {!collapsedSections['mechanical'] && (
                                <nav className="space-y-1 pl-2 mt-1">
                                  <Link href="/concrete-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiLayers className="w-3 h-3 text-orange-400 shrink-0" /><span>Concrete</span></Link>
                                  <Link href="/fluid-mechanics-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiGlobe className="w-3 h-3 text-blue-400 shrink-0" /><span>Fluid Mechanics</span></Link>
                                  <Link href="/machine-design-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiCpu className="w-3 h-3 text-purple-400 shrink-0" /><span>Machine Design</span></Link>
                                  <Link href="/stress-analysis-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiTool className="w-3 h-3 text-green-400 shrink-0" /><span>Stress Analysis</span></Link>
                                  <Link href="/thermodynamics-calculator" className="flex items-center justify-start gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiActivity className="w-3 h-3 text-red-400 shrink-0" /><span>Thermodynamics</span></Link>
                                </nav>
                              )}
                            </div>
                          </nav>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : pathname?.includes('pdf-conversion') ? (
              /* PDF Conversion Sidebar - Tools, Converter standalone, PDF collapsible */
              <>
                {/* Tools and Converter - Standalone */}
                <div className="mb-4">
                  <nav className="space-y-1">
                    <Link
                      href="/tools-conversion/"
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname?.includes('tools-conversion') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                      }`}
                      title="Tools"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiTool className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                      <span>Tools</span>
                    </Link>
                    <Link
                      href="/unit-conversion/"
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname?.includes('unit-conversion') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                      }`}
                      title="Converter"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiMaximize className="w-5 h-5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                      <span>Converter</span>
                    </Link>
                  </nav>
                </div>

                {/* PDF - Collapsible Section */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('pdf')}
                    className="flex items-center justify-between w-full mb-4 text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <FiFileText className="w-5 h-5 md:w-4 md:h-4 text-orange-400 shrink-0" />
                      <span>PDF</span>
                    </div>
                    <span>{collapsedSections['pdf'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
                  </button>
                  {!collapsedSections['pdf'] && (
                    <div className="mb-8">
                      <nav className="space-y-1">
                        {utilityToolsForTools.map((tool) => {
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
                              <tool.icon className={`w-5 h-5 md:w-4 md:h-4 ${tool.color} shrink-0`} />
                              <span>{tool.title}</span>
                              {isActive && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold shrink-0">Active</span>}
                            </Link>
                          );
                        })}
                      </nav>
                    </div>
                  )}
                </div>
              </>
            ) : pathname?.includes('tools-conversion') ? (
              /* Tools Conversion Sidebar - Converter, PDF standalone, Tools collapsible */
              <>
                {/* Converter and PDF - Standalone */}
                <div className="mb-4">
                  <nav className="space-y-1">
                    <Link
                      href="/unit-conversion/"
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname?.includes('unit-conversion') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                      }`}
                      title="Converter"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiMaximize className="w-5 h-5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                      <span>Converter</span>
                    </Link>
                    <Link
                      href="/pdf-conversion/"
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname?.includes('pdf') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                      }`}
                      title="PDF"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiFileText className="w-5 h-5 md:w-4 md:h-4 text-orange-400 shrink-0" />
                      <span>PDF</span>
                    </Link>
                  </nav>
                </div>

                {/* Tools - Collapsible Section */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('tools')}
                    className="flex items-center justify-between w-full mb-4 text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <FiTool className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                      <span>Tools</span>
                    </div>
                    <span>{collapsedSections['tools'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}</span>
                  </button>
                  {!collapsedSections['tools'] && (
                    <nav className="space-y-1 pl-2">
                      {/* General Tools - Alphabetical */}
                      <Link href="/age-calculator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiUser className="w-3 h-3 text-violet-400 shrink-0" /><span>Age Calculator</span></Link>
                      <Link href="/case-converter/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiType className="w-3 h-3 text-blue-400 shrink-0" /><span>Case Converter</span></Link>
                      <Link href="/date-calculator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiCalendar className="w-3 h-3 text-orange-400 shrink-0" /><span>Date Calculator</span></Link>
                      <Link href="/financial-calculator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiDollarSign className="w-3 h-3 text-teal-400 shrink-0" /><span>Financial Calculator</span></Link>
                      <Link href="/password-generator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiLock className="w-3 h-3 text-green-400 shrink-0" /><span>Password Generator</span></Link>
                      <Link href="/percentage-calculator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiPercent className="w-3 h-3 text-green-400 shrink-0" /><span>Percentage Calculator</span></Link>
                      <Link href="/qr-code-generator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiSquare className="w-3 h-3 text-cyan-400 shrink-0" /><span>QR Code Generator</span></Link>
                      <Link href="/random-number-generator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiRefreshCw className="w-3 h-3 text-yellow-400 shrink-0" /><span>Random Number Generator</span></Link>
                      <Link href="/scientific-calculator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiHash className="w-3 h-3 text-indigo-400 shrink-0" /><span>Scientific Calculator</span></Link>
                      <Link href="/scientific-converter/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiBook className="w-3 h-3 text-purple-400 shrink-0" /><span>Scientific Converter</span></Link>
                      <Link href="/text-counter/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiType className="w-3 h-3 text-pink-400 shrink-0" /><span>Text Counter</span></Link>
                      <Link href="/time-duration-calculator/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiClock className="w-3 h-3 text-blue-400 shrink-0" /><span>Time Duration Calculator</span></Link>
                      <Link href="/base64-encoder/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiLock className="w-3 h-3 text-green-400 shrink-0" /><span>Base64 Encoder</span></Link>
                      <Link href="/json-formatter/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiFileText className="w-3 h-3 text-blue-400 shrink-0" /><span>JSON Formatter</span></Link>
                      <Link href="/timestamp-converter/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiClock className="w-3 h-3 text-orange-400 shrink-0" /><span>Timestamp Converter</span></Link>
                      <Link href="/url-encoder/" className="flex items-center justify-start gap-2 px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}><FiLink className="w-3 h-3 text-purple-400 shrink-0" /><span>URL Encoder</span></Link>
                    </nav>
                  )}
                </div>
              </>
            ) : pathname?.includes('blog') ? (
              /* Blog Page Sidebar - Converter, PDF, Tools standalone only */
              <div className="mb-4">
                <nav className="space-y-1">
                  <Link
                    href="/unit-conversion/"
                    className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname?.includes('unit-conversion') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                    }`}
                    title="Converter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiMaximize className="w-5 h-5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                    <span>Converter</span>
                  </Link>
                  <Link
                    href="/pdf-conversion/"
                    className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname?.includes('pdf') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                    }`}
                    title="PDF"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiFileText className="w-5 h-5 md:w-4 md:h-4 text-orange-400 shrink-0" />
                    <span>PDF</span>
                  </Link>
                  <Link
                    href="/tools-conversion/"
                    className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname?.includes('tools-conversion') ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-gray-700'
                    }`}
                    title="Tools"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiTool className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                    <span>Tools</span>
                  </Link>
                </nav>
              </div>
            ) : (
            <>
            {/* Main Navigation */}
            <div className="mb-8">
              <nav className="space-y-1">
                <Link
                  href="/all-converters"
                  className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Converters"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiActivity className="w-5 h-5 md:w-4 md:h-4 text-green-400 shrink-0" />
                  <span>Converters</span>
                </Link>
                <Link
                  href="/analytics"
                  className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Analytics"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiTrendingUp className="w-5 h-5 md:w-4 md:h-4 text-purple-400 flex-shrink-0" />
                  <span>Analytics</span>
                </Link>
              </nav>
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

            
            </>
            )}
          </div>
        </aside>

        <main className="flex-1 min-w-0 w-full ml-0 md:ml-64 overflow-x-hidden">
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