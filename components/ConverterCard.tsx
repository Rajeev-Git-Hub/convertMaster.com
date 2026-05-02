'use client';

import { useState, useEffect } from 'react';
import {
  converters,
  CategoryKey,
  temperatureUnits,
  convert,
  conversionMeta,
  unitAliases
} from '../lib';
import { categories } from '../lib/categories';
import { useConversionHistory } from '../lib/hooks/useConversionHistory';
import { FaCalculator, FaCaretDown, FaArrowRight, FaExchangeAlt, FaCopy, FaShare, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLocalization } from '../lib/LocalizationContext';

type Props = {
  category: CategoryKey;
  defaultFrom?: string;
  defaultTo?: string;
};

export default function ConverterCard({ category, defaultFrom, defaultTo }: Props) {
  const { t } = useLocalization();
  const categoryInfo = categories.find((c) => c.key === category);
  const color = categoryInfo?.color.replace('text-', '') || 'gray-500';

  // Get conversion metadata
  const meta = conversionMeta[category];

  const units =
    category === 'temperature'
      ? temperatureUnits
      : category === 'analytics' || category === 'dev-tools' || category === 'utilities'
      ? []
      : Object.keys(converters[category]);

  const [value, setValue] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const { addConversion } = useConversionHistory();

  const handleCopy = async () => {
    if (result !== null && value && from && to) {
      const conversionText = `${value} ${from} = ${result} ${to}`;
      try {
        await navigator.clipboard.writeText(conversionText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleShare = async () => {
    if (result !== null && value && from && to) {
      const shareText = `I converted ${value} ${from} to ${result} ${to}!`;
      
      // Build shareable URL with conversion parameters
      const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
      const params = new URLSearchParams();
      params.set('value', value);
      params.set('from', from);
      params.set('to', to);
      const shareUrl = `${baseUrl}?${params.toString()}`;
      
      const fullText = `${shareText}\n\n${shareUrl}`;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'Unit Conversion Result',
            text: fullText,
          });
        } else {
          await navigator.clipboard.writeText(fullText);
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        }
      } catch (err) {
        console.error('Failed to share:', err);
      }
    }
  };

  // Validate input with comprehensive checks
  const validateInput = (inputValue: string): { isValid: boolean; error?: string; sanitizedValue?: number } => {
    if (!inputValue || inputValue.trim() === '') {
      return { isValid: false, error: t('converter.validation.empty') };
    }

    const trimmedValue = inputValue.trim();
    
    // Check for letters/non-numeric characters (except decimal point and minus)
    if (!/^-?\d*\.?\d*$/.test(trimmedValue)) {
      return { isValid: false, error: t('converter.validation.invalid_chars') };
    }

    const numValue = parseFloat(trimmedValue);
    
    if (isNaN(numValue)) {
      return { isValid: false, error: t('converter.validation.invalid') };
    }

    // Check for extremely large numbers (practical limit of 1 quadrillion)
    if (Math.abs(numValue) > 1e15) {
      return { isValid: false, error: t('converter.validation.too_large') };
    }

    // Check for extremely small numbers (practical minimum)
    if (numValue !== 0 && Math.abs(numValue) < 1e-10) {
      return { isValid: false, error: t('converter.validation.too_small') };
    }

    // Check for reasonable decimal precision (max 15 decimal places)
    const decimalMatch = trimmedValue.match(/\.(\d+)/);
    if (decimalMatch && decimalMatch[1].length > 15) {
      return { isValid: false, error: t('converter.validation.too_many_decimals') };
    }

    // Check if negative numbers are appropriate for this category
    if (numValue < 0 && !['temperature'].includes(category)) {
      return { isValid: false, error: t('converter.validation.no_negative') };
    }

    return { isValid: true, sanitizedValue: numValue };
  };
  useEffect(() => {
    if (!value) {
      setResult(null);
      setValidationError(null);
      return;
    }

    const validation = validateInput(value);
    if (!validation.isValid) {
      setResult(null);
      setValidationError(validation.error || t('converter.validation.invalid'));
      return;
    }

    if (from && to && validation.sanitizedValue !== undefined) {
      try {
        const conversionResult = convert(category, validation.sanitizedValue, from, to);
        setResult(conversionResult);
        setValidationError(null);
      } catch (error) {
        setResult(null);
        setValidationError(t('converter.error'));
      }
    } else {
      setResult(null);
    }
  }, [value, from, to, category, t]);

  const handleConvert = () => {
    const validation = validateInput(value);
    
    if (!validation.isValid) {
      setValidationError(validation.error || t('converter.validation.invalid'));
      setResult(null);
      return;
    }

    if (from && to && validation.sanitizedValue !== undefined) {
      try {
        const conversionResult = convert(category, validation.sanitizedValue, from, to);
        setResult(conversionResult);
        setValidationError(null);
        addConversion({
          category,
          value: validation.sanitizedValue,
          from,
          to,
          result: conversionResult,
        });
      } catch (error) {
        setResult(null);
        setValidationError(t('converter.error'));
      }
    } else {
      setResult(null);
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    // Set initial from/to values
    if (units.length > 0) {
      // Normalize default values using unitAliases
      const normalizedDefaultFrom = defaultFrom ? (unitAliases[defaultFrom.toLowerCase()] || defaultFrom) : null;
      const normalizedDefaultTo = defaultTo ? (unitAliases[defaultTo.toLowerCase()] || defaultTo) : null;
      
      if (!from || !units.includes(from)) {
        setFrom(normalizedDefaultFrom || units[0]);
      }
      if (!to || !units.includes(to)) {
        setTo(normalizedDefaultTo || (units.length > 1 ? units[1] : units[0]));
      }
    }
  }, [units, from, to, defaultFrom, defaultTo]);

  // Read URL parameters for shared conversions
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sharedValue = params.get('value');
      const sharedFrom = params.get('from');
      const sharedTo = params.get('to');
      
      if (sharedValue && sharedFrom && sharedTo) {
        setValue(sharedValue);
        if (units.includes(sharedFrom)) {
          setFrom(sharedFrom);
        }
        if (units.includes(sharedTo)) {
          setTo(sharedTo);
        }
      }
    }
  }, [units]);

  // For categories that don't have conversion units, show a message
  if (units.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full border border-gray-200 dark:border-gray-700 text-center">
        <div className="text-gray-600 dark:text-gray-400">
          <p className="text-lg font-medium mb-2">
            {category === 'analytics' && t('analytics.title')}
            {category === 'dev-tools' && t('devtools.title')}
            {category === 'utilities' && t('utilities.title')}
          </p>
          <p className="text-sm">
            {category === 'analytics' && 'View your conversion analytics and history'}
            {category === 'dev-tools' && 'Access developer tools and utilities'}
            {category === 'utilities' && 'Access utility tools and calculators'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full border border-gray-200 dark:border-gray-700">

      {/* --- Value Input --- */}
      <div className="mb-4">
        <label htmlFor="value-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('converter.value')}</label>
        <div className="relative">
          <FaCalculator className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
          <input
            id="value-input"
            type="number"
            inputMode="decimal"
            className={`w-full bg-gray-50 dark:bg-gray-700 border rounded-lg p-4 pl-12 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            placeholder={t('converter.placeholder')}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-invalid={validationError ? 'true' : 'false'}
            aria-describedby={validationError ? 'value-error' : undefined}
            aria-label={t('converter.value')}
          />
        </div>
        {validationError && (
          <div id="value-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert" aria-live="polite">
            {validationError}
          </div>
        )}
      </div>

      {/* --- From/To Selectors --- */}
      <div className="flex items-center gap-2 md:gap-4 mb-6">
        {/* From */}
        <div className="relative flex-1">
          <label htmlFor="from-unit" className="block text-xs text-gray-600 dark:text-gray-400 mb-1">{t('converter.from')}</label>
          <div className="relative">
            <select
              id="from-unit"
              className="w-full appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 flex-1 rounded-lg capitalize text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              aria-label={t('converter.from')}
            >
              {units.map((u) => ( <option key={u} value={u}>{u}</option> ))}
            </select>
            <FaCaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        {/* Swap Button */}
        <div className="mt-5">
            <button
                onClick={handleSwap}
                className="p-4 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:rotate-180 transition-all duration-300"
                aria-label="Swap units"
            >
                <FaExchangeAlt />
            </button>
        </div>

        {/* To */}
        <div className="relative flex-1">
          <label htmlFor="to-unit" className="block text-xs text-gray-600 dark:text-gray-400 mb-1">{t('converter.to')}</label>
          <div className="relative">
            <select
              id="to-unit"
              className="w-full appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 flex-1 rounded-lg capitalize text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              onChange={(e) => setTo(e.target.value)}
              value={to}
              aria-label={t('converter.to')}
            >
              {units.map((u) => ( <option key={u} value={u}>{u}</option>))}
            </select>
            <FaCaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* --- Buttons --- */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleConvert}
          className="flex-1 flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          {t('converter.convert')}
          <FaArrowRight />
        </button>
        <button
          onClick={() => {
            setValue('');
            setResult(null);
            setValidationError(null);
          }}
          className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-all duration-300 ease-in-out"
        >
          Reset
        </button>
      </div>

      {/* --- Result Display --- */}
      <div className="p-2 rounded-lg text-center border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Result</span>
        <div className="text-lg md:text-xl font-extrabold mt-1 wrap-break-word flex items-center justify-center">
          {result !== null ? (
            <span className="text-gray-900 dark:text-gray-100">{result}</span>
          ) : validationError ? (
            <span className="text-gray-700 dark:text-gray-300 text-lg">{validationError}</span>
          ) : (
            <span className="text-gray-400 text-sm md:text-base font-normal italic">
              {t('converter.result_placeholder')}
            </span>
          )}
        </div>

        {/* Copy and Share Buttons */}
        {result !== null && (
          <div className="mt-4">
            <div className="flex justify-center gap-3 mb-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
              >
                <FaCopy className="w-4 h-4" />
                {copySuccess ? t('converter.copied') : t('converter.copy')}
              </button>
              <button
                onClick={() => setShowSocialShare(!showSocialShare)}
                className="flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
              >
                <FaShare className="w-4 h-4" />
                {t('converter.share')}
              </button>
            </div>
            
            {/* Social Media Share Options */}
            {showSocialShare && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">Share to:</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`I converted ${value} ${from} to ${result} ${to}!\n\n${typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?value=' + value + '&from=' + from + '&to=' + to : ''}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-700">WhatsApp</span>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?value=' + value + '&from=' + from + '&to=' + to : '')}&quote=${encodeURIComponent(`I converted ${value} ${from} to ${result} ${to}!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-700">Facebook</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I converted ${value} ${from} to ${result} ${to}!`)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?value=' + value + '&from=' + from + '&to=' + to : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-700">Twitter</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?value=' + value + '&from=' + from + '&to=' + to : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-700">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent('Check out this conversion')}&body=${encodeURIComponent(`I converted ${value} ${from} to ${result} ${to}!\n\n${typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?value=' + value + '&from=' + from + '&to=' + to : ''}`)}`}
                    className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Share via Email"
                  >
                    <FaEnvelope className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-700">Email</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
