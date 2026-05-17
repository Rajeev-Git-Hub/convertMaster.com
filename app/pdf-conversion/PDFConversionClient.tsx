'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiFileText, FiGitMerge, FiScissors, FiMinimize2, FiRotateCw, FiLock, FiUnlock, FiImage, FiFile } from 'react-icons/fi';

const pdfTools = [
  { 
    name: 'Merge PDF', 
    icon: FiGitMerge, 
    description: 'Combine multiple PDF files into one document', 
    href: '/merge-pdf',
    color: 'bg-blue-500',
    borderColor: 'border-blue-200'
  },
  { 
    name: 'Split PDF', 
    icon: FiScissors, 
    description: 'Extract pages or split PDF into multiple files', 
    href: '/split-pdf',
    color: 'bg-green-500',
    borderColor: 'border-green-200'
  },
  { 
    name: 'Compress PDF', 
    icon: FiMinimize2, 
    description: 'Reduce PDF file size while maintaining quality', 
    href: '/compress-pdf',
    color: 'bg-orange-500',
    borderColor: 'border-orange-200'
  },
  { 
    name: 'PDF to Word', 
    icon: FiFile, 
    description: 'Convert PDF files to editable Word documents', 
    href: '/pdf-to-word',
    color: 'bg-purple-500',
    borderColor: 'border-purple-200'
  },
  { 
    name: 'PDF to Excel', 
    icon: FiFileText, 
    description: 'Convert PDF tables to Excel spreadsheets', 
    href: '/pdf-to-excel',
    color: 'bg-indigo-500',
    borderColor: 'border-indigo-200'
  },
  { 
    name: 'PDF to JPG', 
    icon: FiImage, 
    description: 'Convert PDF pages to JPG images', 
    href: '/pdf-to-jpg',
    color: 'bg-cyan-500',
    borderColor: 'border-cyan-200'
  },
  { 
    name: 'Rotate PDF', 
    icon: FiRotateCw, 
    description: 'Change orientation of PDF pages', 
    href: '/rotate-pdf',
    color: 'bg-teal-500',
    borderColor: 'border-teal-200'
  },
  { 
    name: 'Protect PDF', 
    icon: FiLock, 
    description: 'Add password protection to PDF files', 
    href: '/protect-pdf',
    color: 'bg-red-500',
    borderColor: 'border-red-200'
  },
  { 
    name: 'Unlock PDF', 
    icon: FiUnlock, 
    description: 'Remove password protection from PDF files', 
    href: '/unlock-pdf',
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-200'
  },
];

export default function PDFConversionClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About PDF Section */}
      <section className="container py-12">
        <div className="h-16" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              About PDF
            </h1>
            <p className="text-lg text-gray-600 wrap-break-word">
              Work with PDF files quickly and easily. ConvertMaster provides simple tools to merge PDFs, split large files, compress documents for email, and convert PDFs to Word, Excel, or images. Everything runs directly and fast.
            </p>
          </div>

          {/* PDF Tools Section */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pdfTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className={`rounded-lg border ${tool.borderColor} bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer`}
                    >
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-md ${tool.color} text-white shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="font-semibold text-xs text-gray-900">
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
