'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiShare2, FiDownload, FiUpload, FiMinimize2, FiMaximize2, FiX } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

interface JSONError {
  line: number;
  column: number;
  message: string;
}

export default function JSONFormatterClient() {
  const { t } = useLocalization();
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<JSONError | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [minified, setMinified] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Auto-format when input changes
  useEffect(() => {
    if (input.trim()) {
      formatJSON();
    } else {
      setOutput('');
      setError(null);
      setIsValid(null);
    }
  }, [input, minified]);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = minified 
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError(null);
      setIsValid(true);
    } catch (err: any) {
      const match = err.message.match(/at position (\d+)/);
      const position = match ? parseInt(match[1]) : 0;
      const lines = input.substring(0, position).split('\n');
      const line = lines.length;
      const column = lines[lines.length - 1].length + 1;
      
      setError({
        line,
        column,
        message: err.message.replace(/at position \d+/, '')
      });
      setOutput('');
      setIsValid(false);
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
      const shareText = `Formatted JSON:\n${output.substring(0, 100)}...`;
      const shareUrl = window.location.href;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: t('json.formatted_json'),
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

  const handleDownload = () => {
    if (output) {
      const blob = new Blob([output], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'formatted.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setInput(content);
      };
      reader.readAsText(file);
    }
  };

  const loadExample = (type: 'user' | 'api' | 'config') => {
    const examples = {
      user: {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        address: {
          street: "123 Main St",
          city: "New York",
          country: "USA"
        },
        hobbies: ["reading", "swimming", "coding"]
      },
      api: {
        status: "success",
        data: {
          users: [
            { id: 1, name: "Alice", active: true },
            { id: 2, name: "Bob", active: false }
          ]
        },
        pagination: {
          page: 1,
          limit: 10,
          total: 2
        }
      },
      config: {
        app: {
          name: "MyApp",
          version: "1.0.0",
          debug: false
        },
        database: {
          host: "localhost",
          port: 5432,
          name: "myapp_db"
        },
        features: {
          authentication: true,
          notifications: false,
          analytics: true
        }
      }
    };

    setInput(JSON.stringify(examples[type], null, 2));
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError(null);
    setIsValid(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* SEO Content */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('json.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {t('json.subtitle')}
        </p>
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            {t('json.smart_features')}: {t('json.smart_desc')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('json.input_label')}
            </label>
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
                <FiUpload className="w-3 h-3" />
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <span>Upload</span>
              </label>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('json.input_placeholder')}
            className="w-full h-96 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 font-mono text-sm resize-none"
          />
          {error && (
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Error at line {error.line}, column {error.column}: {error.message}
            </div>
          )}
        </div>

        {/* Output Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('json.output_label')}
            </label>
            <div className="flex items-center space-x-2">
              {output && (
                <>
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <FiCopy className="w-3 h-3" />
                    <span>{copySuccess ? t('json.copied') : t('json.copy')}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <FiDownload className="w-3 h-3" />
                    <span>{t('json.download')}</span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="relative">
            <textarea
              value={output}
              readOnly
              placeholder={t('json.output_placeholder')}
              className="w-full h-96 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100 font-mono text-sm resize-none"
            />
            {output && (
              <div className="absolute top-2 right-2">
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  title={t('json.copy_result')}
                >
                  <FiCopy className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => setMinified(!minified)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {minified ? <FiMaximize2 className="w-4 h-4" /> : <FiMinimize2 className="w-4 h-4" />}
          <span>{minified ? t('json.beautify') : t('json.minify')}</span>
        </button>
        <button
          onClick={clearAll}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FiX className="w-4 h-4" />
          <span>{t('json.clear')}</span>
        </button>
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <FiShare2 className="w-4 h-4" />
          <span>{t('json.share')}</span>
        </button>
      </div>

      {/* Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {t('json.examples')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => loadExample('user')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('json.user_profile')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('json.user_profile_desc')}</div>
          </button>
          <button
            onClick={() => loadExample('api')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('json.api_response')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('json.api_response_desc')}</div>
          </button>
          <button
            onClick={() => loadExample('config')}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
          >
            <div className="font-medium">{t('json.config_file')}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{t('json.config_file_desc')}</div>
          </button>
        </div>
      </div>

      {/* Copy Success Message */}
      {copySuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg mt-4">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {t('json.copy_success')}
          </p>
        </div>
      )}
    </div>
  );
}
