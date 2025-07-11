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
    // This is correct and still required.
    disableLocalStorage: true,

    // REMOVE THE `generateURL` FUNCTION FROM HERE.
    // The S3 storage plugin handles URL generation automatically.

    // Image resizing and compression are still handled by Payload correctly.
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
        position: 'center',
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
      {
        name: 'card',
        width: 640,
        height: undefined,
        position: 'center',
        formatOptions: { format: 'webp', options: { quality: 75 } },
      },
      {
        name: 'hero',
        width: 1920,
        height: undefined,
        position: 'center',
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
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
