import { Navbar, NavbarLink, NavbarSubmenuItem } from '@/components/navbar'
import path from 'node:path'
import fs from 'node:fs'
import { DutyMetadata } from '@/app/[dutyName]/types'
import { currentTierPatch, patchToTierMap, TierName, tiers } from '@/gameData'
import { slugify } from '@/utils/slugify'

async function getMenuItems(): Promise<NavbarSubmenuItem[]> {
  const dir = path.join(process.cwd(), 'duties')
  const duties = fs.readdirSync(dir)

  const promises = duties.map(
    (dutyName) => import(`@/duties/${dutyName}/meta.ts`) as Promise<{ meta: DutyMetadata }>
  )
  const dutyMetas = (await Promise.all(promises))
    .map(({ meta }) => meta)
    .sort((a, b) => b.patch - a.patch || b.shortTitle.localeCompare(a.shortTitle))

  const dutyMetasByTier = dutyMetas.reduce(
    (result, dutyMeta) => {
      // @ts-expect-error arbitrary number used as index
      const tier = patchToTierMap[Math.floor(dutyMeta.patch)] as TierName

      if (!tier) {
        throw new Error(`There is no tier for patch ${dutyMeta.patch}`)
      }

      result[tier] ??= {}
      result[tier][dutyMeta.type] ??= []
      result[tier][dutyMeta.type]?.push({
        label: dutyMeta.shortTitle,
        longLabel: dutyMeta.fullTitle,
        chips: dutyMeta.difficulty !== 'normal' ? [dutyMeta.difficulty] : [],
        href: slugify(dutyMeta.shortTitle),
      })

      if (dutyMeta.patch >= currentTierPatch) {
        result['current patch'] ??= {}
        result['current patch'][dutyMeta.type] ??= []
        result['current patch'][dutyMeta.type]?.push({
          label: dutyMeta.shortTitle,
          longLabel: dutyMeta.fullTitle,
          chips: dutyMeta.difficulty !== 'normal' ? [dutyMeta.difficulty] : [],
          href: slugify(dutyMeta.shortTitle),
        })
      }

      return result
    },
    {} as Record<TierName, Partial<Record<DutyMetadata['type'], NavbarLink[]>>>
  )

  const sectionOrdering: Record<DutyMetadata['type'], number> = {
    raid: 0,
    trial: 1,
    'alliance-raid': 2,
  }

  return tiers.map((tier) => ({
    label: tier.name,
    submenu: {
      backgroundImage: tier.image,
      sections: Object.entries(dutyMetasByTier[tier.name])
        .sort(
          ([aType], [bType]) =>
            sectionOrdering[aType as DutyMetadata['type']] -
            sectionOrdering[bType as DutyMetadata['type']]
        )
        .map(([type, items]) => ({
          label: type.replace('-', ' ') + 's',
          items,
        })),
    },
  }))
}

export async function Header() {
  const menuItems = await getMenuItems()

  return (
    <>
      <header className='bg-base-300 flex items-center sticky top-0 z-99' data-theme='dark'>
        <Navbar items={menuItems} />
      </header>
    </>
  )
}
