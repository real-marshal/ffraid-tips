import rb6Raidplan from './rb6_raidplan.png'
import rb6Hector from './rb6_hector.png'
import rb6NaRaidplan from './rb6_na_raidplan.png'
import ExportedImage from 'next-image-export-optimizer'
import { PreparationSections } from '@/components/preparation-sections'
import cleanArena from './clean_arena.png'
import { efRaidplanAnim } from '@/duties/ex4/ef_raidplan'
import { ef2RaidplanAnim } from '@/duties/ex4/ef2_raidplan'
import { ef2HectorAnim } from '@/duties/ex4/ef2_hector'
import { rb3RaidplanAnim } from '@/duties/ex4/rb3_raidplan'
import { rb3HectorAnim } from '@/duties/ex4/rb3_hector'

export function EFBaitingOrder() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'sup first (raidplan, wmg, -wj9)',
          content: (
            <p>
              Supports follow the marks 1 and 3, while DPS - 2 and 4. You can either just convert
              the marks into moves for your role as they appear or remember the swaps like in the
              hector strat.
            </p>
          ),
          image: cleanArena,
          imageAlt: 'escalons fall raidplan',
          animation: efRaidplanAnim,
        },
        {
          title: 'dps in always first (hector)',
          content: (
            <p>
              DPS always start in, then if the first two marks alternate, you swap after two
              attacks, if the first two marks are the same, you swap after the first and the third
              attacks.
            </p>
          ),
          imageLabel:
            'in this particular set of marks the moves are exactly the same as in raidplan',
          image: cleanArena,
          imageAlt: 'escalons fall raidplan',
          animation: efRaidplanAnim,
        },
      ]}
    />
  )
}

export function RB3Positions() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'tn (true north, eu raidplan, wmg)',
          content: (
            <p>Stand at your standard clock spot, move to the adjacent correct tile or clockwise</p>
          ),
          image: cleanArena,
          imageAlt: 'roseblood bloom 3 raidplan',
          animation: rb3RaidplanAnim,
        },
        {
          title: 'relative north (hector, na raidplan, -wj9)',
          content: (
            <p>
              Stand at you clock spot relative to the new north defined by the two inner rose tiles
              separated by the inner non-rose tile, move to the adjacent correct tile or clockwise
            </p>
          ),
          image: cleanArena,
          imageLabel:
            'in this particular case the moves are exactly the same as in raidplan, only starting positions are different',
          imageAlt: 'roseblood bloom 3 hector',
          animation: rb3HectorAnim,
        },
      ]}
    />
  )
}

export function EF2Strats() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'n/s (mrrm/rmmr, thht/htth) (raidplan, wmg, -wj9)',
          content: (
            <p>
              Supports stand north at the edge of the hitbox, DPS stand south at the edge of the
              hitbox. When the stacks end (donuts for the role with donuts), supports spread around
              the boss on the northern side in the order of THHT/HTTH from west to east, while DPS
              spread on the southern side in the order of MRRM/RMMR.
            </p>
          ),
          image: cleanArena,
          imageLabel: 'n/s mrrm thht',
          imageAlt: 'escalons fall 2 raidplan',
          animation: ef2RaidplanAnim,
        },
        {
          title: 'w/e (hector)',
          content: (
            <p>
              Same as n/s but replace north with west and south with east. Spread positions change
              to thht and rrmm from north to south.
            </p>
          ),
          image: cleanArena,
          imageLabel: 'w/e',
          imageAlt: 'escalons fall 2 hector',
          animation: ef2HectorAnim,
        },
        {
          title: 'braindead',
          content: (
            <p>
              Stand in the boss to share both stacks, if you have a donut, drop it further away from
              the boss. Then take your standard clock spots.
            </p>
          ),
        },
      ]}
    />
  )
}

export function RB4Directions() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'relative (raidplan, wmg, -wj9)',
          content: (
            <p>
              From their initial chain stack position (the two non-rose tiles), supports run left,
              DPS run right.
            </p>
          ),
        },
        {
          title: 'w/e (hector)',
          content: <p>Supports run west, DPS run east.</p>,
        },
      ]}
    />
  )
}

export function RB6Roses() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'eu raidplan (wmg)',
          content: <ExportedImage src={rb6Raidplan} alt='rb6 raidplan' />,
        },
        {
          title: 'hector',
          content: <ExportedImage src={rb6Hector} alt='rb6 hector' />,
        },
        {
          title: 'na raidplan (-wj9)',
          imageLabel:
            'the raidplan prefers melee south ranged north, but also allows for melee north (close to the boss) with ranged south',
          content: <ExportedImage src={rb6NaRaidplan} alt='rb6 raidplan (NA)' />,
        },
      ]}
    />
  )
}
