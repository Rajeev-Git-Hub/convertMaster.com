import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/unit-conversion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/unit-conversion/' : '',
  distDir: 'out',
  
  // Performance optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
  
  // Experimental features for optimization
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  
  // Turbopack configuration
  turbopack: {},
};

export default nextConfig;
