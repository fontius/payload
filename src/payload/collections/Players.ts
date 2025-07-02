import type { CollectionConfig } from 'payload/types'

export const Players: CollectionConfig = {
  slug: 'players',
  admin: {
    useAsTitle: 'name',
    description: 'Manage the players for each team.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: "The player's full name.",
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'A headshot or action shot of the player. Should be a high-quality image.',
      },
    },
    {
      name: 'jerseyNumber',
      type: 'number',
      required: true,
      admin: {
        description: "The player's official jersey number.",
      },
    },
    {
      name: 'position',
      type: 'select',
      options: ['Forward', 'Defence', 'Goalie'],
      required: true,
      admin: {
        description: "The player's primary position on the ice.",
      },
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
      hasMany: false,
      admin: {
        description: 'Assign this player to their current team.',
      },
    },
  ],
}
