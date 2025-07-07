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
    // This is CRITICAL for the cloudinary plugin to work in a deployed environment.
    // It tells Payload to not save the file to the local server disk at all.
    disableLocalStorage: true,
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
