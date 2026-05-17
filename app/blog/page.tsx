import { Metadata } from 'next';
import Link from 'next/link';
import { FiClock, FiTag } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Blog - Unit Conversion Guides & Tips | ConvertMaster',
  description: 'Expert guides on unit conversions, measurement systems, and practical conversion tips. Learn how to convert between metric and imperial units easily.',
  keywords: 'conversion blog, unit conversion guides, metric to imperial, measurement tips',
};

const blogPosts = [
  {
    slug: 'how-to-convert-kg-to-lbs',
    title: 'How to Convert KG to LBS: The Simple Way',
    excerpt: 'I used to always get confused converting kilos to pounds. Here is the easy trick I learned that works every time.',
    category: 'Weight',
    readTime: '3 min read',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-200',
  },
  {
    slug: 'understanding-celsius-fahrenheit',
    title: 'Celsius vs Fahrenheit: What is the Difference?',
    excerpt: 'Ever wondered why some countries use Celsius and others use Fahrenheit? I break it down simply.',
    category: 'Temperature',
    readTime: '4 min read',
    color: 'bg-red-500',
    borderColor: 'border-red-200',
  },
  {
    slug: 'metric-vs-imperial-systems',
    title: 'Metric or Imperial: Which One is Better?',
    excerpt: 'I have lived in countries that use both systems. Here is my honest take on which one makes more sense.',
    category: 'Education',
    readTime: '6 min read',
    color: 'bg-violet-500',
    borderColor: 'border-violet-200',
  },
  {
    slug: 'body-temperature-guide',
    title: 'Normal Body Temperature: When to Worry',
    excerpt: 'I checked my temperature and panicked. Turns out normal body temp varies more than you think.',
    category: 'Health',
    readTime: '3 min read',
    color: 'bg-amber-500',
    borderColor: 'border-amber-200',
  },
  {
    slug: 'data-storage-explained',
    title: 'MB, GB, TB: What Do They Actually Mean?',
    excerpt: 'Buying a new phone or laptop? Here is what those storage numbers really mean in plain English.',
    category: 'Technology',
    readTime: '4 min read',
    color: 'bg-blue-500',
    borderColor: 'border-blue-200',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        {/* About Blog Section */}
        <section>
          <div className="h-16" />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                About Blog
              </h1>
              <p className="text-lg text-gray-600 wrap-break-word">
                The Blog is where we share practical knowledge about measurements, conversions, and everyday calculations. We believe understanding units should be simple and accessible to everyone. Whether you are measuring, traveling, studying, or working, our articles help you make sense of numbers in plain language without confusing.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`rounded-lg border ${post.borderColor} bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer p-3 text-left group`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`flex items-center justify-center w-7 h-7 rounded ${post.color} text-white shrink-0`}>
                    <FiTag className="w-3.5 h-3.5" />
                  </div>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiClock className="w-3 h-3"></FiClock>
                    {post.readTime}
                  </span>
                  <span className="text-blue-600 text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
