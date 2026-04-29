'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiFileText, FiLock, FiLink, FiClock, FiUser, FiPercent, FiTrendingUp, FiHome, FiActivity, FiSettings, FiChevronDown, FiChevronUp } from 'react-icons/fi';
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
  { key: 'age-calculator', title: 'Age Calculator', icon: FiUser, color: 'text-violet-600' },
  { key: 'tip-calculator', title: 'Tip Calculator', icon: FiTrendingUp, color: 'text-orange-600' },
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

      <div className="flex flex-1">
        <aside className="hidden lg:block w-64 bg-gray-800 dark:bg-gray-950 border-r border-gray-700 dark:border-gray-800 overflow-y-auto flex-shrink-0 h-screen fixed left-0 top-0 custom-scrollbar">
          <div className="p-6">
            {/* Main Navigation */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('main')}
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Main</span>
                {collapsedSections['main'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </button>
              {!collapsedSections['main'] && (
                <nav className="space-y-1">
                <Link
                  href="/"
                  className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                    !category ? 'text-white bg-blue-600' : ''
                  }`}
                >
                  <FiHome className="w-4 text-blue-400" />
                  <span>Dashboard</span>
                  {!category && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                </Link>
                <Link
                  href="/all-converters"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiActivity className="w-4 text-green-400" />
                  <span>Converters</span>
                </Link>
                <Link
                  href="/analytics"
                  className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                    !category ? 'text-white bg-blue-600' : ''
                  }`}
                >
                  <FiTrendingUp className="w-4 text-purple-400" />
                  <span>Analytics</span>
                  {!category && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                </Link>
                <Link
                  href="/history"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiClock className="w-4 text-orange-400" />
                  <span>History</span>
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
                {collapsedSections['categories'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </button>
              {!collapsedSections['categories'] && (
                <nav className="space-y-1">
                {sidebarCategories.map((c) => (
                  <Link
                    key={c.key}
                    href={`/${c.key}-converter`}
                    className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                      category === c.key ? 'text-white bg-blue-600' : ''
                    }`}
                  >
                    <c.icon className={`w-4 ${c.color}`} />
                    <span>{t(`category.${c.key}`)}</span>
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
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Developer Tools</span>
                {collapsedSections['developerTools'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </button>
              {!collapsedSections['developerTools'] && (
                <nav className="space-y-1">
                {developerToolsSidebar.map((tool) => {
                  const isActive = pathname === `/${tool.key}`;
                  return (
                    <Link
                      key={tool.key}
                      href={`/${tool.key}`}
                      className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        isActive ? 'text-white bg-blue-600' : ''
                      }`}
                    >
                      <tool.icon className={`w-4 ${tool.color}`} />
                      <span>{tool.title}</span>
                      {isActive && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                    </Link>
                  );
                })}
              </nav>
              )}
            </div>

            {/* Tools Section */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('tools')}
                className="flex items-center justify-between w-full mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                <span>Tools</span>
                {collapsedSections['tools'] ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </button>
              {!collapsedSections['tools'] && (
                <nav className="space-y-1">
                <Link
                  href="/percentage-calculator"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiPercent className="w-4" />
                  <span>Percentage Calculator</span>
                </Link>
                <Link
                  href="/age-calculator"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiUser className="w-4" />
                  <span>Age Calculator</span>
                </Link>
                <Link
                  href="/tip-calculator"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiTrendingUp className="w-4" />
                  <span>Tip Calculator</span>
                </Link>
              </nav>
              )}
            </div>

          </div>
        </aside>

        <main className="flex-1 min-w-0 overflow-y-auto lg:ml-64">
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