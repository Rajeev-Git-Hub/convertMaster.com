'use client';

import React from 'react';
import Link from 'next/link';
import { FiLayers } from 'react-icons/fi';
import { useLocalization } from '../lib/LocalizationContext';

export default function Footer() {
  const { t } = useLocalization();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <FiLayers className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">ConvertMaster</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <span className="font-bold text-gray-900 mx-1">|</span>
            <Link href="/terms" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <span className="font-bold text-gray-900 mx-1">|</span>
            <Link href="/disclaimer" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} ConvertMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
