import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const s3Adapter = s3Storage({
  collections: {
    // Enable S3 storage for the 'media' collection
    media: true,
  },
  bucket: process.env.S3_BUCKET!,
  config: {
    endpoint: process.env.S3_ENDPOINT!,
    // A dummy region is required for S3-compatible services
    region: 'us-east-1',
    // Force path style is required for Supabase
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  },
})

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET!,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || false,
  }),
  editor: lexicalEditor({}),
  collections: [Users, Media],
  plugins: [s3Adapter],
  typescript: {
    outputFile: path.resolve(__dirname, 'src', 'payload-types.ts'),
  },
})
