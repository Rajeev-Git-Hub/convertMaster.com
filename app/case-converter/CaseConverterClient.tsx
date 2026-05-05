'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiCheck, FiX, FiType, FiArrowDown, FiClipboard, FiTrash2 } from 'react-icons/fi';

type CaseType = 'sentence' | 'upper' | 'lower' | 'firstLetter' | 'alternate' | 'toggle';

const caseFunctions: Record<CaseType, (text: string) => string> = {
  sentence: (text) => {
    return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w|\n\s*\w)/g, (match) => match.toUpperCase());
  },
  upper: (text) => text.toUpperCase(),
  lower: (text) => text.toLowerCase(),
  firstLetter: (text) => {
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  },
  alternate: (text) => {
    let index = 0;
    return text.split('').map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        return index++ % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
      }
      return char;
    }).join('');
  },
  toggle: (text) => {
    return text.split('').map((char) => {
      if (char === char.toUpperCase()) return char.toLowerCase();
      return char.toUpperCase();
    }).join('');
  },
};

const caseConfig: Record<CaseType, { label: string; description: string; example: string; color: string; bgColor: string; borderColor: string; hoverBg: string }> = {
  sentence: {
    label: 'Sentence case',
    description: 'First letter of each sentence',
    example: 'The quick brown fox.',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-400',
    hoverBg: 'hover:bg-blue-50',
  },
  upper: {
    label: 'UPPER CASE',
    description: 'All letters uppercase',
    example: 'THE QUICK BROWN FOX.',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-400',
    hoverBg: 'hover:bg-red-50',
  },
  lower: {
    label: 'lower case',
    description: 'All letters lowercase',
    example: 'the quick brown fox.',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-400',
    hoverBg: 'hover:bg-green-50',
  },
  firstLetter: {
    label: 'First Letter',
    description: 'Capitalize each word',
    example: 'The Quick Brown Fox.',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-400',
    hoverBg: 'hover:bg-purple-50',
  },
  alternate: {
    label: 'aLtErNaTe',
    description: 'Alternate upper & lower',
    example: 'tHe QuIcK BrOwN FoX.',
    color: 'text-orange-700',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-400',
    hoverBg: 'hover:bg-orange-50',
  },
  toggle: {
    label: 'tOGGLE',
    description: 'Swap each letter case',
    example: 'tHE QUICK BROWN FOX.',
    color: 'text-cyan-700',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-400',
    hoverBg: 'hover:bg-cyan-50',
  },
};

interface CaseConverterClientProps {
  initialCase?: CaseType;
}

export default function CaseConverterClient({ initialCase = 'sentence' }: CaseConverterClientProps) {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [activeCase, setActiveCase] = useState<CaseType>(initialCase);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    setActiveCase(initialCase);
  }, [initialCase]);

  useEffect(() => {
    if (input) {
      setOutput(caseFunctions[activeCase](input));
    } else {
      setOutput('');
    }
  }, [input, activeCase]);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
    } catch {
      // clipboard access denied
    }
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted-text-${activeCase}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const config = caseConfig[activeCase];

  return (
    <div className="space-y-6">
      {/* Case Type Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {(Object.keys(caseConfig) as CaseType[]).map((caseType) => {
            const cfg = caseConfig[caseType];
            const isActive = activeCase === caseType;
            return (
              <button
                key={caseType}
                onClick={() => setActiveCase(caseType)}
                className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 group ${
                  isActive
                    ? `${cfg.borderColor} ${cfg.bgColor} shadow-lg scale-[1.02]`
                    : `border-gray-200 bg-white ${cfg.hoverBg} hover:shadow-md`
                }`}
              >
                <span className={`text-sm font-bold block ${isActive ? cfg.color : 'text-gray-800'}`}>
                  {cfg.label}
                </span>
              </button>
            );
          })}
        </div>

      {/* Input & Output side by side on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FiType className="w-4 h-4 text-gray-400" />
              Input Text
            </label>
            <div className="flex gap-2">
              <button
                onClick={handlePaste}
                className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center gap-1"
              >
                <FiClipboard className="w-3 h-3" />
                Paste
              </button>
              {input && (
                <button
                  onClick={handleClear}
                  className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors flex items-center gap-1"
                >
                  <FiTrash2 className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-48 p-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-y placeholder:text-gray-300"
          />
          {input && (
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
              <span>{input.length} chars</span>
              <span>·</span>
              <span>{input.trim() ? input.trim().split(/\s+/).length : 0} words</span>
              <span>·</span>
              <span>{input.split('\n').length} lines</span>
            </div>
          )}
        </div>

        {/* Arrow on large screens */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 z-10">
        </div>

        {/* Output */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className={`inline-block w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`} />
              Output — <span className={config.color}>{config.label}</span>
            </label>
            <div className="flex gap-2">
              {output && (
                <>
                  <button
                    onClick={handleDownload}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center gap-1"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCopy}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                      copySuccess
                        ? 'bg-green-100 text-green-600'
                        : `${config.bgColor} ${config.color} hover:opacity-80`
                    }`}
                  >
                    {copySuccess ? <FiCheck className="w-3 h-3" /> : <FiCopy className="w-3 h-3" />}
                    {copySuccess ? 'Copied!' : 'Copy'}
                  </button>
                </>
              )}
            </div>
          </div>
          <div className={`w-full h-48 p-4 rounded-xl border-2 transition-all overflow-y-auto ${
            output
              ? `${config.borderColor} ${config.bgColor} text-gray-900`
              : 'border-gray-200 bg-gray-50 text-gray-400'
          }`}>
            {output ? (
              <p className="text-sm whitespace-pre-wrap break-words">{output}</p>
            ) : (
              <p className="text-sm italic">Converted text will appear here...</p>
            )}
          </div>
          {output && (
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
              <span>{output.length} chars</span>
              <span>·</span>
              <span>{output.trim() ? output.trim().split(/\s+/).length : 0} words</span>
              <span>·</span>
              <span>{output.split('\n').length} lines</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
