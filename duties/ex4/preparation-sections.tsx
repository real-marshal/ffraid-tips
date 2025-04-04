import rb6Raidplan from './rb6_raidplan.png'
import rb6Hector from './rb6_hector.png'
import ef2Raidplan from './ef2_raidplan.png'
import ef2Hector from './ef2_hector.png'
import ExportedImage from 'next-image-export-optimizer'
import { ReactNode } from 'react'

export function EFBaitingOrder() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'sup first (raidplan, wmg)',
          content: (
            <p>
              Supports follow the marks 1 and 3, while DPS - 2 and 4. You can either just convert
              the marks into moves for your role as they appear or remember the swaps like in the
              hector strat.
            </p>
          ),
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
          title: 'tn (true north, raidplan, wmg)',
          content: <p>Stand at your standard clock spot, move clockwise if needed.</p>,
        },
        {
          title: 'relative north (hector)',
          content: (
            <p>
              Stand at you clock spot relative to the new north defined by the two inner rose tiles
              separated by the inner non-rose tile.
            </p>
          ),
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
          title: 'n/s (mrrm/rmmr, thht/htth) (raidplan, wmg)',
          content: (
            <>
              <p>
                Supports stand north at the edge of the hitbox, DPS stand south at the edge of the
                hitbox. When the stacks end (donuts for the role with donuts), supports spread
                around the boss on the northern side in the order of THHT/HTTH from west to east,
                while DPS spread on the southern side in the order of MRRM/RMMR.
              </p>
              <p className='font-bold mt-2'>n/s mrrm thht after spreading:</p>
              <ExportedImage src={ef2Raidplan} alt='ef2 raidplan' />
            </>
          ),
        },
        {
          title: 'w/e (hector)',
          content: (
            <>
              <p>
                Same as n/s but replace north with west and south with east. Spread positions change
                to thht and rrmm from north to south. Why do this? No idea.
              </p>
              <p className='font-bold mt-2'>w/e after spreading:</p>
              <ExportedImage src={ef2Hector} alt='ef2 hector' />
            </>
          ),
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
          title: 'relative (raidplan, wmg)',
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
          title: 'raidplan',
          content: <ExportedImage src={rb6Raidplan} alt='rb6 raidplan' />,
        },
        {
          title: 'hector',
          content: <ExportedImage src={rb6Hector} alt='rb6 hector' />,
        },
      ]}
    />
  )
}

function PreparationSections({ sections }: { sections: { title: string; content: ReactNode }[] }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      {sections.map(({ title, content }, ind) => (
        <div key={ind} className='max-w-[300px] lg:max-w-[400px]'>
          <p className='font-bold text-lg mb-2'>{title}</p>
          {content}
        </div>
      ))}
    </div>
  )
}
