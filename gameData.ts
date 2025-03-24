// update this every time a new tier drops (currently at even patches)
export const currentTierPatch = 7

export type TierName = 'current patch' | 'dawntrail'

export const tiers = [
  {
    name: 'current patch',
    image: 'current-patch.png',
  },
  {
    name: 'dawntrail',
    image: 'dt.webp',
  },
] as const

export const patchToTierMap = {
  7: 'dawntrail',
} as const
