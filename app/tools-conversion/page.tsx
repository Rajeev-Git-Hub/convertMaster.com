'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { FiType, FiHash, FiBook, FiSquare, FiCalendar, FiDollarSign, FiLock, FiRefreshCw, FiFileText, FiLink, FiClock, FiUser, FiPercent } from 'react-icons/fi';

export default function ToolsLandingPage() {
  const tools = [
    // General Tools
    {
      name: 'Case Converter',
      icon: FiType,
      href: '/case-converter/',
      description: 'Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more.',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Scientific Calculator',
      icon: FiHash,
      href: '/scientific-calculator/',
      description: 'Advanced calculator with mathematical functions, variables, and calculation history.',
      color: 'bg-indigo-500',
      borderColor: 'border-indigo-200',
    },
    {
      name: 'Password Generator',
      icon: FiLock,
      href: '/password-generator/',
      description: 'Generate secure random passwords with customizable length and character options.',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
    },
    {
      name: 'QR Code Generator',
      icon: FiSquare,
      href: '/qr-code-generator/',
      description: 'Create QR codes instantly from any text, URL, or contact information.',
      color: 'bg-cyan-500',
      borderColor: 'border-cyan-200',
    },
    {
      name: 'Scientific Converter',
      icon: FiBook,
      href: '/scientific-converter/',
      description: 'Convert scientific units, notations, and measurements accurately.',
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
    },
    {
      name: 'Date Calculator',
      icon: FiCalendar,
      href: '/date-calculator/',
      description: 'Calculate days between dates, add/subtract days, and find future/past dates.',
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
    },
    {
      name: 'Financial Calculator',
      icon: FiDollarSign,
      href: '/financial-calculator/',
      description: 'Calculate loans, mortgages, interest, and investment returns.',
      color: 'bg-teal-500',
      borderColor: 'border-teal-200',
    },
    {
      name: 'Random Number Generator',
      icon: FiRefreshCw,
      href: '/random-number-generator/',
      description: 'Generate random numbers within any range with customizable options.',
      color: 'bg-yellow-500',
      borderColor: 'border-yellow-200',
    },
    {
      name: 'Text Counter',
      icon: FiType,
      href: '/text-counter/',
      description: 'Count characters, words, sentences, and paragraphs in any text.',
      color: 'bg-rose-500',
      borderColor: 'border-rose-200',
    },
    // Developer Tools (moved from unit-conversion)
    {
      name: 'JSON Formatter',
      icon: FiFileText,
      href: '/json-formatter',
      description: 'Format and validate JSON data with syntax highlighting and error detection.',
      color: 'bg-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Base64 Encoder',
      icon: FiLock,
      href: '/base64-encoder',
      description: 'Encode and decode Base64 strings for secure data transmission.',
      color: 'bg-green-600',
      borderColor: 'border-green-200',
    },
    {
      name: 'URL Encoder',
      icon: FiLink,
      href: '/url-encoder',
      description: 'Encode and decode URLs for safe transmission in web applications.',
      color: 'bg-purple-600',
      borderColor: 'border-purple-200',
    },
    {
      name: 'Timestamp Converter',
      icon: FiClock,
      href: '/timestamp-converter',
      description: 'Convert between Unix timestamps and human-readable date formats.',
      color: 'bg-orange-600',
      borderColor: 'border-orange-200',
    },
    // Utilities (moved from unit-conversion)
    {
      name: 'Time Duration Calculator',
      icon: FiClock,
      href: '/time-duration-calculator',
      description: 'Calculate time duration between two dates or times with precision.',
      color: 'bg-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Percentage Calculator',
      icon: FiPercent,
      href: '/percentage-calculator',
      description: 'Calculate percentages, percentage increase/decrease, and percentage of a number.',
      color: 'bg-green-600',
      borderColor: 'border-green-200',
    },
    {
      name: 'Age Calculator',
      icon: FiUser,
      href: '/age-calculator',
      description: 'Calculate exact age from birthdate in years, months, and days.',
      color: 'bg-violet-600',
      borderColor: 'border-violet-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Tools Section */}
      <section className="container py-12">
        <div className="h-16" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              About Tools
            </h1>
            <p className="text-lg text-gray-600 wrap-break-word">
              Tools are helpful programs that make everyday tasks easier. You can use them to change text styles, make calculations, create passwords, and do many other useful things. These tools work right in your browser and give you quick results without any hassle. They're perfect for students doing homework, professionals working on projects, or anyone who needs to get things done fast. Our tools are simple to use and help you save time so you can focus on what's important.
            </p>
          </div>

          {/* Tools Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className={`rounded-lg border ${tool.borderColor} bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer`}
                    >
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-md ${tool.color} text-white shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="font-semibold text-sm text-gray-900">
                            {tool.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
