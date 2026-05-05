'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CompoundInterestCalculatorPage() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('12');
  const [result, setResult] = useState<{total: number, interest: number} | null>(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const n = parseFloat(frequency);
    if (p && r && t && n && p > 0 && r > 0 && t > 0) {
      const total = p * Math.pow((1 + (r / 100) / n), n * t);
      const interest = total - p;
      setResult({ total, interest });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compound Interest Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              See the power of compounding: A = P(1 + r/n)^(nt)
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-gray-600 dark:text-gray-400">Enter principal, rate, time, and compounding frequency</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Principal amount..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <input 
                    type="number" 
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Annual interest rate (%)..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <input 
                    type="number" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Time in years..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <select 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="1">Compounding: Annually (1x/year)</option>
                    <option value="2">Compounding: Semi-annually (2x/year)</option>
                    <option value="4">Compounding: Quarterly (4x/year)</option>
                    <option value="12">Compounding: Monthly (12x/year)</option>
                    <option value="365">Compounding: Daily (365x/year)</option>
                  </select>
                  <button 
                    onClick={calculateCompoundInterest}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Calculate Compound Interest
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-left space-y-2">
                      <p className="text-lg"><span className="font-semibold">Total Amount:</span> ${result.total.toFixed(2)}</p>
                      <p className="text-lg"><span className="font-semibold">Interest Earned:</span> ${result.interest.toFixed(2)}</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">A = P(1 + r/n)^(nt)</p>
              <div className="mt-4 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">• A = Final amount</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• P = Principal (initial investment)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• r = Annual interest rate (decimal)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• n = Number of times interest compounds per year</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• t = Time in years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">The Power of Compounding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-900 dark:text-white">$10,000 at 7%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">for 10 years</p>
              <p className="text-gray-900 font-bold text-2xl mt-2">$19,672</p>
              <p className="text-gray-600">+96.7% gain</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-900 dark:text-white">$10,000 at 7%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">for 20 years</p>
              <p className="text-gray-900 font-bold text-2xl mt-2">$38,697</p>
              <p className="text-gray-600">+287% gain</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-900 dark:text-white">$10,000 at 7%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">for 30 years</p>
              <p className="text-gray-900 font-bold text-2xl mt-2">$76,123</p>
              <p className="text-gray-600">+661% gain</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/simple-interest-calculator" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Simple Interest</Link>
            <Link href="/roi-calculator" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">ROI Calculator</Link>
            <Link href="/all-converters/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
