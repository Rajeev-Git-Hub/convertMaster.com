'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PercentageDecreaseCalculatorPage() {
  const [oldValue, setOldValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateDecrease = () => {
    const old = parseFloat(oldValue);
    const newV = parseFloat(newValue);
    if (old && newV && old !== 0) {
      const decrease = ((old - newV) / old) * 100;
      setResult(decrease);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Percentage Decrease Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate the percentage decrease between two values
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📉</div>
                <p className="text-gray-600 dark:text-gray-400">Enter original and new values to calculate decrease</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={oldValue}
                    onChange={(e) => setOldValue(e.target.value)}
                    placeholder="Original value..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <input 
                    type="number" 
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="New value..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={calculateDecrease}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Calculate Decrease
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <p className="text-lg text-gray-700 dark:text-gray-300">Percentage Decrease:</p>
                      <p className="text-3xl font-bold text-red-600">{result.toFixed(2)}%</p>
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
            <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">% Decrease = ((Old - New) / Old) × 100</p>
              <p className="text-gray-600 dark:text-gray-300">Subtract new from old, divide by old, multiply by 100</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Example Calculations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { old: '100', new: '80', result: '20% decrease' },
              { old: '200', new: '150', result: '25% decrease' },
              { old: '80', new: '60', result: '25% decrease' },
              { old: '150', new: '120', result: '20% decrease' },
              { old: '500', new: '400', result: '20% decrease' },
              { old: '1000', new: '750', result: '25% decrease' },
              { old: '50', new: '40', result: '20% decrease' },
              { old: '120', new: '90', result: '25% decrease' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="text-gray-600 dark:text-gray-400">{item.old} → {item.new}</p>
                <p className="font-bold text-red-600">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/percentage-increase-calculator" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">% Increase</Link>
            <Link href="/discount-calculator" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Discount Calc</Link>
            <Link href="/all-converters/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
