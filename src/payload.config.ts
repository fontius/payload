import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

// --- Community Cloudinary Plugin Setup ---
import { v2 as cloudinary } from 'cloudinary'
// CORRECTED: Use a default import for this plugin
import * as cloudinaryPlugin from 'payload-cloudinary-plugin'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Logo from './payload/components/Logo'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize the Cloudinary SDK
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET!,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo,
      },
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || false,
  }),
  editor: lexicalEditor({}),
  collections: [Users, Media],
  plugins: [(cloudinaryPlugin as any).default()],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
