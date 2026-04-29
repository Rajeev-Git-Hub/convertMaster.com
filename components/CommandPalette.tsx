'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { FiSearch, FiCommand, FiX, FiTool, FiActivity, FiDatabase, FiLock, FiClock, FiTrendingUp, FiCpu } from 'react-icons/fi';

interface Command {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  keywords?: string[];
}

const commands: Command[] = [
  {
    id: 'area-converter',
    title: 'Area Converter',
    description: 'Convert between different area units',
    icon: <FiTool className="w-4 h-4" />,
    href: '/area-converter',
    keywords: ['area', 'square', 'acre', 'hectare', 'sq ft', 'sq m']
  },
  {
    id: 'volume-converter',
    title: 'Volume Converter',
    description: 'Convert between different volume units',
    icon: <FiDatabase className="w-4 h-4" />,
    href: '/volume-converter',
    keywords: ['volume', 'liter', 'gallon', 'ml', 'cubic', 'm3']
  },
  {
    id: 'base64-encoder',
    title: 'Base64 Encoder',
    description: 'Encode and decode Base64 strings',
    icon: <FiLock className="w-4 h-4" />,
    href: '/url-encoder',
    keywords: ['base64', 'encode', 'decode', 'encoding', 'b64']
  },
  {
    id: 'time-converter',
    title: 'Time Converter',
    description: 'Convert between different time units',
    icon: <FiClock className="w-4 h-4" />,
    href: '/time-converter',
    keywords: ['time', 'second', 'minute', 'hour', 'day', 'week', 'month']
  },
  {
    id: 'speed-converter',
    title: 'Speed Converter',
    description: 'Convert between different speed units',
    icon: <FiTrendingUp className="w-4 h-4" />,
    href: '/speed-converter',
    keywords: ['speed', 'mph', 'kmh', 'knot', 'velocity', 'fast']
  },
  {
    id: 'data-converter',
    title: 'Data Converter',
    description: 'Convert between different data units',
    icon: <FiCpu className="w-4 h-4" />,
    href: '/data-converter',
    keywords: ['data', 'byte', 'kb', 'mb', 'gb', 'tb', 'storage']
  },
  {
    id: 'all-converters',
    title: 'All Converters',
    description: 'Browse all available conversion tools',
    icon: <FiActivity className="w-4 h-4" />,
    href: '/all-converters',
    keywords: ['all', 'converters', 'tools', 'list', 'browse']
  }
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) {
      return commands;
    }

    const searchLower = searchTerm.toLowerCase();
    return commands.filter(cmd => {
      return (
        cmd.title.toLowerCase().includes(searchLower) ||
        cmd.description.toLowerCase().includes(searchLower) ||
        cmd.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    });
  }, [searchTerm]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // CMD+K or Ctrl+K to open
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 100);
      return;
    }
    
    // Handle navigation and close when open
    if (isOpen) {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setSearchTerm('');
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev === 0 ? filteredCommands.length - 1 : prev - 1);
          break;
        case 'Enter':
          e.preventDefault();
          const selectedCommand = filteredCommands[selectedIndex];
          if (selectedCommand?.href) {
            window.location.href = selectedCommand.href;
          }
          break;
      }
    }
  }, [isOpen, filteredCommands, selectedIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Command Palette */}
      <div className="relative w-full max-w-2xl mx-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 text-gray-500">
              <FiCommand className="w-4 h-4" />
              <span className="text-sm font-medium">Command</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <FiX className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                autoFocus
              />
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <FiSearch className="w-8 h-8 mx-auto mb-3" />
                <p className="text-sm">No commands found</p>
                <p className="text-xs mt-2">Try searching for: area, volume, base64, time, speed, data</p>
              </div>
            ) : (
              <div className="py-2">
                {filteredCommands.map((command, index) => (
                  <Link
                    key={command.id}
                    href={command.href || '#'}
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      index === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-center w-8 h-8 text-blue-600 dark:text-blue-400">
                      {command.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {command.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {command.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">ESC</kbd>
                <span>to close</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">↑↓</kbd>
                <span>to navigate</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">↵</kbd>
              <span>to select</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
