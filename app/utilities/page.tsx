'use client';

import Link from 'next/link';
import { FiChevronRight, FiUser, FiClock, FiPercent, FiTrendingUp } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

const utilityTools = [
  {
    title: 'utilities.age_calculator',
    description: 'utilities.age_calculator.desc',
    icon: FiUser,
    href: '/age-calculator',
    color: 'text-violet-600',
    bgColor: 'bg-violet-100',
  },
  {
    title: 'utilities.time_duration',
    description: 'utilities.time_duration.desc',
    icon: FiClock,
    href: '/time-duration-calculator',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'utilities.percentage_calculator',
    description: 'utilities.percentage_calculator.desc',
    icon: FiPercent,
    href: '/percentage-calculator',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'utilities.interest_calculator',
    description: 'utilities.interest_calculator.desc',
    icon: FiTrendingUp,
    href: '/interest-calculator',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  }
];

export default function UtilitiesPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-violet-100 dark:bg-violet-900/20 rounded-full">
              <FiCalendar className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('utilities.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('utilities.subtitle')}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {utilityTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${tool.bgColor} dark:${tool.bgColor.replace('bg-', 'dark:bg-').replace('100', '900/20')} rounded-lg`}>
                  <tool.icon className={`w-6 h-6 ${tool.color} dark:${tool.color.replace('text-', 'dark:text-')}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {t(tool.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {t(tool.description)}
                  </p>
                  <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>{t('utilities.use_tool')}</span>
                    <FiChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            {t('utilities.why_choose')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-violet-600 dark:text-violet-400 font-bold">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('utilities.daily_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('utilities.daily_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('utilities.accurate_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('utilities.accurate_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 dark:text-green-400 font-bold">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('utilities.simple_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('utilities.simple_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-violet-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">{t('utilities.popular_calculations')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{t('utilities.age_calc')}</div>
              <div className="text-violet-100 text-sm">{t('utilities.age_calc_desc')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{t('utilities.time_duration')}</div>
              <div className="text-violet-100 text-sm">{t('utilities.time_duration_desc')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{t('utilities.percentages')}</div>
              <div className="text-violet-100 text-sm">{t('utilities.percentages_desc')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{t('utilities.tip_calc')}</div>
              <div className="text-violet-100 text-sm">{t('utilities.tip_calc_desc')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
