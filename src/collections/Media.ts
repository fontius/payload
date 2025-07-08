import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    description: 'Upload images and other media for use across the site.',
  },
  access: {
    read: () => true,
  },
  upload: {
    // This is CRITICAL for the storage adapter to work in a deployed environment.
    // It tells Payload to not save the file to the local server disk at all.
    disableLocalStorage: true,
    // This function is now responsible for generating the public URL.
    // It is configured via an environment variable for flexibility.
    generateURL: ({ filename }) => {
      // The SUPABASE_PUBLIC_URL env var should be set to:
      // `https://<your-project-ref>.supabase.co/storage/v1/object/public/<your-bucket-name>`
      return `${process.env.SUPABASE_PUBLIC_URL}/${filename}`
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
        position: 'center',
      },
      // ... other image sizes
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
  ],
}
