import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MB, GB, TB: What Do They Actually Mean? | ConvertMaster',
  description: 'Buying a new phone or laptop? Here is what those storage numbers really mean in plain English.',
  keywords: 'data storage explained, MB GB TB difference, how much storage do I need',
};

export default function DataStorageExplainedPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            MB, GB, TB: What Do They Actually Mean?
          </h1>
          <p className="text-xl text-purple-100">
            Stop guessing if 128GB is enough for your new phone
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Your "500GB" Drive Shows Less
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I bought a 500GB hard drive once. Plugged it in. Windows said 465GB. 
                I thought I got ripped off. Turns out, there is a reason for this - 
                and it involves math that nobody explains properly.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Here is what MB, GB, and TB actually mean, why your storage is never quite what you paid for, 
                and how much you really need.
              </p>
            </section>

            {/* Storage Units Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Digital Storage Units
              </h2>
              <div className="overflow-x-auto max-w-full">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-4 font-semibold text-gray-900 dark:text-white rounded-tl-lg">Unit</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white">Abbreviation</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white">Size</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white rounded-tr-lg">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Bit</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">b</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">0 or 1</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Binary digit</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Byte</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">B</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">8 bits</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">One text character</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Kilobyte</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">KB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">1,024 bytes</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Short email</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Megabyte</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">MB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">1,024 KB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">MP3 song (3-5 MB)</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Gigabyte</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">GB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">1,024 MB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Movie (1-2 GB)</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Terabyte</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">TB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">1,024 GB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Hard drive</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Petabyte</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">PB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">1,024 TB</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Data center</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Binary vs Decimal */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Binary vs Decimal: Why 1,024 instead of 1,000?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Computers work in binary (base-2), so storage units are based on powers of 2. 
                This is why we use 1,024 (2^10) instead of 1,000 when converting between units.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  The Math
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 1 KB = 2^10 bytes = 1,024 bytes</li>
                  <li>• 1 MB = 2^20 bytes = 1,048,576 bytes</li>
                  <li>• 1 GB = 2^30 bytes = 1,073,741,824 bytes</li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                However, storage manufacturers often use decimal (base-10) for marketing, 
                which is why a "500 GB" drive shows as ~465 GB on your computer.
              </p>
            </section>

            {/* Real World Examples */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Real-World File Sizes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                    Small Files
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex justify-between">
                      <span>Text document</span>
                      <span className="font-medium">~50 KB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>PDF document</span>
                      <span className="font-medium">~500 KB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>High-res photo</span>
                      <span className="font-medium">~3-5 MB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>MP3 song</span>
                      <span className="font-medium">~3-5 MB</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                    Large Files
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex justify-between">
                      <span>HD Movie</span>
                      <span className="font-medium">~2-4 GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>4K Movie</span>
                      <span className="font-medium">~15-25 GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Video game</span>
                      <span className="font-medium">~50-150 GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Operating system</span>
                      <span className="font-medium">~20-30 GB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Storage Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Storage Buying Guide
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Laptop</h3>
                  <p className="text-gray-700 dark:text-gray-300">256 GB – 512 GB for most users</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smartphone</h3>
                  <p className="text-gray-700 dark:text-gray-300">128 GB – 256 GB recommended</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">🎮</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gaming</h3>
                  <p className="text-gray-700 dark:text-gray-300">1 TB or more for game storage</p>
                </div>
              </div>
            </section>

            {/* Conversion Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Conversion Reference
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Common Conversions</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 1 GB = 1,024 MB</li>
                      <li>• 1 MB = 1,024 KB</li>
                      <li>• 1 TB = 1,024 GB</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Approximate (Decimal)</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 1 GB ≈ 1,000 MB</li>
                      <li>• 1 MB ≈ 1,000 KB</li>
                      <li>• 1 TB ≈ 1,000 GB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need to Convert File Sizes?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Use our free data storage converter for accurate conversions
              </p>
              <Link
                href="/mb-to-gb"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
              >
                Try Data Converter
              </Link>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
