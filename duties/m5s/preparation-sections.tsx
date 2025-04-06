import { PreparationSections } from '@/components/preparation-sections'
import ExportedImage from 'next-image-export-optimizer'
import diRaidplanMelee from '@/duties/m5s/di_raidplan_melee.png'
import diHectorMelee from '@/duties/m5s/di_hector_melee.png'
import anfRaidplan from '@/duties/m5s/anf_raidplan.png'
import andHector from '@/duties/m5s/anf_hector.png'
import conga from '@/duties/m5s/conga.png'

export function DiscoInfernalMeleeSpotlights() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'raidplan (6pH)',
          content: (
            <>
              <p>
                First you need to understand that the near spotlights on red tiles appear on
                opposite sides (not diagonal like far spotlights) - either on the south/north or
                west/east. If you're MT/M1, look at the western and/or northern side when the arena
                changes and remember where the initial red tile spotlight is - north or west
                (personally I like thinking about relative positions here - like red is on the
                right/left/far/near). Then look at your debuff duration. If it's long - your
                spotlight will be in an area of the red tile spotlight. If it's short - your
                spotlight will be in an area with the spotlight on the safe tile at the moment of
                the arena change. OT/M2 should look at the eastern and/or southern sides instead,
                then follow the same logic.
              </p>
              <p className='font-bold mt-2'>
                notice there are 2 possible tiles for each spotlight:
              </p>
              <ExportedImage src={diRaidplanMelee} alt='di raidplan melee' />
            </>
          ),
        },
        {
          title: 'hector',
          content: (
            <>
              <p>
                While the raidplan basically divides the arena diagonally to choose who gets which
                spotlight, here the arena is divided vertically into west and east only, which
                accidentally allows you to completely ignore the timers. All you need to do if
                you're MT/M1 is to remember the spotlight at the red tile on the western side when
                the arena changes, OT/M2 - on the eastern side, no matter if it's north or south.
                Then you just stand around there. When your timer ends, your spotlight will be
                somewhere near there.
              </p>
              <p className='font-bold mt-2'>
                w/e red tile spotlights example, still 2 possible tiles for each spotlight. in n/s
                case, you get the same 2-tile configuration but in the other corners (like instead
                of d-c and a-b markers like here it would be d-a and c-b):
              </p>
              <ExportedImage src={diHectorMelee} alt='di hector melee' />
            </>
          ),
        },
      ]}
    />
  )
}

export function ArcadyNightFeverSides() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'raidplan (6pH)',
          content: (
            <>
              <p>
                Supports spread on the west and DPS on the east, in such a way that there are safe
                spots on the north and south. After getting hit by the cone attack, start moving
                north/south to one of those safe spots where you'll keep moving back and forth.
              </p>
              <ExportedImage src={anfRaidplan} alt='anf raidplan' />
            </>
          ),
        },
        {
          title: 'hector',
          content: (
            <>
              <p>
                Supports spread on the north and DPS on the south taking all available space (no
                safe spots defined). After getting hit by the cone attack, move left/right to dodge
                the next repeating attack on your spot, then return back to where you were to keep
                going back and forth.
              </p>
              <ExportedImage src={andHector} alt='anf hector' />
            </>
          ),
        },
      ]}
    />
  )
}

export function AlphaBetaDebuffsStrategy() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'raidplan (6pH), hector, conga line',
          content: (
            <>
              <p>
                Look at your debuff timers and form a line such that every alpha-beta pair with the
                same debuff durations stand on the same tile. I like to preposition myself for the
                first frog first, then when the cast passes the midpoint and gets to ~70% I look at
                my debuff duration. At that point, it will be one of 5/10/15/20 secs which can be
                easily mapped into 1/2/3/4 tile. Keep in mind that you might hear different timer
                values from different people depending on when exactly they look at the timer.
              </p>
              <ExportedImage src={conga} alt='conga' />
            </>
          ),
        },
        {
          title: 'no conga',
          content: (
            <>
              <p>
                Stand to the north or south of the boss, when the timer gets to 5 secs run to the
                center, wait till it expires, then run back to allow others do the same.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}

export function QuarterBeatsPairs() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'raidplan (6pH)',
          content: (
            <div className='flex flex-row gap-3'>
              <ul className='border-1 rounded-md p-2 inline-block'>
                <li>MT - M1</li>
                <li>OT - M2</li>
              </ul>
              <ul className='border-1 rounded-md p-2 inline-block'>
                <li>R1 - H1</li>
                <li>R2 - H2</li>
              </ul>
            </div>
          ),
        },
        {
          title: 'hector (not used during frogtourage)',
          content: (
            <div className='flex flex-row gap-3'>
              <ul className='border-1 rounded-md p-2 inline-block'>
                <li>MT - R1</li>
                <li>M1 - H1</li>
              </ul>
              <ul className='border-1 rounded-md p-2 inline-block'>
                <li>OT - R2</li>
                <li>M2 - H2</li>
              </ul>
            </div>
          ),
        },
      ]}
    />
  )
}
