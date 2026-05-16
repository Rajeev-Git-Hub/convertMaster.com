'use client';

import React from 'react';
import Link from 'next/link';
import { FiHome, FiActivity, FiLayers, FiFileText, FiLock, FiLink, FiClock, FiPercent, FiUser, FiTrendingUp, FiSettings, FiMoon, FiSun } from 'react-icons/fi';

/**
 * PREVIEW: Proper Sidebar Navigation Design
 * 
 * This preview shows what the sidebar should look like for a unit converter application
 * without user accounts/signup functionality.
 * 
 * Key Changes from Current Sidebar:
 * - Removed hardcoded user profile (John Doe, Premium Account, PRO badge)
 * - Removed usage tracking bar
 * - Removed logout link
 * - Removed notifications link
 * - Added proper application branding
 * - Simplified navigation focused on tools and categories
 */

export default function SidebarPreview() {
  return (
    <div className="w-20 bg-gray-800 dark:bg-gray-950 border-r border-gray-700 dark:border-gray-800 overflow-y-auto p-6 min-h-screen">
      
      {/* Application Branding */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
            <FiLayers className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">ConvertMaster</h1>
            <p className="text-xs text-gray-400">Unit Converter</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Main</h3>
        <nav className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-blue-600 rounded-lg transition-colors"
          >
            <FiHome className="w-4" />
            <span>Home</span>
            <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>
          </Link>
          <Link
            href="/all-converters"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiActivity className="w-4 text-green-400" />
            <span>All Converters</span>
          </Link>
          <Link
            href="/utilities"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiTrendingUp className="w-4 text-purple-400" />
            <span>Utilities</span>
          </Link>
        </nav>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
        <nav className="space-y-1">
          <Link
            href="/length-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-blue-400">📏</span>
            <span>Length</span>
          </Link>
          <Link
            href="/weight-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-green-400">⚖️</span>
            <span>Weight</span>
          </Link>
          <Link
            href="/temperature-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-red-400">🌡️</span>
            <span>Temperature</span>
          </Link>
          <Link
            href="/area-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-yellow-400">📐</span>
            <span>Area</span>
          </Link>
          <Link
            href="/volume-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-cyan-400">🧊</span>
            <span>Volume</span>
          </Link>
          <Link
            href="/time-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-orange-400">⏰</span>
            <span>Time</span>
          </Link>
          <Link
            href="/speed-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-purple-400">🚀</span>
            <span>Speed</span>
          </Link>
          <Link
            href="/data-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="w-4 text-pink-400">💾</span>
            <span>Data</span>
          </Link>
        </nav>
      </div>

      {/* Developer Tools Section */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Developer Tools</h3>
        <nav className="space-y-1">
          <Link
            href="/json-formatter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiFileText className="w-4 text-blue-400" />
            <span>JSON Formatter</span>
          </Link>
          <Link
            href="/base64-encoder"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiLock className="w-4 text-green-400" />
            <span>Base64 Encoder</span>
          </Link>
          <Link
            href="/url-encoder"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiLink className="w-4 text-purple-400" />
            <span>URL Encoder</span>
          </Link>
          <Link
            href="/timestamp-converter"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiClock className="w-4 text-orange-400" />
            <span>Timestamp Converter</span>
          </Link>
        </nav>
      </div>

      {/* Utility Tools Section */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Utilities</h3>
        <nav className="space-y-1">
          <Link
            href="/age-calculator"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiUser className="w-4 text-violet-400" />
            <span>Age Calculator</span>
          </Link>
          <Link
            href="/percentage-calculator"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiPercent className="w-4 text-green-400" />
            <span>Percentage Calculator</span>
          </Link>
          <Link
            href="/tip-calculator"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiTrendingUp className="w-4 text-orange-400" />
            <span>Tip Calculator</span>
          </Link>
          <Link
            href="/time-duration-calculator"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiClock className="w-4 text-blue-400" />
            <span>Time Duration Calculator</span>
          </Link>
        </nav>
      </div>

      {/* Settings Section */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Settings</h3>
        <nav className="space-y-1">
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors w-full text-left">
            <FiSettings className="w-4" />
            <span>Language</span>
            <span className="ml-auto text-xs text-gray-400">English</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors w-full text-left">
            <FiMoon className="w-4" />
            <span>Dark Mode</span>
            <span className="ml-auto text-xs text-gray-400">Auto</span>
          </button>
        </nav>
      </div>

      {/* Footer Info */}
      <div className="border-t border-gray-700 pt-6">
        <p className="text-xs text-gray-500 text-center">
          Free & Open Source<br />
          No Account Required
        </p>
      </div>
    </div>
  );
}
