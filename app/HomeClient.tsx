'use client';

import Link from 'next/link';
import { FiMaximize, FiThermometer, FiHardDrive, FiSquare, FiDroplet, FiClock, FiWind, FiZap, FiActivity, FiBox, FiLayers, FiChevronDown, FiChevronUp, FiTool, FiCpu, FiSettings } from 'react-icons/fi';
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

const engineeringConverters = [
  // Mechanical
  {
    name: 'Thermodynamics',
    icon: FiActivity,
    bgColor: 'bg-red-600',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    description: 'Heat, Work, Energy Transfer',
    href: '/thermodynamics-calculator'
  },
  {
    name: 'Fluid Mechanics',
    icon: FiWind,
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Flow, Pressure, Velocity',
    href: '/fluid-mechanics-calculator'
  },
  {
    name: 'Stress Analysis',
    icon: FiTool,
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    description: 'Force, Strain, Deformation',
    href: '/stress-analysis-calculator'
  },
  {
    name: 'Machine Design',
    icon: FiCpu,
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    description: 'Gears, Bearings, Shafts',
    href: '/machine-design-calculator'
  },
  {
    name: 'Concrete',
    icon: FiLayers,
    bgColor: 'bg-orange-600',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    description: 'Mix, Strength, Volume',
    href: '/concrete-calculator'
  },
  // Electrical
  {
    name: "Ohm's Law",
    icon: FiZap,
    bgColor: 'bg-yellow-600',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    description: 'V=IR, Voltage, Current',
    href: '/ohms-law-calculator'
  },
  {
    name: 'Circuit Analysis',
    icon: FiActivity,
    bgColor: 'bg-cyan-600',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    description: 'KCL, KVL, Networks',
    href: '/circuit-analysis-calculator'
  },
  {
    name: 'Power Calc',
    icon: FiZap,
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    description: 'AC, DC, 3-Phase',
    href: '/power-calculator'
  },
  // Chemical
  {
    name: 'Process Calc',
    icon: FiSettings,
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Mass, Energy Balance',
    href: '/process-calculations'
  },
  {
    name: 'Chem Thermo',
    icon: FiActivity,
    bgColor: 'bg-red-600',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    description: 'Enthalpy, Entropy',
    href: '/chemical-thermodynamics'
  },
  {
    name: 'Fluid Flow',
    icon: FiWind,
    bgColor: 'bg-cyan-600',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    description: 'Pipes, Reynolds, Friction',
    href: '/fluid-flow-calculator'
  },
  {
    name: 'Reaction Kinetics',
    icon: FiZap,
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    description: 'Rate, Order, Conversion',
    href: '/reaction-kinetics'
  },
  // Electronics
  {
    name: 'Resistor',
    icon: FiTool,
    bgColor: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    description: 'Color Code, Series, Parallel',
    href: '/resistor-calculator'
  },
  {
    name: 'Electronics',
    icon: FiCpu,
    bgColor: 'bg-pink-600',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    description: 'Components, Circuits',
    href: '/electronics-tools'
  },
  // Basic Engineering
  {
    name: 'Pressure',
    icon: FiActivity,
    bgColor: 'bg-pink-600',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    description: 'Pascal, Bar, PSI, ATM',
    href: '/pressure-converter/'
  },
  {
    name: 'Energy',
    icon: FiZap,
    bgColor: 'bg-yellow-600',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    description: 'Joules, Calories, BTU',
    href: '/energy-converter/'
  },
  {
    name: 'Power',
    icon: FiZap,
    bgColor: 'bg-rose-600',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    description: 'Watts, HP, Kilowatts',
    href: '/power-converter/'
  },
  {
    name: 'Angle',
    icon: FiLayers,
    bgColor: 'bg-slate-600',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-200',
    description: 'Degrees, Radians, Grad',
    href: '/angle-converter/'
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
  const [showEngineering, setShowEngineering] = useState(true);

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

          {/* Engineering Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowEngineering(!showEngineering)}
              className="flex items-center justify-between w-full mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors border-b border-gray-200 pb-2"
            >
              <span>Engineering</span>
              {showEngineering ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
            </button>
            {showEngineering && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {engineeringConverters.map((category) => (
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
