import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
    The `output: 'standalone'` option is required by the provided Dockerfile.
    It creates a standalone folder with only the necessary files for production,
    minimizing the Docker image size.
  */
  output: 'standalone',

  webpack: (config) => {
    // This explicitly configures the Webpack resolver to ensure it
    // understands the `@/` path alias, fixing the font loading issue.
    config.resolve.alias['@'] = path.resolve(__dirname, './src')
    return config
  },
}

export default nextConfig
