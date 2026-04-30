import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiTrendingUp, FiCheckCircle, FiActivity, FiZap, FiShield, FiUsers, FiWind, FiNavigation } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Speed Converter - Free Online Tool | Convert mph, km/h, m/s, knots',
  description: 'Free online speed converter. Convert between miles per hour, kilometers per hour, meters per second, knots. Accurate calculations, conversion tables, and transportation examples.',
  keywords: 'speed converter, mph to km/h, kilometers per hour to miles per hour, meters per second, knots conversion, wind speed, online tool',
  openGraph: {
    title: 'Speed Converter - Free Online Tool',
    description: 'Convert between different units of speed instantly',
    type: 'website',
  },
};

export default function SpeedConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">Speed Converter</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert between miles per hour, kilometers per hour, meters per second, and more
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="card p-6">
              <ConverterCard category="speed" defaultFrom="kmh" defaultTo="mph" />
            </div>
          </div>
        </section>

        {/* Speed Unit Definitions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Speed Unit Definitions</h3>
            <p className="section-subtitle">Understanding speed measurement standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Meter Per Second (m/s)</h5>
              <p className="text-sm text-gray-600">The SI unit of speed. Defined as the distance traveled in meters divided by time in seconds. Used in physics, engineering, and scientific calculations worldwide.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Kilometer Per Hour (km/h)</h5>
              <p className="text-sm text-gray-600">Equal to 0.2778 meters per second. The standard unit for road speeds in most countries worldwide. Used on speedometers, road signs, and vehicle specifications.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Mile Per Hour (mph)</h5>
              <p className="text-sm text-gray-600">Equal to 1.609 km/h or 0.447 m/s. Used primarily in the United States and UK for road speeds, vehicle specifications, and weather reports.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Knot</h5>
              <p className="text-sm text-gray-600">Equal to 1.852 km/h or 0.514 m/s. Used in maritime and aviation contexts for measuring the speed of ships and aircraft.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Foot Per Second (ft/s)</h5>
              <p className="text-sm text-gray-600">Equal to 0.3048 m/s or 1.097 km/h. Used in engineering and ballistics calculations in countries using imperial units.</p>
            </div>
            <div className="card p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Speed of Light</h5>
              <p className="text-sm text-gray-600">299,792,458 m/s. The universal speed limit in vacuum. Used in physics, astronomy, and telecommunications calculations.</p>
            </div>
          </div>
        </section>

        {/* Common Speed Conversions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Speed Conversions</h3>
            <p className="section-subtitle">Quick reference for everyday speed measurements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">km/h to mph</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>50 km/h = 31.07 mph</li>
                <li>100 km/h = 62.14 mph</li>
                <li>120 km/h = 74.56 mph</li>
                <li>200 km/h = 124.27 mph</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">mph to km/h</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>30 mph = 48.28 km/h</li>
                <li>60 mph = 96.56 km/h</li>
                <li>75 mph = 120.70 km/h</li>
                <li>100 mph = 160.93 km/h</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiWind className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">m/s to km/h</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>10 m/s = 36 km/h</li>
                <li>20 m/s = 72 km/h</li>
                <li>30 m/s = 108 km/h</li>
                <li>40 m/s = 144 km/h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Real-World Applications</h3>
            <p className="section-subtitle">Where speed conversion is essential</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#3b82f6' }}>
                  <FiNavigation className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Transportation</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Car speed limits:</strong> 60 mph = 96.6 km/h</p>
                <p><strong>Highway driving:</strong> 120 km/h = 74.6 mph</p>
                <p><strong>City driving:</strong> 50 km/h = 31.1 mph</p>
                <p><strong>Train speed:</strong> 300 km/h = 186.4 mph</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiWind className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Weather & Aviation</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Wind speed:</strong> 20 knots = 37.0 km/h</p>
                <p><strong>Hurricane:</strong> 150 km/h = 93.2 mph</p>
                <p><strong>Aircraft cruise:</strong> 900 km/h = 559.2 mph</p>
                <p><strong>Takeoff speed:</strong> 250 km/h = 155.3 mph</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiTrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Sports & Athletics</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Running:</strong> 10 m/s = 36 km/h (sprint)</p>
                <p><strong>Cycling:</strong> 60 km/h = 37.3 mph (pro)</p>
                <p><strong>Swimming:</strong> 2 m/s = 7.2 km/h (olympic)</p>
                <p><strong>Sailing:</strong> 15 knots = 27.8 km/h</p>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#f59e0b' }}>
                  <FiTrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Science & Physics</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Sound speed:</strong> 343 m/s = 1,235 km/h</p>
                <p><strong>Earth rotation:</strong> 465 m/s = 1,674 km/h</p>
                <p><strong>Orbital speed:</strong> 7.8 km/s = 28,080 km/h</p>
                <p><strong>Light speed:</strong> 299,792 km/s = 1,079,252,848 km/h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert Speed Units</h3>
            <p className="section-subtitle">Simple steps for accurate speed conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Speed Value</h4>
              <p className="text-sm text-gray-600">Input the speed measurement you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#3b82f6' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Unit</h4>
              <p className="text-sm text-gray-600">Choose the current speed unit (km/h, mph, m/s, etc.)</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Unit</h4>
              <p className="text-sm text-gray-600">Select the speed unit to convert to</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">View instant, accurate conversion results</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about speed conversion</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How many km/h are in a mph?</h4>
              <p className="text-sm text-gray-600">One mile per hour equals 1.60934 kilometers per hour. This is the standard conversion used worldwide.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is a knot used for?</h4>
              <p className="text-sm text-gray-600">Knots are used in maritime and aviation contexts. One knot equals one nautical mile per hour (1.852 km/h).</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why do different countries use different speed units?</h4>
              <p className="text-sm text-gray-600">Historical reasons and established measurement systems. Most countries use km/h, while the US uses mph for road speeds.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate is this speed converter?</h4>
              <p className="text-sm text-gray-600">Our converter provides results with up to 10 decimal places, using standard international conversion factors for professional accuracy.</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Platform Statistics</h3>
            <p className="section-subtitle">Trusted by professionals worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="metric-label">Speed Units</div>
              <div className="metric-value">8+</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Available</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Systems</div>
              <div className="metric-value">3</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Metric, Imperial, Nautical</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Precision</div>
              <div className="metric-value">10</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Decimal Places</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Applications</div>
              <div className="metric-value">35+</div>
              <div className="metric-change positive">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Use Cases</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Choose ConvertMaster?</h3>
            <p className="section-subtitle">Professional features designed for precision and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4">
                <FiShield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h4>
              <p className="text-sm text-gray-600 mb-4">
                Bank-level encryption with GDPR compliance and complete data privacy protection.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#6b7280' }}>
                <FiUsers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Trust</h4>
              <p className="text-sm text-gray-600 mb-4">
                50M+ active users worldwide trust our platform for accurate, instant conversions.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#6b7280' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-sm text-gray-600 mb-4">
                0.1s response time with instant calculations and real-time results.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Convert More Units?</h3>
            <p className="section-subtitle mb-8">
              Explore our other free conversion tools for all your measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/length-converter/"
                className="btn btn-primary"
              >
                <span>Length Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/weight-converter/"
                className="btn btn-secondary"
              >
                <span>Weight Converter</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="btn btn-secondary"
              >
                <span>All Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
