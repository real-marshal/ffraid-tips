import currentPatchImage from './public/images/current-patch.png'
import dtImage from './public/images/dt.webp'

// update this every time a new tier drops (currently at even patches)
export const currentTierPatch = 7.2

export type TierName = 'current patch' | 'dawntrail'

export const tiers = [
  {
    name: 'current patch',
    image: currentPatchImage,
  },
  {
    name: 'dawntrail',
    image: dtImage,
  },
] as const

export const patchToTierMap = {
  7: 'dawntrail',
} as const
