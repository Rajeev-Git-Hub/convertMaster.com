'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiCheck, FiClipboard, FiTrash2 } from 'react-icons/fi';

export default function UpperCaseClient() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    setOutput(input.toUpperCase());
  }, [input]);

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
    } catch {}
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'upper-case-text.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
        <p className="text-sm text-red-700">
          <strong>UPPER CASE</strong> converts every letter to uppercase. Perfect for headlines, legal documents, and emphasis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">Input Text</label>
            <div className="flex gap-2">
              <button onClick={handlePaste} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center gap-1">
                <FiClipboard className="w-3 h-3" /> Paste
              </button>
              {input && (
                <button onClick={handleClear} className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors flex items-center gap-1">
                  <FiTrash2 className="w-3 h-3" /> Clear
                </button>
              )}
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-48 p-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all resize-y placeholder:text-gray-300"
          />
          {input && (
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
              <span>{input.length} chars</span><span>·</span><span>{input.trim() ? input.trim().split(/\s+/).length : 0} words</span>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
              Output — <span className="text-red-600">UPPER CASE</span>
            </label>
            <div className="flex gap-2">
              {output && (
                <>
                  <button onClick={handleDownload} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">Save</button>
                  <button onClick={handleCopy} className={`text-xs px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${copySuccess ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}>
                    {copySuccess ? <FiCheck className="w-3 h-3" /> : <FiCopy className="w-3 h-3" />}
                    {copySuccess ? 'Copied!' : 'Copy'}
                  </button>
                </>
              )}
            </div>
          </div>
          <div className={`w-full h-48 p-4 rounded-xl border-2 transition-all overflow-y-auto ${output ? 'border-red-400 bg-red-50 text-gray-900' : 'border-gray-200 bg-gray-50 text-gray-400'}`}>
            {output ? <p className="text-sm whitespace-pre-wrap">{output}</p> : <p className="text-sm italic">Converted text will appear here...</p>}
          </div>
          {output && (
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
              <span>{output.length} chars</span><span>·</span><span>{output.trim() ? output.trim().split(/\s+/).length : 0} words</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
