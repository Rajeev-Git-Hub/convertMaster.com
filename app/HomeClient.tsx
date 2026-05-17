'use client';

import Link from 'next/link';
import { FiMaximize, FiThermometer, FiHardDrive, FiSquare, FiDroplet, FiClock, FiWind, FiBox, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

const categoryConverters = [
  {
    name: 'Length',
    icon: FiMaximize,
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Meters, Feet, Inches, KM, Miles',
    href: '/length-converter/'
  },
  {
    name: 'Weight',
    icon: FiBox,
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    description: 'KG, Pounds, Grams, Ounces',
    href: '/weight-converter/'
  },
  {
    name: 'Temperature',
    icon: FiThermometer,
    bgColor: 'bg-red-600',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    description: 'Celsius, Fahrenheit, Kelvin',
    href: '/temperature-converter/'
  },
  {
    name: 'Data',
    icon: FiHardDrive,
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    description: 'Bytes, KB, MB, GB, TB',
    href: '/data-converter/'
  },
  {
    name: 'Area',
    icon: FiSquare,
    bgColor: 'bg-orange-600',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    description: 'Sq Meters, Sq Feet, Acres, Hectares',
    href: '/area-converter/'
  },
  {
    name: 'Volume',
    icon: FiDroplet,
    bgColor: 'bg-cyan-600',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    description: 'Liters, Gallons, ML, Cups, Ounces',
    href: '/volume-converter/'
  },
  {
    name: 'Time',
    icon: FiClock,
    bgColor: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    description: 'Seconds, Minutes, Hours, Days',
    href: '/time-converter/'
  },
  {
    name: 'Speed',
    icon: FiWind,
    bgColor: 'bg-teal-600',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    description: 'MPH, KPH, Meters/sec, Knots',
    href: '/speed-converter/'
  }
];

function ConverterCard({ category }: { category: typeof categoryConverters[0] }) {
  const Icon = category.icon;
  return (
    <Link
      href={category.href}
      className={`rounded-lg border ${category.borderColor} bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer p-3`}
    >
      <div className="flex items-start gap-2 mb-2">
        <div className={`flex items-center justify-center w-8 h-8 rounded-md ${category.bgColor} text-white shrink-0`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-xs text-gray-900 leading-tight break-words">
            {category.name}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 text-xs">
        {category.description}
      </p>
    </Link>
  );
}

export default function HomeClient() {
  const [showCategories, setShowCategories] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Unit Conversion Section */}
      <section className="container py-12">
        <div className="h-16" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              About Unit Conversion
            </h1>
            <p className="text-lg text-gray-600 wrap-break-word">
              Unit conversion is the process of changing the units of a quantity from one system to another without altering the value. Whether you're converting length from meters to feet, weight from kilograms to pounds, or temperature from Celsius to Fahrenheit, our platform simplifies these calculations through fast, accurate, and user-friendly tools. Our mission is to eliminate complexity from everyday conversions by providing instant, reliable results in an intuitive interface—empowering students, professionals, developers, and anyone needing quick conversions to focus on their work instead of struggling with calculations.
            </p>
          </div>

          {/* Categories Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center justify-between w-full mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors border-b border-gray-200 pb-2"
            >
              <span>Categories</span>
              {showCategories ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
            </button>
            {showCategories && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categoryConverters.map((category) => (
                  <ConverterCard key={category.name} category={category} />
                ))}
              </div>
            )}
          </div>

                  </div>
      </section>

    </div>
  );
}
