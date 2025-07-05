/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // The MongoDB driver conditionally requires these modules.
    // This is the standard solution to the "Module not found: Can't resolve 'aws4'" error.
    // We can safely ignore them as they are not needed for Payload's core functionality.
    config.externals.push({
      aws4: 'commonjs aws4',
      'mongodb-client-encryption': 'commonjs mongodb-client-encryption',
    })

    return config
  },
}

export default nextConfig
