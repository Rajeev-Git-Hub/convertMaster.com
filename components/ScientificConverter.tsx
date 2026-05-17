'use client';

import { useState, useEffect } from 'react';
import { scientificConverter, SCIENTIFIC_UNITS, CONVERSION_FORMULAS, ScientificConversion, ScientificUnit, ConversionFormula } from '../lib/scientificConverter';
import { converters, CategoryKey } from '../lib';
import { categories } from '../lib/categories';
import { FiBookOpen, FiDownload, FiUpload, FiClock, FiSearch, FiZap } from 'react-icons/fi';

export default function ScientificConverter() {
  const [fromValue, setFromValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('physics');
  const [result, setResult] = useState<ScientificConversion | null>(null);
  const [showFormulas, setShowFormulas] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState<ConversionFormula | null>(null);
  const [formulaInputs, setFormulaInputs] = useState<{ [key: string]: string }>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ScientificUnit[]>([]);
  const [history, setHistory] = useState<ScientificConversion[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    setHistory(scientificConverter.getConversionHistory());
  }, []);

  useEffect(() => {
    const units = scientificConverter.getUnitsByCategory(selectedCategory);
    if (units.length > 0) {
      setFromUnit(units[0].symbol);
      setToUnit(units[1]?.symbol || units[0].symbol);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (searchQuery) {
      const results = scientificConverter.searchUnits(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleConvert = () => {
    if (!fromValue) {
      setValidationError('Please enter a value');
      setResult(null);
      return;
    }

    const value = parseFloat(fromValue);
    if (isNaN(value)) {
      setValidationError('Numbers only');
      setResult(null);
      return;
    }

    if (!fromUnit || !toUnit) return;
    
    try {
      const conversion = scientificConverter.convert(value, fromUnit, toUnit, selectedCategory);
      setResult(conversion);
      setValidationError(null);
      setHistory(scientificConverter.getConversionHistory());
    } catch (error) {
      setValidationError('Conversion error');
      console.error('Conversion error:', error);
    }
  };

  const handleFormulaConvert = () => {
    if (!selectedFormula) return;
    
    try {
      const inputs: { [key: string]: number } = {};
      Object.entries(formulaInputs).forEach(([key, value]) => {
        inputs[key] = parseFloat(value) || 0;
      });
      
      const conversion = scientificConverter.convertFromFormula(selectedFormula, inputs, 'J');
      setResult(conversion);
      setHistory(scientificConverter.getConversionHistory());
    } catch (error) {
      console.error('Formula conversion error:', error);
    }
  };

  const handleUnitSelect = (unit: ScientificUnit, isFromUnit: boolean) => {
    if (isFromUnit) {
      setFromUnit(unit.symbol);
      setSelectedCategory(unit.category);
    } else {
      setToUnit(unit.symbol);
    }
    setSearchQuery('');
    setSearchResults([]);
  };

  const clearHistory = () => {
    scientificConverter.clearConversionHistory();
    setHistory([]);
  };

  const exportHistory = () => {
    const historyJson = scientificConverter.exportHistory();
    const blob = new Blob([historyJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scientific-conversions.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importHistory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const historyJson = e.target?.result as string;
        scientificConverter.importHistory(historyJson);
        setHistory(scientificConverter.getConversionHistory());
      } catch (error) {
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
  };

  const formatNumber = (num: number): string => {
    if (Math.abs(num) < 1e-10) return '0';
    if (Math.abs(num) > 1e10) return num.toExponential(6);
    return num.toFixed(6);
  };

  const getUnitsByCategory = (category: string) => {
    return scientificConverter.getUnitsByCategory(category);
  };

  const getFormulasByCategory = (category: string) => {
    return scientificConverter.getFormulasByCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FiZap className="text-3xl text-purple-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Scientific Unit Converter</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced scientific unit conversions with formulas</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowFormulas(!showFormulas)}
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
                onClick={exportHistory}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FiDownload className="text-gray-700 dark:text-gray-300" />
              </button>
              <label className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                <FiUpload className="text-gray-700 dark:text-gray-300" />
                <input type="file" accept=".json" onChange={importHistory} className="hidden" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Converter */}
            <div className="lg:col-span-2 space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Scientific Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['physics', 'chemistry', 'engineering', 'biology', 'astronomy', 'mathematics'].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-lg capitalize transition-colors ${
                        selectedCategory === category
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Unit Conversion */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Unit Conversion</h3>
                
                <div className="space-y-4">
                  {/* From Value */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      From Value
                    </label>
                    <input
                      type="number"
                      value={fromValue}
                      onChange={(e) => setFromValue(e.target.value)}
                      placeholder="100"
                      className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  {/* From Unit */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      From Unit
                    </label>
                    <div className="relative">
                      <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      >
                        {getUnitsByCategory(selectedCategory).map(unit => (
                          <option key={unit.symbol} value={unit.symbol}>
                            {unit.symbol} - {unit.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-2 top-2">
                        <FiSearch className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* To Unit */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      To Unit
                    </label>
                    <div className="relative">
                      <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      >
                        {getUnitsByCategory(selectedCategory).map(unit => (
                          <option key={unit.symbol} value={unit.symbol}>
                            {unit.symbol} - {unit.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-2 max-h-32 overflow-y-auto">
                      {searchResults.map(unit => (
                        <div
                          key={unit.symbol}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded"
                          onClick={() => handleUnitSelect(unit, true)}
                        >
                          <div className="font-mono text-sm">{unit.symbol}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {unit.name} ({unit.dimension})
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Convert Button */}
                  <button
                    onClick={handleConvert}
                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Convert
                  </button>

                  {/* Result */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 min-h-[100px] flex items-center justify-center text-center">
                    {result ? (
                      <div className="text-green-700 dark:text-green-300 w-full">
                        <div className="text-sm font-bold uppercase tracking-wider mb-1">Result:</div>
                        <div className="text-xl font-bold">
                          {formatNumber(result.fromValue)} {result.fromUnit} = {formatNumber(result.result)} {result.toUnit}
                        </div>
                        {result.formula && (
                          <div className="text-xs mt-2 opacity-80 font-mono italic">
                            Formula: {result.formula}
                          </div>
                        )}
                      </div>
                    ) : validationError ? (
                      <div className="text-red-500 font-bold">{validationError}</div>
                    ) : (
                      <div className="text-gray-400 italic">
                        👉 Enter a value above and click Convert
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Formula-Based Conversion */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Formula-Based Conversion</h3>
                
                <div className="space-y-4">
                  {/* Formula Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Select Formula
                    </label>
                    <select
                      value={selectedFormula?.name || ''}
                      onChange={(e) => {
                        const formula = getFormulasByCategory(selectedCategory).find(f => f.name === e.target.value);
                        setSelectedFormula(formula || null);
                        setFormulaInputs({});
                      }}
                      className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                    >
                      <option value="">Choose a formula...</option>
                      {getFormulasByCategory(selectedCategory).map(formula => (
                        <option key={formula.name} value={formula.name}>
                          {formula.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Formula Display */}
                  {selectedFormula && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-mono text-sm text-blue-700 dark:text-blue-300">
                        {selectedFormula.formula}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        {selectedFormula.description}
                      </div>
                    </div>
                  )}

                  {/* Formula Inputs */}
                  {selectedFormula && (
                    <div className="space-y-2">
                      {Object.entries(selectedFormula.variables).map(([key, description]) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {key} ({description})
                          </label>
                          <input
                            type="number"
                            value={formulaInputs[key] || ''}
                            onChange={(e) => setFormulaInputs(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }))}
                            placeholder={`Enter ${key}`}
                            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Calculate Button */}
                  {selectedFormula && (
                    <button
                      onClick={handleFormulaConvert}
                      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Calculate
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Quick Stats */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Units:</span>
                    <span className="text-sm font-semibold">{SCIENTIFIC_UNITS.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Formulas:</span>
                    <span className="text-sm font-semibold">{CONVERSION_FORMULAS.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Conversions:</span>
                    <span className="text-sm font-semibold">{history.length}</span>
                  </div>
                </div>
              </div>

              {/* Recent History */}
              {showHistory && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">History</h3>
                    <button
                      onClick={clearHistory}
                      className="text-red-500 hover:text-red-600"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {history.length === 0 ? (
                      <div className="text-gray-500 dark:text-gray-400 text-sm">No conversions yet</div>
                    ) : (
                      history.slice(0, 10).map((item, index) => (
                        <div key={index} className="p-2 bg-white dark:bg-gray-600 rounded text-sm">
                          <div className="font-mono">
                            {formatNumber(item.fromValue)} {item.fromUnit} → {formatNumber(item.result)} {item.toUnit}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {item.category} • {new Date(item.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Available Formulas */}
              {showFormulas && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Available Formulas</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {getFormulasByCategory(selectedCategory).map(formula => (
                      <div
                        key={formula.name}
                        className="p-2 bg-white dark:bg-gray-600 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                        onClick={() => setSelectedFormula(formula)}
                      >
                        <div className="font-semibold text-sm">{formula.name}</div>
                        <div className="font-mono text-xs text-gray-600 dark:text-gray-400">
                          {formula.formula}
                        </div>
                      </div>
                    ))}
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
