'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiShare2, FiDownload, FiUpload, FiFile, FiType } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

export default function Base64EncoderClient() {
  const { t } = useLocalization();
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [inputType, setInputType] = useState<'text' | 'file'>('text');
  const [fileName, setFileName] = useState<string>('');
  const [fileType, setFileType] = useState<string>('');
  const [isImage, setIsImage] = useState(false);
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
        const encoded = btoa(input);
        setOutput(encoded);
      } else {
        const decoded = atob(input);
        setOutput(decoded);
      }
    } catch (error) {
      setOutput('Error: Invalid input for conversion');
    }
  };

  const handleCopy = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch {
        // Clipboard access denied or failed
        setCopySuccess(false);
      }
    }
  };

  const handleShare = async () => {
    if (output) {
      const shareText = `${mode === 'encode' ? t('base64.encoded') : t('base64.decoded')} Base64:\n${output.substring(0, 100)}...`;
      const shareUrl = window.location.href;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: `Base64 ${mode === 'encode' ? t('base64.encoder') : t('base64.decoder')}`,
            text: shareText,
            url: shareUrl,
          });
        } else {
          await navigator.clipboard.writeText(shareUrl);
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        }
      } catch {
        // Share cancelled or failed
        setShareSuccess(false);
      }
    }
  };

  const handleDownload = () => {
    if (output) {
      const blob = new Blob([output], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || `base64-${mode === 'encode' ? 'encoded' : 'decoded'}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileType(file.type);
      setIsImage(file.type.startsWith('image/'));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (mode === 'encode') {
          // For encoding files, we need the base64 representation
          const base64Content = content.split(',')[1]; // Remove data URL prefix
          setInput(base64Content || '');
        } else {
          setInput(content);
        }
      };
      
      if (mode === 'encode') {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setFileName('');
    setFileType('');
    setIsImage(false);
  };

  const loadExample = (type: string) => {
    const examples = {
      text: 'Hello, World!',
      json: '{"name": "John", "age": 30, "city": "New York"}',
      url: 'https://example.com/api/data',
      xml: '<user><name>John</name><age>30</age></user>'
    };
    setInput(examples[type as keyof typeof examples] || '');
  };

  const swapMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInput(output);
    setOutput(input);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* SEO Content */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('base64.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {t('base64.subtitle')}
        </p>
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            {t('base64.smart_features')}: {t('base64.smart_desc')}
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
          {t('base64.encode')}
        </button>
        <button
          onClick={swapMode}
          className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
          title="Swap mode"
        >
          <FiType className="w-4 h-4" />
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === 'decode'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          {t('base64.decode')}
        </button>
      </div>

      {/* Input Type Selector */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => setInputType('text')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            inputType === 'text'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          <FiType className="w-4 h-4" />
          <span>{t('base64.text_mode_button')}</span>
        </button>
        <button
          onClick={() => setInputType('file')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            inputType === 'file'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          <FiFile className="w-4 h-4" />
          <span>{t('base64.file_mode_button')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {mode === 'encode' ? t('base64.input_text') : t('base64.base64_input')}
            </label>
            {inputType === 'file' && (
              <label className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
                <FiUpload className="w-3 h-3" />
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <span>{t('base64.upload_button')}</span>
              </label>
            )}
          </div>
          
          {inputType === 'text' ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === 'encode' ? t('base64.text_input_placeholder') : t('base64.base64_input_placeholder')}
              className="w-full h-96 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 font-mono text-sm resize-none"
            />
          ) : (
            <div className="w-full h-96 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100 flex items-center justify-center">
              {fileName ? (
                <div className="text-center">
                  <FiFile className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm font-medium">{fileName}</p>
                  <p className="text-xs text-gray-500">{fileType}</p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <FiUpload className="w-12 h-12 mx-auto mb-2" />
                  <p>{mode === 'encode' ? t('base64.upload_file') : t('base64.upload_file_decode')}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Output Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {mode === 'encode' ? t('base64.base64_output') : t('base64.decoded_output')}
            </label>
            {output && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <FiCopy className="w-3 h-3" />
                  <span>{copySuccess ? t('base64.copied') : t('base64.copy')}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <FiDownload className="w-3 h-3" />
                  <span>{t('base64.download')}</span>
                </button>
              </div>
            )}
          </div>
          
          {isImage && mode === 'decode' ? (
            <div className="w-full h-96 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
              <img
                src={`data:${fileType};base64,${output}`}
                alt="Decoded image"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <textarea
              value={output}
              readOnly
              placeholder={`${mode === 'encode' ? t('base64.output_placeholder').replace('result', t('base64.base64_output').toLowerCase()) : t('base64.decoded_placeholder').replace('result', t('base64.decoded_output').toLowerCase())}`}
              className="w-full h-96 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100 font-mono text-sm resize-none"
            />
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <FiShare2 className="w-4 h-4" />
          <span>{shareSuccess ? t('base64.link_copied') : t('base64.share')}</span>
        </button>
        
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-900/20 hover:bg-gray-200 dark:hover:bg-gray-900/40 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
        >
          {t('base64.clear_button')}
        </button>
      </div>

      {/* Examples */}
      {inputType === 'text' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t('base64.load_examples')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => loadExample('text')}
              className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
            >
              <div className="font-medium">{t('base64.plain_text')}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t('base64.plain_text_desc')}</div>
            </button>
            <button
              onClick={() => loadExample('json')}
              className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
            >
              <div className="font-medium">{t('base64.json_data')}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t('base64.json_data_desc')}</div>
            </button>
            <button
              onClick={() => loadExample('url')}
              className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
            >
              <div className="font-medium">{t('base64.url_example')}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t('base64.url_example_desc')}</div>
            </button>
            <button
              onClick={() => loadExample('xml')}
              className="p-3 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors text-left"
            >
              <div className="font-medium">{t('base64.xml_data')}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t('base64.xml_data_desc')}</div>
            </button>
          </div>
        </div>
      )}

      {/* Copy Success Message */}
      {copySuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {t('base64.copy_success')}
          </p>
        </div>
      )}
    </div>
  );
}
