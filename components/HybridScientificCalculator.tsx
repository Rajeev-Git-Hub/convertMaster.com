'use client';

import { useState, useEffect, useRef } from 'react';
import { hybridScientificCalculator, CalculatorState, CalculatorHistory } from '../lib/hybridScientificCalculator';
import { FiCpu, FiBookOpen, FiSettings, FiDelete, FiPercent, FiDivide, FiMinus, FiPlus, FiClock } from 'react-icons/fi';

export default function HybridScientificCalculator() {
  const [state, setState] = useState<CalculatorState>(hybridScientificCalculator.getState());
  const [showHistory, setShowHistory] = useState(false);
  const [showConstants, setShowConstants] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [expression, setExpression] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setState(hybridScientificCalculator.getState());
  }, []);

  const updateState = () => {
    setState(hybridScientificCalculator.getState());
  };

  const handleDigit = (digit: string) => {
    hybridScientificCalculator.inputDigit(digit);
    updateState();
  };

  const handleOperation = (operation: string) => {
    hybridScientificCalculator.performOperation(operation);
    updateState();
  };

  const handleScientificFunction = (func: string) => {
    hybridScientificCalculator.performScientificFunction(func);
    updateState();
  };

  const handleMemory = (operation: string) => {
    switch (operation) {
      case 'MC':
        hybridScientificCalculator.memoryClear();
        break;
      case 'MR':
        hybridScientificCalculator.memoryRecall();
        break;
      case 'M+':
        hybridScientificCalculator.memoryAdd();
        break;
      case 'M-':
        hybridScientificCalculator.memorySubtract();
        break;
      case 'MS':
        hybridScientificCalculator.memoryStore();
        break;
    }
    updateState();
  };

  const handleUnitAwareExpression = () => {
    if (!expression.trim()) return;
    
    hybridScientificCalculator.calculateWithUnits(expression);
    updateState();
    setExpression('');
  };

  const handleClear = () => {
    hybridScientificCalculator.clear();
    updateState();
  };

  const handleClearAll = () => {
    hybridScientificCalculator.clearAll();
    updateState();
  };

  const handleDelete = () => {
    hybridScientificCalculator.deleteLastDigit();
    updateState();
  };

  const handleEquals = () => {
    hybridScientificCalculator.performOperation('=');
    updateState();
  };

  const handleHistoryClick = (item: CalculatorHistory) => {
    setExpression(item.expression);
    setShowHistory(false);
  };

  const handleConstantClick = (constant: any) => {
    setExpression(prev => prev + constant.symbol);
    setShowConstants(false);
  };

  const formatNumber = (num: string): string => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) return num;
    
    if (Math.abs(parsed) < 1e-10) return '0';
    if (Math.abs(parsed) > 1e10) return parsed.toExponential(6);
    return parsed.toFixed(6);
  };

  const constants = hybridScientificCalculator.getAvailableConstants();
  const history = hybridScientificCalculator.getHistory();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FiCpu className="text-3xl text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Scientific Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">With integrated unit conversions</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowConstants(!showConstants)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FiBookOpen className="text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FiClock className="text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
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
                <div className="text-right">
                  <div className="text-gray-400 text-sm min-h-5">
                    {state.operation && state.previousValue !== null && 
                      `${state.previousValue} ${state.operation}`
                    }
                  </div>
                  <div className="text-white text-3xl font-mono min-h-10">
                    {formatNumber(state.display)}
                  </div>
                  <div className="text-green-400 text-sm min-h-5">
                    {state.memory !== 0 && `M: ${state.memory}`}
                  </div>
                </div>
              </div>

              {/* Memory Row */}
              <div className="grid grid-cols-5 gap-2">
                <button
                  onClick={() => handleMemory('MC')}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold"
                >
                  MC
                </button>
                <button
                  onClick={() => handleMemory('MR')}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold"
                >
                  MR
                </button>
                <button
                  onClick={() => handleMemory('M+')}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold"
                >
                  M+
                </button>
                <button
                  onClick={() => handleMemory('M-')}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold"
                >
                  M-
                </button>
                <button
                  onClick={() => handleMemory('MS')}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold"
                >
                  MS
                </button>
              </div>

              {/* Scientific Functions Row */}
              <div className="grid grid-cols-5 gap-2">
                <button
                  onClick={() => handleScientificFunction('sin')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  sin
                </button>
                <button
                  onClick={() => handleScientificFunction('cos')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  cos
                </button>
                <button
                  onClick={() => handleScientificFunction('tan')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  tan
                </button>
                <button
                  onClick={() => handleScientificFunction('log')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  log
                </button>
                <button
                  onClick={() => handleScientificFunction('ln')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  ln
                </button>
              </div>

              {/* More Scientific Functions */}
              <div className="grid grid-cols-5 gap-2">
                <button
                  onClick={() => handleScientificFunction('asin')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  asin
                </button>
                <button
                  onClick={() => handleScientificFunction('acos')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  acos
                </button>
                <button
                  onClick={() => handleScientificFunction('atan')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  atan
                </button>
                <button
                  onClick={() => handleScientificFunction('√')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  √x
                </button>
                <button
                  onClick={() => handleScientificFunction('x²')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  x²
                </button>
              </div>

              {/* Number Pad */}
              <div className="grid grid-cols-5 gap-2">
                {/* Row 1 */}
                <button
                  onClick={() => handleScientificFunction('x³')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  x³
                </button>
                <button
                  onClick={() => handleScientificFunction('xʸ')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  xʸ
                </button>
                <button
                  onClick={() => handleScientificFunction('1/x')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  1/x
                </button>
                <button
                  onClick={() => handleScientificFunction('|x|')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  |x|
                </button>
                <button
                  onClick={() => handleOperation('÷')}
                  className="p-3 rounded bg-blue-500 text-white hover:bg-blue-600 font-semibold"
                >
                  <FiDivide />
                </button>

                {/* Row 2 */}
                <button
                  onClick={() => handleScientificFunction('n!')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  n!
                </button>
                <button
                  onClick={() => handleDigit('7')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  7
                </button>
                <button
                  onClick={() => handleDigit('8')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  8
                </button>
                <button
                  onClick={() => handleDigit('9')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  9
                </button>
                <button
                  onClick={() => handleOperation('×')}
                  className="p-3 rounded bg-blue-500 text-white hover:bg-blue-600 font-semibold"
                >
                  ×
                </button>

                {/* Row 3 */}
                <button
                  onClick={() => handleScientificFunction('%')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  <FiPercent />
                </button>
                <button
                  onClick={() => handleDigit('4')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  4
                </button>
                <button
                  onClick={() => handleDigit('5')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  5
                </button>
                <button
                  onClick={() => handleDigit('6')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  6
                </button>
                <button
                  onClick={() => handleOperation('-')}
                  className="p-3 rounded bg-blue-500 text-white hover:bg-blue-600 font-semibold"
                >
                  <FiMinus />
                </button>

                {/* Row 4 */}
                <button
                  onClick={() => handleScientificFunction('exp')}
                  className="p-3 rounded bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold"
                >
                  eˣ
                </button>
                <button
                  onClick={() => handleDigit('1')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  1
                </button>
                <button
                  onClick={() => handleDigit('2')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  2
                </button>
                <button
                  onClick={() => handleDigit('3')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  3
                </button>
                <button
                  onClick={() => handleOperation('+')}
                  className="p-3 rounded bg-blue-500 text-white hover:bg-blue-600 font-semibold"
                >
                  <FiPlus />
                </button>

                {/* Row 5 */}
                <button
                  onClick={() => handleScientificFunction('π')}
                  className="p-3 rounded bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 text-orange-700 dark:text-orange-300 text-sm font-semibold"
                >
                  π
                </button>
                <button
                  onClick={() => handleScientificFunction('e')}
                  className="p-3 rounded bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 text-orange-700 dark:text-orange-300 text-sm font-semibold"
                >
                  e
                </button>
                <button
                  onClick={() => handleDigit('0')}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  0
                </button>
                <button
                  onClick={() => {
                    hybridScientificCalculator.inputDecimal();
                    updateState();
                  }}
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold"
                >
                  .
                </button>
                <button
                  onClick={handleEquals}
                  className="p-3 rounded bg-green-500 text-white hover:bg-green-600 font-semibold"
                >
                  =
                </button>
              </div>

              {/* Control Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={handleDelete}
                  className="flex-1 p-3 rounded bg-yellow-500 text-white hover:bg-yellow-600 font-semibold"
                >
                  <FiDelete />
                </button>
                <button
                  onClick={handleClear}
                  className="flex-1 p-3 rounded bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                >
                  C
                </button>
                <button
                  onClick={handleClearAll}
                  className="flex-1 p-3 rounded bg-red-500 text-white hover:bg-red-600 font-semibold"
                >
                  AC
                </button>
              </div>

              {/* Unit-Aware Expression Input */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Unit-Aware Calculations</h3>
                <div className="space-y-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleUnitAwareExpression()}
                    placeholder="Enter expression with units (e.g., 5m + 2ft or 3kg * 9.8m/s²)"
                    className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                  <button
                    onClick={handleUnitAwareExpression}
                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Calculate with Units
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Constants Panel */}
              {showConstants && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Constants</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {constants.map((constant, index) => (
                      <button
                        key={index}
                        onClick={() => handleConstantClick(constant)}
                        className="w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <div className="font-mono text-sm">{constant.symbol}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {constant.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* History Panel */}
              {showHistory && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">History</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {history.length === 0 ? (
                      <div className="text-gray-500 dark:text-gray-400 text-sm">No calculations yet</div>
                    ) : (
                      history.map((item, index) => (
                        <div
                          key={index}
                          className="p-2 bg-white dark:bg-gray-600 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                          onClick={() => handleHistoryClick(item)}
                        >
                          <div className="font-mono text-sm">{item.expression}</div>
                          <div className="text-green-600 dark:text-green-400 text-sm">
                            = {formatNumber(item.result.toString())}
                            {item.unit && ` ${item.unit}`}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {item.type} • {item.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Settings Panel */}
              {showAdvanced && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Settings</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Angle Mode
                      </label>
                      <select
                        value={state.angleMode}
                        onChange={(e) => {
                          hybridScientificCalculator.setAngleMode(e.target.value as 'degrees' | 'radians');
                          updateState();
                        }}
                        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      >
                        <option value="degrees">Degrees</option>
                        <option value="radians">Radians</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Precision
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="15"
                        value={state.precision}
                        onChange={(e) => {
                          hybridScientificCalculator.setPrecision(parseInt(e.target.value) || 6);
                          updateState();
                        }}
                        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Examples */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Examples</h3>
                <div className="space-y-2 text-sm">
                  <div 
                    className="p-2 bg-white dark:bg-gray-600 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                    onClick={() => { setExpression('5m + 2ft'); setShowHistory(false); }}
                  >
                    <div className="font-mono">5m + 2ft</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Length addition</div>
                  </div>
                  <div 
                    className="p-2 bg-white dark:bg-gray-600 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                    onClick={() => { setExpression('3kg * 9.8m/s²'); setShowHistory(false); }}
                  >
                    <div className="font-mono">3kg * 9.8m/s²</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Force calculation</div>
                  </div>
                  <div 
                    className="p-2 bg-white dark:bg-gray-600 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                    onClick={() => { setExpression('0.5 * 1000kg * (20m/s)²'); setShowHistory(false); }}
                  >
                    <div className="font-mono">0.5 * 1000kg * (20m/s)²</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Kinetic energy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
