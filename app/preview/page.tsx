'use client';

import Link from 'next/link';
import { FiMaximize, FiImage, FiVideo, FiFileText, FiTool, FiArrowRight, FiExternalLink } from 'react-icons/fi';

const sections = [
  {
    name: 'Unit',
    icon: FiMaximize,
    color: 'blue',
    description: 'Length, Weight, Temperature, Data converters',
    examples: ['/unit/length', '/unit/weight', '/unit/temperature'],
    current: true
  },
  {
    name: 'Image',
    icon: FiImage,
    color: 'purple',
    description: 'Compress, Convert, Resize, Edit images',
    examples: ['/image/compress', '/image/convert', '/image/resize']
  },
  {
    name: 'Video',
    icon: FiVideo,
    color: 'red',
    description: 'Compress, Convert, Trim, Merge videos',
    examples: ['/video/compress', '/video/convert', '/video/trim']
  },
  {
    name: 'PDF',
    icon: FiFileText,
    color: 'orange',
    description: 'Merge, Split, Compress, Convert PDFs',
    examples: ['/pdf/merge', '/pdf/split', '/pdf/compress']
  },
  {
    name: 'Tools',
    icon: FiTool,
    color: 'green',
    description: 'Calculator, Password Generator, QR Code, etc.',
    examples: ['/tools/calculator', '/tools/password', '/tools/qr-code']
  }
];

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                MultiTools Pro
              </h1>
              <p className="text-sm text-gray-500">One domain. 5 powerful sections.</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Domain:</p>
              <p className="text-blue-600 font-mono">https://multitools.pro</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-12">
        {/* URL Structure */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            URL Structure Preview
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="text-green-400 mb-2"># Root Domain</div>
            <div className="text-gray-300">https://multitools.pro/</div>
            <div className="text-gray-500 mt-2 ml-4">├── <span className="text-blue-400">/unit/</span> <span className="text-gray-400"># Unit converters (current)</span></div>
            <div className="text-gray-500 ml-4">│   ├── /unit/length/cm-to-inches/</div>
            <div className="text-gray-500 ml-4">│   ├── /unit/weight/kg-to-lbs/</div>
            <div className="text-gray-500 ml-4">│   └── /unit/temperature/</div>
            <div className="text-gray-500 mt-2 ml-4">├── <span className="text-purple-400">/image/</span> <span className="text-gray-400"># Image tools</span></div>
            <div className="text-gray-500 ml-4">│   ├── /image/compress/</div>
            <div className="text-gray-500 ml-4">│   ├── /image/convert/</div>
            <div className="text-gray-500 ml-4">│   └── /image/resize/</div>
            <div className="text-gray-500 mt-2 ml-4">├── <span className="text-red-400">/video/</span> <span className="text-gray-400"># Video tools</span></div>
            <div className="text-gray-500 ml-4">│   ├── /video/compress/</div>
            <div className="text-gray-500 ml-4">│   ├── /video/convert/</div>
            <div className="text-gray-500 ml-4">│   └── /video/trim/</div>
            <div className="text-gray-500 mt-2 ml-4">├── <span className="text-orange-400">/pdf/</span> <span className="text-gray-400"># PDF tools</span></div>
            <div className="text-gray-500 ml-4">│   ├── /pdf/merge/</div>
            <div className="text-gray-500 ml-4">│   ├── /pdf/split/</div>
            <div className="text-gray-500 ml-4">│   └── /pdf/compress/</div>
            <div className="text-gray-500 mt-2 ml-4">└── <span className="text-green-400">/tools/</span> <span className="text-gray-400"># Utility tools</span></div>
            <div className="text-gray-500 ml-8">    ├── /tools/calculator/</div>
            <div className="text-gray-500 ml-8">    ├── /tools/password-generator/</div>
            <div className="text-gray-500 ml-8">    └── /tools/qr-code/</div>
          </div>
        </section>

        {/* Section Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            5 Main Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              const colorClasses = {
                blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
                purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
                red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400',
                orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400',
                green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400'
              }[section.color];

              return (
                <div 
                  key={section.name}
                  className={`rounded-xl border-2 p-6 ${colorClasses} ${section.current ? 'ring-2 ring-offset-2 ring-blue-500' : 'opacity-75'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold">{section.name}</h3>
                    {section.current && (
                      <span className="ml-auto text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-4 opacity-90">{section.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium opacity-70">Example URLs:</p>
                    {section.examples.map((url) => (
                      <div key={url} className="text-xs font-mono bg-white/50 dark:bg-black/20 rounded px-2 py-1">
                        {url}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Navigation Preview */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Navigation Preview
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Top Nav */}
            <nav className="bg-gray-900 text-white px-6 py-4">
              <div className="flex items-center gap-8">
                <span className="font-bold text-xl">MultiTools</span>
                <div className="hidden md:flex items-center gap-6 text-sm">
                  <span className="text-blue-400 border-b-2 border-blue-400 pb-1">Unit</span>
                  <span className="text-gray-400 hover:text-white cursor-pointer">Image</span>
                  <span className="text-gray-400 hover:text-white cursor-pointer">Video</span>
                  <span className="text-gray-400 hover:text-white cursor-pointer">PDF</span>
                  <span className="text-gray-400 hover:text-white cursor-pointer">Tools</span>
                </div>
              </div>
            </nav>

            {/* Sub Nav */}
            <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">multitools.pro/unit/</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600">Length</span>
                <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">Weight</span>
                <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">Temperature</span>
                <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">Data</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  CM to Inches Converter
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Centimeters</label>
                      <input type="number" className="w-full p-3 border rounded-lg" placeholder="2.54" />
                    </div>
                    <FiArrowRight className="text-gray-400" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Inches</label>
                      <input type="number" className="w-full p-3 border rounded-lg bg-gray-100" placeholder="1" readOnly />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Benefits of This Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ SEO Friendly</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Clean URLs like /unit/length/ instead of /unit-conversion/... Better keyword placement.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Scalable</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Easy to add new tools under each section without changing the structure.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ User Friendly</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Users can easily navigate between different tool types from one domain.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Brand Building</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Single domain builds stronger brand authority than multiple subdomains.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Current Site
            <FiExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
