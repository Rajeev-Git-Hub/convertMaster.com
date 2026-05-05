'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ROICalculatorPage() {
  const [cost, setCost] = useState('');
  const [gain, setGain] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateROI = () => {
    const c = parseFloat(cost);
    const g = parseFloat(gain);
    if (c && g && c > 0) {
      const roi = ((g - c) / c) * 100;
      setResult(roi);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ROI Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate Return on Investment percentage
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">💹</div>
                <p className="text-gray-600 dark:text-gray-400">Enter investment cost and return to calculate ROI</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="Initial investment cost..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <input 
                    type="number" 
                    value={gain}
                    onChange={(e) => setGain(e.target.value)}
                    placeholder="Final return value..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={calculateROI}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Calculate ROI
                  </button>
                  {result !== null && (
                    <div className={`mt-4 p-4 rounded-lg ${result >= 0 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                      <p className="text-lg text-gray-700 dark:text-gray-300">ROI:</p>
                      <p className={`text-3xl font-bold ${result >= 0 ? 'text-green-600' : 'text-red-600'}`}>{result.toFixed(2)}%</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">ROI Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">ROI = ((Gain - Cost) / Cost) × 100</p>
              <div className="mt-4 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">• Positive ROI = Profit (Gain {'>'} Cost)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• Negative ROI = Loss (Gain {'<'} Cost)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• 0% ROI = Break even (Gain = Cost)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Example Calculations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { cost: '$1,000', gain: '$1,200', roi: '+20%' },
              { cost: '$5,000', gain: '$6,500', roi: '+30%' },
              { cost: '$10,000', gain: '$8,000', roi: '-20%' },
              { cost: '$2,500', gain: '$3,000', roi: '+20%' },
              { cost: '$50,000', gain: '$75,000', roi: '+50%' },
              { cost: '$100,000', gain: '$110,000', roi: '+10%' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="text-gray-600 dark:text-gray-400">Invested: {item.cost}</p>
                <p className="text-gray-600 dark:text-gray-400">Return: {item.gain}</p>
                <p className={`font-bold text-xl ${item.roi.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{item.roi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/compound-interest-calculator" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Compound Interest</Link>
            <Link href="/profit-margin-calculator" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Profit Margin</Link>
            <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
