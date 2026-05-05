'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DiscountCalculatorPage() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState<{salePrice: number, savings: number} | null>(null);

  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);
    if (original && discount && original > 0 && discount >= 0 && discount <= 100) {
      const salePrice = original * (1 - discount / 100);
      const savings = original - salePrice;
      setResult({ salePrice, savings });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discount Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate sale price and savings instantly
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🏷️</div>
                <p className="text-gray-600 dark:text-gray-400">Enter original price and discount percentage</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="Original price..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <input 
                    type="number" 
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    placeholder="Discount % (e.g., 20)..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={calculateDiscount}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Calculate Sale Price
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-left space-y-2">
                      <p className="text-lg"><span className="font-semibold">Sale Price:</span> ${result.salePrice.toFixed(2)}</p>
                      <p className="text-lg"><span className="font-semibold">You Save:</span> ${result.savings.toFixed(2)}</p>
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
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl text-center">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sale Price</p>
              <p className="text-lg">= Original × (1 - Discount%)</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl text-center">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">You Save</p>
              <p className="text-lg">= Original - Sale Price</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Discounts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { price: '$100', discount: '10%', save: '$10', pay: '$90' },
              { price: '$100', discount: '20%', save: '$20', pay: '$80' },
              { price: '$100', discount: '25%', save: '$25', pay: '$75' },
              { price: '$100', discount: '30%', save: '$30', pay: '$70' },
              { price: '$100', discount: '40%', save: '$40', pay: '$60' },
              { price: '$100', discount: '50%', save: '$50', pay: '$50' },
              { price: '$100', discount: '60%', save: '$60', pay: '$40' },
              { price: '$100', discount: '75%', save: '$75', pay: '$25' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-700">{item.discount} off</p>
                <p className="text-gray-600 dark:text-gray-400">Original: {item.price}</p>
                <p className="text-gray-600">Save: {item.save}</p>
                <p className="text-gray-900 font-bold">Pay: {item.pay}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/percentage-decrease-calculator" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">% Decrease</Link>
            <Link href="/profit-margin-calculator" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Profit Margin</Link>
            <Link href="/all-converters/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
