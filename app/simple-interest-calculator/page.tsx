'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SimpleInterestCalculatorPage() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<{interest: number, total: number} | null>(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    if (p && r && t && p > 0 && r > 0 && t > 0) {
      const interest = p * (r / 100) * t;
      const total = p + interest;
      setResult({ interest, total });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple Interest Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate interest using I = P × R × T
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">💵</div>
                <p className="text-gray-600 dark:text-gray-400">Enter principal, rate, and time to calculate interest</p>
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
                    placeholder="Time (years)..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={calculateInterest}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Calculate Interest
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-left space-y-2">
                      <p className="text-lg"><span className="font-semibold">Interest:</span> ${result.interest.toFixed(2)}</p>
                      <p className="text-lg"><span className="font-semibold">Total Amount:</span> ${result.total.toFixed(2)}</p>
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
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">I = P × R × T</p>
              <p className="text-gray-600 dark:text-gray-300">Interest = Principal × Rate × Time</p>
              <div className="mt-4 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">• P = Principal amount (initial investment/loan)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• R = Annual interest rate (as decimal)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• T = Time in years</p>
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
              { p: '$1,000', r: '5%', t: '3 years', i: '$150', total: '$1,150' },
              { p: '$5,000', r: '8%', t: '2 years', i: '$800', total: '$5,800' },
              { p: '$10,000', r: '6%', t: '5 years', i: '$3,000', total: '$13,000' },
              { p: '$2,500', r: '4%', t: '1 year', i: '$100', total: '$2,600' },
              { p: '$7,500', r: '7%', t: '4 years', i: '$2,100', total: '$9,600' },
              { p: '$3,000', r: '9%', t: '2.5 years', i: '$675', total: '$3,675' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{item.p} at {item.r}</p>
                <p className="text-gray-600 dark:text-gray-400">for {item.t}</p>
                <p className="text-green-600 font-bold">Interest: {item.i}</p>
                <p className="text-blue-600">Total: {item.total}</p>
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
            <Link href="/roi-calculator" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">ROI Calculator</Link>
            <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
