'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProfitMarginCalculatorPage() {
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [result, setResult] = useState<{profit: number, margin: number, markup: number} | null>(null);

  const calculateMargins = () => {
    const cost = parseFloat(costPrice);
    const selling = parseFloat(sellingPrice);
    if (cost && selling && cost > 0 && selling > 0) {
      const profit = selling - cost;
      const margin = (profit / selling) * 100;
      const markup = (profit / cost) * 100;
      setResult({ profit, margin, markup });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Profit Margin Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate gross profit margin, net margin, and markup percentage
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">💰</div>
                <p className="text-gray-600 dark:text-gray-400">Enter cost and selling price to calculate margins</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                    placeholder="Cost price..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <input 
                    type="number" 
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    placeholder="Selling price..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={calculateMargins}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Calculate Margins
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-left space-y-2">
                      <p className="text-lg"><span className="font-semibold">Profit:</span> ${result.profit.toFixed(2)}</p>
                      <p className="text-lg"><span className="font-semibold">Profit Margin:</span> {result.margin.toFixed(2)}%</p>
                      <p className="text-lg"><span className="font-semibold">Markup:</span> {result.markup.toFixed(2)}%</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Formulas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gross Margin</p>
              <p className="text-lg">((Revenue - COGS) / Revenue) × 100</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl text-center">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Net Margin</p>
              <p className="text-lg">(Net Income / Revenue) × 100</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Industry Benchmarks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { industry: 'Retail', margin: '20-40%' },
              { industry: 'Software', margin: '70-85%' },
              { industry: 'Restaurants', margin: '10-15%' },
              { industry: 'Manufacturing', margin: '25-35%' },
              { industry: 'Healthcare', margin: '10-20%' },
              { industry: 'E-commerce', margin: '30-45%' },
              { industry: 'Consulting', margin: '40-60%' },
              { industry: 'Construction', margin: '15-25%' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{item.industry}</p>
                <p className="text-blue-600 font-bold">{item.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/roi-calculator" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">ROI Calculator</Link>
            <Link href="/discount-calculator" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Discount Calc</Link>
            <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
