'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiShare2, FiGift } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  nextBirthdayDays: number;
  nextBirthdayDate: string;
  isBirthday: boolean;
}

export default function AgeCalculatorClient() {
  const { t } = useLocalization();
  const [birthDate, setBirthDate] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Auto-calculate when dates change
  useEffect(() => {
    if (birthDate && currentDate) {
      calculateAge();
    } else {
      setResult(null);
    }
  }, [birthDate, currentDate]);

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const current = new Date(currentDate);

    if (birth > current) {
      setResult(null);
      return;
    }

    // Calculate years, months, days
    let years = current.getFullYear() - birth.getFullYear();
    let months = current.getMonth() - birth.getMonth();
    let days = current.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total values
    const totalMs = current.getTime() - birth.getTime();
    const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(totalMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(totalMs / (1000 * 60));

    // Calculate next birthday
    const nextBirthYear = current.getMonth() > birth.getMonth() || 
                        (current.getMonth() === birth.getMonth() && current.getDate() > birth.getDate()) 
                        ? current.getFullYear() + 1 
                        : current.getFullYear();
    
    const nextBirthday = new Date(nextBirthYear, birth.getMonth(), birth.getDate());
    const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - current.getTime()) / (1000 * 60 * 60 * 24));
    
    const isBirthday = current.getMonth() === birth.getMonth() && current.getDate() === birth.getDate();

    setResult({
      years,
      months,
      days,
      totalDays,
      totalHours,
      totalMinutes,
      nextBirthdayDays,
      nextBirthdayDate: nextBirthday.toLocaleDateString(),
      isBirthday
    });
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // Clipboard access denied or failed
      setCopySuccess(false);
    }
  };

  const handleShare = async () => {
    if (result) {
      const shareText = `I am ${result.years} years, ${result.months} months, and ${result.days} days old! 🎉`;
      const shareUrl = window.location.href;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'My Age Calculation',
            text: shareText,
            url: shareUrl,
          });
        } else {
          await navigator.clipboard.writeText(shareUrl);
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        }
      } catch {
        // Share cancelled or failed
        setShareSuccess(false);
      }
    }
  };

  const handleClear = () => {
    setBirthDate('');
    setCurrentDate(new Date().toISOString().split('T')[0]);
    setResult(null);
  };

  const loadExample = (type: string) => {
    const today = new Date();
    let birth = new Date();
    
    switch (type) {
      case 'today':
        birth = new Date(today);
        break;
      case 'lastYear':
        birth = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        break;
      case 'decadeAgo':
        birth = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());
        break;
      default:
        birth = new Date(1990, 0, 1);
    }
    
    setBirthDate(birth.toISOString().split('T')[0]);
  };

  const formatAgeText = () => {
    if (!result) return '';
    
    const parts = [];
    if (result.years > 0) parts.push(`${result.years} ${t('age.years')}`);
    if (result.months > 0) parts.push(`${result.months} ${t('age.months')}`);
    if (result.days > 0) parts.push(`${result.days} ${t('age.days')}`);
    
    return parts.join(', ');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* SEO Content */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('age.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {t('age.subtitle')}
        </p>
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            {t('age.smart_features')}: {t('age.smart_desc')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Birth Date Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('age.date_of_birth')}
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
          />
        </div>

        {/* Current Date Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('age.current_date')}
          </label>
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <div className="mt-6 text-center">
        <button
          onClick={calculateAge}
          disabled={!birthDate || !currentDate}
          className="px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {t('age.calculate')}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8">
          {result.isBirthday && (
            <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <FiGift className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {t('age.birthday_message').replace('{age}', result.years.toString())}
                </p>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              {formatAgeText()}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{result.years}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('age.years')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{result.months}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('age.months')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{result.days}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('age.days')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{result.totalDays}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Days</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{result.totalHours.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('age.hours')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{result.totalMinutes.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('age.minutes')}</div>
              </div>
            </div>

            {!result.isBirthday && (
              <div className="mt-6 text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                <div className="text-gray-800 dark:text-gray-200">
                  <div className="font-medium">Next Birthday</div>
                  <div className="text-sm">In {result.nextBirthdayDays} days ({result.nextBirthdayDate})</div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => handleCopy(formatAgeText())}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <FiCopy className="w-4 h-4" />
              <span>{copySuccess ? t('age.copied') : t('age.copy')}</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <FiShare2 className="w-4 h-4" />
              <span>{shareSuccess ? t('base64.link_copied') : t('age.share')}</span>
            </button>
            
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-900/20 hover:bg-gray-200 dark:hover:bg-gray-900/40 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
            >
              {t('age.clear')}
            </button>
          </div>
        </div>
      )}

      {/* Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {t('age.load_examples')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => loadExample('today')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('age.today')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Newborn (0 days)</div>
          </button>
          <button
            onClick={() => loadExample('lastYear')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('age.last_year')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">1 year old</div>
          </button>
          <button
            onClick={() => loadExample('decadeAgo')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('age.decade_ago')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">10 years old</div>
          </button>
          <button
            onClick={() => loadExample('custom')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">Adult</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">25+ years old</div>
          </button>
        </div>
      </div>

      {/* Success Messages */}
      {copySuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg mt-6">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {t('age.copied')}
          </p>
        </div>
      )}

      {shareSuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg mt-6">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {t('age.share_copied')}
          </p>
        </div>
      )}
    </div>
  );
}
