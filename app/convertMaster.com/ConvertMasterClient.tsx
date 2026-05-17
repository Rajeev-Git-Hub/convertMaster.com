'use client';

import Link from 'next/link';
import { FiMaximize, FiTool } from 'react-icons/fi';

const mainSections = [
  {
    name: 'Converter',
    icon: FiMaximize,
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Length, Weight, Temperature, Data converters',
    href: '/unit-conversion/'
  },
    {
    name: 'Tools',
    icon: FiTool,
    bgColor: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    description: 'Calculator, Password Generator, QR Code, etc.',
    href: '/tools-conversion/'
  }
];

export default function ConvertMasterClient() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* About Section */}
      <section className="container py-16">
        <div className="h-16" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            About ConvertMaster
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-center break-words">
            ConvertMaster is a web application designed to simplify everyday calculations through fast, accurate, and user-friendly unit conversion tools. Our objective is to eliminate complexity from unit conversions by providing instant, reliable results in an intuitive interface accessible to everyone. Whether you're a student solving math problems, a developer working with data, a professional managing daily tasks, or anyone needing quick conversions, our mission is to deliver simple, fast, and accurate unit conversions without unnecessary complexity—empowering users to focus on their work instead of struggling with calculations.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="container pb-12">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {mainSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.name}
                href={section.href}
                className={`rounded-xl border ${section.borderColor} bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${section.bgColor} text-white shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`font-semibold text-lg ${section.textColor}`}>
                      {section.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {section.description}
                  </p>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
      </section>
    </div>
  );
}
