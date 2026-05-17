'use client';

import { useState, useEffect, useRef } from 'react';
import { scientificCalculator, SCIENTIFIC_CONSTANTS, SCIENTIFIC_FUNCTIONS, ScientificExpression, ScientificFunction, ScientificConstant } from '../lib/scientificCalculator';
import { converters, CategoryKey, convert } from '../lib';
import { categories } from '../lib/categories';
import { FiClock, FiBook, FiSettings, FiTrash2, FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiDivide } from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';

export default function ScientificCalculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<ScientificExpression[]>([]);
  const [showConstants, setShowConstants] = useState(false);
  const [showFunctions, setShowFunctions] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [unitResult, setUnitResult] = useState<number | null>(null);
  const [showUnitConverter, setShowUnitConverter] = useState(false);
  const [precision, setPrecision] = useState(6);
  const [angleMode, setAngleMode] = useState<'radians' | 'degrees'>('radians');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory(scientificCalculator.getHistory());
  }, []);

  useEffect(() => {
    if (selectedCategory && 
        selectedCategory !== 'analytics' && 
        selectedCategory !== 'dev-tools' && 
        selectedCategory !== 'utilities' &&
        converters[selectedCategory]) {
      const units = Object.keys(converters[selectedCategory]);
      if (units.length > 0) {
        setFromUnit(units[0]);
        setToUnit(units[1] || units[0]);
      }
    }
  }, [selectedCategory]);

  const handleCalculate = () => {
    if (!expression.trim()) return;
    
    try {
      const calcResult = scientificCalculator.evaluate(expression);
      setResult(calcResult);
      setHistory(scientificCalculator.getHistory());
    } catch (error) {
      console.error('Calculation error:', error);
      // Could show error toast here
    }
  };

  const handleUnitConversion = () => {
    if (result === null || !fromUnit || !toUnit) return;
    
    try {
      const converted = convert(selectedCategory, result, fromUnit, toUnit);
      setUnitResult(converted);
    } catch (error) {
      console.error('Unit conversion error:', error);
    }
  };

  const handleConstantInsert = (constant: ScientificConstant) => {
    setExpression(prev => prev + constant.symbol);
    setShowConstants(false);
    inputRef.current?.focus();
  };

  const handleFunctionInsert = (func: ScientificFunction) => {
    const params = Array(func.parameters).fill('').map((_, i) => `arg${i + 1}`).join(',');
    setExpression(prev => prev + `${func.symbol}(${params})`);
    setShowFunctions(false);
    inputRef.current?.focus();
  };

  const handleNumberInput = (value: string) => {
    setExpression(prev => prev + value);
    inputRef.current?.focus();
  };

  const handleOperatorInput = (operator: string) => {
    setExpression(prev => prev + operator);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    setExpression('');
    setResult(null);
    setUnitResult(null);
    inputRef.current?.focus();
  };

  const handleBackspace = () => {
    setExpression(prev => prev.slice(0, -1));
    inputRef.current?.focus();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could show success toast here
  };

  const clearHistory = () => {
    scientificCalculator.clearHistory();
    setHistory([]);
  };

  const formatNumber = (num: number): string => {
    if (Math.abs(num) < 1e-10) return '0';
    if (Math.abs(num) > 1e10) return num.toExponential(precision);
    return num.toFixed(precision);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FaCalculator className="text-3xl text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Scientific Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced calculations with unit conversions</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FiClock className="text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setShowConstants(!showConstants)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FiBook className="text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setShowFunctions(!showFunctions)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FiSettings className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Calculator */}
            <div className="lg:col-span-2 space-y-4">
              {/* Display */}
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={expression}
                  onChange={(e) => setExpression(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                  placeholder="Enter expression (e.g., sin(π/2) + log(10))"
                  className="w-full bg-transparent text-white text-xl font-mono outline-none placeholder-gray-500"
                />
                {result !== null && (
                  <div className="mt-2 text-green-400 text-2xl font-mono">
                    = {formatNumber(result)}
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                    <span>Angle:</span>
                    <select
                      value={angleMode}
                      onChange={(e) => setAngleMode(e.target.value as 'radians' | 'degrees')}
                      className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    >
                      <option value="radians">Radians</option>
                      <option value="degrees">Degrees</option>
                    </select>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                    <span>Precision:</span>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      value={precision}
                      onChange={(e) => setPrecision(parseInt(e.target.value) || 6)}
                      className="w-16 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    />
                  </label>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleBackspace}
                    className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleClear}
                    className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleCalculate}
                    className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex items-center space-x-1"
                  >
                    <FiDivide />
                    <span>Calculate</span>
                  </button>
                </div>
              </div>

              {/* Number Pad */}
              <div className="grid grid-cols-5 gap-2">
                {/* Numbers */}
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
                  <button
                    key={num}
                    onClick={() => handleNumberInput(num.toString())}
                    className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                  >
                    {num}
                  </button>
                ))}
                
                {/* Decimal point */}
                <button
                  onClick={() => handleNumberInput('.')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  .
                </button>

                {/* Operators */}
                <button
                  onClick={() => handleOperatorInput('+')}
                  className="p-3 rounded bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 font-semibold"
                >
                  <FiPlus />
                </button>
                <button
                  onClick={() => handleOperatorInput('-')}
                  className="p-3 rounded bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 font-semibold"
                >
                  <FiMinus />
                </button>
                <button
                  onClick={() => handleOperatorInput('*')}
                  className="p-3 rounded bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 font-semibold"
                >
                  ×
                </button>
                <button
                  onClick={() => handleOperatorInput('/')}
                  className="p-3 rounded bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 font-semibold"
                >
                  <FiDivide />
                </button>
                <button
                  onClick={() => handleOperatorInput('^')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 font-semibold"
                >
                  x^y
                </button>

                {/* Parentheses */}
                <button
                  onClick={() => handleOperatorInput('(')}
                  className="p-3 rounded bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 font-semibold"
                >
                  (
                </button>
                <button
                  onClick={() => handleOperatorInput(')')}
                  className="p-3 rounded bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 font-semibold"
                >
                  )
                </button>

                {/* Constants */}
                <button
                  onClick={() => handleNumberInput('π')}
                  className="p-3 rounded bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 text-orange-700 dark:text-orange-300 font-semibold"
                >
                  π
                </button>
                <button
                  onClick={() => handleNumberInput('e')}
                  className="p-3 rounded bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 text-orange-700 dark:text-orange-300 font-semibold"
                >
                  e
                </button>
              </div>

              {/* Unit Converter Section */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Unit Converter</h3>
                  <button
                    onClick={() => setShowUnitConverter(!showUnitConverter)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {showUnitConverter ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
                
                {showUnitConverter && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as CategoryKey)}
                        className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                      >
                        {categories.map(cat => (
                          <option key={cat.key} value={cat.key}>{cat.label}</option>
                        ))}
                      </select>
                      <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                        className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                      >
                        {selectedCategory !== 'analytics' && 
         selectedCategory !== 'dev-tools' && 
         selectedCategory !== 'utilities' &&
         converters[selectedCategory] && Object.keys(converters[selectedCategory]).map(unit => (
                          <option key={unit} value={unit}>{unit}</option>
                        ))}
                      </select>
                      <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                        className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                      >
                        {selectedCategory !== 'analytics' && 
         selectedCategory !== 'dev-tools' && 
         selectedCategory !== 'utilities' &&
         converters[selectedCategory] && Object.keys(converters[selectedCategory]).map(unit => (
                          <option key={unit} value={unit}>{unit}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={handleUnitConversion}
                      disabled={result === null}
                      className="w-full px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Convert Result
                    </button>
                    {unitResult !== null && result !== null && (
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-green-700 dark:text-green-300">
                          {formatNumber(result)} {fromUnit} = {formatNumber(unitResult)} {toUnit}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Constants Panel */}
              {showConstants && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Constants</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {SCIENTIFIC_CONSTANTS.map(constant => (
                      <button
                        key={constant.symbol}
                        onClick={() => handleConstantInsert(constant)}
                        className="w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <div className="font-mono text-sm">{constant.symbol}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {constant.name} ({constant.unit})
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Functions Panel */}
              {showFunctions && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Functions</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {SCIENTIFIC_FUNCTIONS.map(func => (
                      <button
                        key={func.symbol}
                        onClick={() => handleFunctionInsert(func)}
                        className="w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <div className="font-mono text-sm">{func.symbol}()</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {func.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* History Panel */}
              {showHistory && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">History</h3>
                    <button
                      onClick={clearHistory}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {history.length === 0 ? (
                      <div className="text-gray-500 dark:text-gray-400 text-sm">No calculations yet</div>
                    ) : (
                      history.map((item, index) => (
                        <div
                          key={index}
                          className="p-2 bg-white dark:bg-gray-600 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                          onClick={() => setExpression(item.expression)}
                        >
                          <div className="font-mono text-sm">{item.expression}</div>
                          <div className="text-green-600 dark:text-green-400 text-sm">
                            = {formatNumber(item.result)}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(item.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
