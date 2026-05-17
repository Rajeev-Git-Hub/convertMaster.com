'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiShare2, FiLink } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

export default function URLEncoderClient() {
  const { t } = useLocalization();
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Auto-convert when input changes
  useEffect(() => {
    if (input) {
      convert();
    } else {
      setOutput('');
    }
  }, [input, mode]);

  const convert = () => {
    try {
      if (mode === 'encode') {
        const encoded = encodeURIComponent(input);
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(input);
        setOutput(decoded);
      }
    } catch (err) {
      setOutput(`${t('converter.error')}: ${mode === 'encode' ? t('url.encode_error') : t('url.decode_error')}`);
    }
  };

  const handleCopy = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleShare = async () => {
    if (output) {
      const shareText = `${mode === 'encode' ? t('url.encode') : t('url.decode')} URL:\n${output}`;
      const shareUrl = window.location.href;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: `URL ${mode === 'encode' ? t('url.encode') : t('url.decode')}`,
            text: shareText,
            url: shareUrl,
          });
        } else {
          await navigator.clipboard.writeText(shareUrl);
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        }
      } catch (err) {
        console.error('Failed to share:', err);
      }
    }
  };

  const swapMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInput(output);
    setOutput(input);
  };

  const parseURL = (url: string) => {
    try {
      return new URL(url);
    } catch {
      return null;
    }
  };

  const loadExample = (type: string) => {
    const examples = {
      simple: 'https://example.com/path',
      query: 'https://example.com/search?q=test&lang=en',
      special: 'https://example.com/path with spaces/file.txt?name=John Doe&age=25',
      full: 'https://user:pass@example.com:8080/path/to/file?query=value#fragment'
    };
    setInput(examples[type as keyof typeof examples] || '');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* SEO Content */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('url.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {t('url.subtitle')}
        </p>
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            {t('url.smart_features')}: {t('url.smart_desc')}
          </p>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => setMode('encode')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === 'encode'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          {t('url.encode')}
        </button>
        <button
          onClick={swapMode}
          className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
          title={t('converter.swap')}
        >
          <FiLink className="w-4 h-4" />
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === 'decode'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          {t('url.decode')}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'encode' ? t('url.input_label') : t('url.input_label')}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'encode' ? t('url.input_placeholder') : t('url.input_placeholder')}
            className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 font-mono text-sm resize-none"
          />
        </div>

        {/* Output Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'encode' ? t('url.output_label') : t('url.output_label')}
          </label>
          <div className="relative">
            <textarea
              value={output}
              readOnly
              placeholder={`${mode === 'encode' ? t('url.encode') : t('url.decode')} ${t('url.output_label').toLowerCase()} will appear here...`}
              className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100 font-mono text-sm resize-none"
            />
            {output && (
              <button
                onClick={handleCopy}
                className="absolute right-2 top-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                title={t('converter.copy')}
              >
                <FiCopy className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* URL Analysis */}
      {mode === 'decode' && output && output.startsWith('http') && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t('url.analysis')}
          </h3>
          {(() => {
            const parsed = parseURL(output);
            if (!parsed) {
              return <p className="text-gray-600 dark:text-gray-400">{t('url.invalid_format')}</p>;
            }
            return (
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="font-medium">Protocol:</span>
                  <span className="font-mono text-sm">{parsed.protocol}</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="font-medium">Host:</span>
                  <span className="font-mono text-sm">{parsed.host}</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="font-medium">Path:</span>
                  <span className="font-mono text-sm">{parsed.pathname}</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="font-medium">Query:</span>
                  <span className="font-mono text-sm">{parsed.search || 'None'}</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="font-medium">Hash:</span>
                  <span className="font-mono text-sm">{parsed.hash || 'None'}</span>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <FiShare2 className="w-4 h-4" />
          <span>{shareSuccess ? t('base64.link_copied') : t('url.share')}</span>
        </button>
        
        <button
          onClick={() => setInput('')}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-900/20 hover:bg-gray-200 dark:hover:bg-gray-900/40 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
        >
          {t('url.clear')}
        </button>
      </div>

      {/* Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {t('url.load_examples')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => loadExample('simple')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('url.simple_url')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('url.simple_url_desc')}</div>
          </button>
          <button
            onClick={() => loadExample('query')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('url.query_params')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('url.query_params_desc')}</div>
          </button>
          <button
            onClick={() => loadExample('special')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('url.special_chars')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('url.special_chars_desc')}</div>
          </button>
          <button
            onClick={() => loadExample('full')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('url.full_url')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('url.complete_url_example')}</div>
          </button>
        </div>
      </div>

      {/* Copy Success Message */}
      {copySuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg mt-6">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {t('url.copy_success')}
          </p>
        </div>
      )}
    </div>
  );
}
