import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiBook, FiClock, FiTag, FiCheckCircle, FiZap, FiActivity, FiTrendingUp } from 'react-icons/fi';

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
  },
  {
    slug: 'understanding-celsius-fahrenheit',
    title: 'Celsius vs Fahrenheit: What is the Difference?',
    excerpt: 'Ever wondered why some countries use Celsius and others use Fahrenheit? I break it down simply.',
    category: 'Temperature',
    readTime: '4 min read',
  },
  {
    slug: 'metric-vs-imperial-systems',
    title: 'Metric or Imperial: Which One is Better?',
    excerpt: 'I have lived in countries that use both systems. Here is my honest take on which one makes more sense.',
    category: 'Education',
    readTime: '6 min read',
  },
  {
    slug: 'body-temperature-guide',
    title: 'Normal Body Temperature: When to Worry',
    excerpt: 'I checked my temperature and panicked. Turns out normal body temp varies more than you think.',
    category: 'Health',
    readTime: '3 min read',
  },
  {
    slug: 'data-storage-explained',
    title: 'MB, GB, TB: What Do They Actually Mean?',
    excerpt: 'Buying a new phone or laptop? Here is what those storage numbers really mean in plain English.',
    category: 'Technology',
    readTime: '4 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="premium-badge">
              <FiBook className="w-3 h-3"></FiBook>
              <span>Expert Guides</span>
            </div>
            <div className="badge badge-success">
              <FiCheckCircle className="w-3 h-3"></FiCheckCircle>
              <span>5 Articles</span>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about unit conversions, formulas, and practical examples. New articles are added regularly.
          </p>
          
          <h1 className="hero-gradient text-4xl font-bold mb-4">ConvertMaster Blog</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Expert guides, tips, and insights on unit conversions and measurement systems
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Latest Articles</h3>
            <p className="section-subtitle">Practical guides and expert insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 text-left group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box icon-box-primary mb-2" style={{ background: '#3b82f6' }}>
                    <FiTag className="w-4 h-4 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FiClock className="w-3 h-3"></FiClock>
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FiClock className="w-3 h-3"></FiClock>
                    {post.readTime}
                  </span>
                  <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read More
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Browse by Category</h3>
            <p className="section-subtitle">Find articles that match your interests</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Weight', 'Temperature', 'Education', 'Health', 'Technology'].map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className="card p-4 text-center group hover:bg-blue-50 transition-colors"
              >
                <div className="icon-box icon-box-primary mb-3 mx-auto" style={{ 
                  background: category === 'Weight' ? '#10b981' : 
                             category === 'Temperature' ? '#ef4444' : 
                             category === 'Education' ? '#8b5cf6' : 
                             category === 'Health' ? '#f59e0b' : '#3b82f6'
                }}>
                  <FiTag className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {blogPosts.filter(post => post.category === category).length} articles
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Blog Statistics</h3>
            <p className="section-subtitle">Growing resource for conversion knowledge</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="metric-label">Total Articles</div>
              <div className="metric-value">5</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Published</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Categories</div>
              <div className="metric-value">5</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Topics</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Avg Read Time</div>
              <div className="metric-value">4m</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Quick Read</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Updated</div>
              <div className="metric-value">Weekly</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Fresh Content</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Need to Convert Something Now?</h3>
            <p className="section-subtitle mb-8">
              Try our free online converters for instant, accurate results
            </p>
            <Link
              href="/all-converters"
              className="btn btn-primary"
            >
              <span>Explore All Converters</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
