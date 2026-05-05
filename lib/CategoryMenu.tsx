 'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronDown, FiGlobe, FiCheck, FiLayers, FiSearch, FiFileText, FiLock, FiLink, FiClock, FiUser, FiPercent, FiTrendingUp, FiMenu, FiX } from 'react-icons/fi';
import { categories } from './categories';
import { CategoryKey } from './types';
import { useLocalization, Language } from './LocalizationContext';
import DarkModeToggle from '../components/DarkModeToggle';

// Define logical groups for the converters
export type GroupName = 'Common' | 'Professional' | 'developer' | 'utilities';

export const CATEGORY_GROUPS: Record<GroupName, CategoryKey[]> = {
  Common: ['length', 'weight', 'temperature', 'area', 'volume', 'time', 'speed'],
  Professional: ['data'],
  developer: ['dev-tools'],
  utilities: ['utilities'],
};

// Define individual tools for custom dropdowns
export const DEVELOPER_TOOLS = [
  { titleKey: 'devtools.json_formatter', href: '/json-formatter', icon: FiFileText, color: 'text-blue-600' },
  { titleKey: 'devtools.base64_encoder', href: '/base64-encoder', icon: FiLock, color: 'text-green-600' },
  { titleKey: 'devtools.url_encoder', href: '/url-encoder', icon: FiLink, color: 'text-purple-600' },
  { titleKey: 'devtools.timestamp_converter', href: '/timestamp-converter', icon: FiClock, color: 'text-orange-600' },
];

export const UTILITY_TOOLS = [
  { titleKey: 'utilities.age_calculator', href: '/age-calculator', icon: FiUser, color: 'text-violet-600' },
  { titleKey: 'utilities.time_duration', href: '/time-duration-calculator', icon: FiClock, color: 'text-blue-600' },
  { titleKey: 'utilities.percentage_calculator', href: '/percentage-calculator', icon: FiPercent, color: 'text-green-600' },
  { titleKey: 'utilities.tip_calculator', href: '/tip-calculator', icon: FiTrendingUp, color: 'text-orange-600' },
];

interface CategoryMenuProps {
  selectedCategory?: CategoryKey;
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({
  selectedCategory,
}) => {
  // Toggle to enable/disable builtin auth pages (signup/login)
  const AUTH_ENABLED = false
  const pathname = usePathname();
  const { t, language, setLanguage } = useLocalization();
  const [activeGroup, setActiveGroup] = useState<GroupName | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveGroup(null);
        setSettingsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-gray-900/60" ref={menuRef}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/convertMaster.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
              <FiLayers className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
              {t('app.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/unit-conversion/"
              className={`inline-flex items-center px-4 py-2 text-base font-bold rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                pathname?.includes('unit-conversion') 
                  ? 'text-blue-600 bg-blue-100' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Converter
            </Link>
            <Link
              href="/pdf-conversion/"
              className={`inline-flex items-center px-4 py-2 text-base font-bold rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                pathname?.includes('pdf') 
                  ? 'text-blue-600 bg-blue-100' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              PDF
            </Link>
            <Link
              href="/tools-conversion/"
              className={`inline-flex items-center px-4 py-2 text-base font-bold rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                pathname?.includes('tools-conversion') 
                  ? 'text-blue-600 bg-blue-100' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Tool
            </Link>
            <Link
              href="/blog"
              className={`inline-flex items-center px-4 py-2 text-base font-bold rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                pathname?.includes('blog') 
                  ? 'text-blue-600 bg-blue-100' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Mobile and Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle - Always visible */}
            <div className="flex items-center">
              <DarkModeToggle />
            </div>

            {/* Language Toggle - Hidden on mobile, visible on desktop */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => {
                  setSettingsOpen(!settingsOpen);
                  setActiveGroup(null);
                }}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 focus:outline-none ${
                  settingsOpen
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                aria-label="Change Language"
              >
                <FiGlobe className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{language === 'hi' ? 'हिंदी' : 'English'}</span>
                <FiChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    settingsOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {settingsOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden p-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Choose Language
                    </h4>
                    <div className="space-y-1">
                      {(['en', 'hi'] as Language[]).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`w-full flex items-center justify-between px-2 py-1.5 text-sm rounded-md ${
                            language === lang
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span>{lang === 'en' ? '🇬🇧 English' : '🇮🇳 हिंदी'}</span>
                          {language === lang && <FiCheck className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-4 py-3 space-y-2">
              <Link
                href="/unit-conversion/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg font-bold rounded-md ${
                  pathname?.includes('unit-conversion')
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Converter
              </Link>
              <Link
                href="/pdf-conversion/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg font-bold rounded-md ${
                  pathname?.includes('pdf')
                    ? 'text-orange-600 bg-orange-100'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                PDF
              </Link>
              <Link
                href="/tools-conversion/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg font-bold rounded-md ${
                  pathname?.includes('tools-conversion')
                    ? 'text-green-600 bg-green-100'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                Tool
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg font-bold rounded-md ${
                  pathname?.includes('blog')
                    ? 'text-purple-600 bg-purple-100'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Blog
              </Link>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="px-3 py-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Choose Language
                  </h4>
                  <div className="space-y-1">
                    {(['en', 'hi'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`w-full flex items-center justify-between px-2 py-1.5 text-sm rounded-md ${
                          language === lang
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{lang === 'en' ? '🇬🇧 English' : '🇮🇳 हिंदी'}</span>
                        {language === lang && <FiCheck className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};