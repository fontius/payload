import type { CollectionConfig } from 'payload/types'

export const Teams: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
    description: 'Manage the hockey teams in the league.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'The official name of the team (e.g., "Minnesota Frost").',
      },
    },
    {
      name: 'city',
      type: 'text',
      required: true,
      admin: {
        description: 'The home city of the team (e.g., "Minnesota").',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload the official team logo. A transparent PNG or SVG is recommended.',
      },
    },
  ],
}
