 'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md group-hover:shadow-lg transition-all duration-200 shrink-0">
              <FiLayers className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
              {t('app.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap"
            >
              {t('nav.about')}
            </Link>

            <Link
              href="/all-converters"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap"
            >
              All Converters
            </Link>

            <Link
              href="/engineering-calculators"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap"
            >
              Engineering
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap"
            >
              Blog
            </Link>

            {(Object.keys(CATEGORY_GROUPS) as GroupName[]).map((group) => (
              <div key={group} className="relative">
                <button
                  onClick={() => {
                    setActiveGroup(activeGroup === group ? null : group);
                    setSettingsOpen(false);
                  }}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                    activeGroup === group
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center">
                    {t(`nav.${group.toLowerCase()}`)}
                  </span>
                  <FiChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 shrink-0 ${
                      activeGroup === group ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {activeGroup === group && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-2 grid gap-1 p-2">
                      {group === 'developer' ? (
                        DEVELOPER_TOOLS.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={() => setActiveGroup(null)}
                              className={`flex items-center px-4 py-2.5 text-sm text-left rounded-lg transition-colors text-gray-700 hover:bg-gray-50`}
                            >
                              <Icon className={`mr-3 h-5 w-5 ${tool.color}`} />
                              {t(tool.titleKey)}
                            </Link>
                          );
                        })
                      ) : group === 'utilities' ? (
                        UTILITY_TOOLS.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={() => setActiveGroup(null)}
                              className={`flex items-center px-4 py-2.5 text-sm text-left rounded-lg transition-colors text-gray-700 hover:bg-gray-50`}
                            >
                              <Icon className={`mr-3 h-5 w-5 ${tool.color}`} />
                              {t(tool.titleKey)}
                            </Link>
                          );
                        })
                      ) : (
                        CATEGORY_GROUPS[group].map((catKey) => {
                          const category = categories.find((c) => c.key === catKey);
                          if (!category) return null;
                          
                          const Icon = category.icon;
                          const isSelected = selectedCategory === catKey;

                          return (
                            <Link
                              key={catKey}
                              href={`/${catKey}-converter`}
                              onClick={() => setActiveGroup(null)}
                              className={`flex items-center px-4 py-2.5 text-sm text-left rounded-lg transition-colors ${
                                isSelected
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <Icon className={`mr-3 h-5 w-5 ${category.color}`} />
                              {t(`category.${category.key}`)}
                            </Link>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
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
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
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
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {t('nav.about')}
              </Link>

              <Link
                href="/all-converters"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                All Converters
              </Link>

              <Link
                href="/engineering-calculators"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Engineering
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Blog
              </Link>

              {/* Mobile Dropdowns */}
              {(Object.keys(CATEGORY_GROUPS) as GroupName[]).map((group) => (
                <div key={group} className="space-y-1">
                  <button
                    onClick={() => setActiveGroup(activeGroup === group ? null : group)}
                    className={`w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-150 ${
                      activeGroup === group
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{t(`nav.${group.toLowerCase()}`)}</span>
                      <FiChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeGroup === group ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {activeGroup === group && (
                    <div className="pl-4 space-y-1">
                      {group === 'developer' ? (
                        DEVELOPER_TOOLS.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={() => {
                                setActiveGroup(null);
                                setMobileMenuOpen(false);
                              }}
                              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                              <Icon className={`mr-3 h-5 w-5 ${tool.color}`} />
                              {t(tool.titleKey)}
                            </Link>
                          );
                        })
                      ) : group === 'utilities' ? (
                        UTILITY_TOOLS.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={() => {
                                setActiveGroup(null);
                                setMobileMenuOpen(false);
                              }}
                              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                              <Icon className={`mr-3 h-5 w-5 ${tool.color}`} />
                              {t(tool.titleKey)}
                            </Link>
                          );
                        })
                      ) : (
                        CATEGORY_GROUPS[group].map((catKey) => {
                          const category = categories.find((c) => c.key === catKey);
                          if (!category) return null;
                          
                          const Icon = category.icon;
                          const isSelected = selectedCategory === catKey;

                          return (
                            <Link
                              key={catKey}
                              href={`/${catKey}-converter`}
                              onClick={() => {
                                setActiveGroup(null);
                                setMobileMenuOpen(false);
                              }}
                              className={`flex items-center px-3 py-2 text-sm rounded-md ${
                                isSelected
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <Icon className={`mr-3 h-5 w-5 ${category.color}`} />
                              {t(`category.${category.key}`)}
                            </Link>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>
              ))}

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