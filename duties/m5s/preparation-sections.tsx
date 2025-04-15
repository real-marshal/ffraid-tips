import { PreparationSections } from '@/components/preparation-sections'
import cleanArena from '@/duties/m5s/clean_arena.png'
import anfRaidplan from '@/duties/m5s/anf_raidplan.png'
import andHector from '@/duties/m5s/anf_hector.png'
import conga from '@/duties/m5s/conga.png'
import { diHectorMeleeAnim } from '@/duties/m5s/di_hector_melee'
import { diRaidplanMeleeAnim } from '@/duties/m5s/di_raidplan_melee'
import { anfRaidplanAnim } from '@/duties/m5s/anf_raidplan'
import { anfHectorAnim } from '@/duties/m5s/anf_hector'

export function DiscoInfernalMeleeSpotlights() {
  return (
    <PreparationSections
      sections={[
        {
          title: 'raidplan (6pH)',
          content: (
            <p>
              First you need to understand that the near spotlights on red tiles appear on opposite
              sides (not diagonal like far spotlights) - either on the south/north or west/east. If
              you're MT/M1, look at the western and/or northern side when the arena changes and
              remember where the initial red tile spotlight is - north or west (personally I like
              thinking about relative positions here - like red is on the right/left/far/near). Then
              look at your debuff duration. If it's long - your spotlight will be in an area of the
              red tile spotlight. If it's short - your spotlight will be in an area with the
              spotlight on the safe tile at the moment of the arena change. OT/M2 should look at the
              eastern and/or southern sides instead, then follow the same logic.
            </p>
          ),
          imageLabel: 'notice there are 2 possible tiles for each spotlight:',
          image: cleanArena,
          imageAlt: 'disco infernal raidplan melee',
          animation: diRaidplanMeleeAnim,
        },
        {
          title: 'hector',
          content: (
            <p>
              While the raidplan basically divides the arena diagonally to choose who gets which
              spotlight, here the arena is divided vertically into west and east only, which
              accidentally allows you to completely ignore the timers. All you need to do if you're
              MT/M1 is to remember the spotlight at the red tile on the western side when the arena
              changes, OT/M2 - on the eastern side, no matter if it's north or south. Then you just
              stand around there. When your timer ends, your spotlight will be somewhere near there.
            </p>
          ),
          imageLabel: 'possible spotlight tiles are outlined in green',
          image: cleanArena,
          imageAlt: 'disco infernal hector melee',
          animation: diHectorMeleeAnim,
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
            <p>
              Supports spread on the west and DPS on the east, in such a way that there are safe
              spots on the north and south. After getting hit by the cone attack, start moving
              north/south to one of those safe spots where you'll keep moving back and forth. The
              strat sucks honestly because there's just not enough space to comfortably spread so an
              attack often hits multiple people instead of one.
            </p>
          ),
          image: anfRaidplan,
          imageAlt: 'arcady night fever raidplan',
          animation: anfRaidplanAnim,
        },
        {
          title: 'hector',
          content: (
            <p>
              Supports spread on the north and DPS on the south taking all available space (no safe
              spots defined). After getting hit by the cone attack, move left/right to dodge the
              next repeating attack on your spot, then return back to where you were to keep going
              back and forth.
            </p>
          ),
          image: andHector,
          imageAlt: 'arcady night fever hector',
          animation: anfHectorAnim,
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
            <p>
              Look at your debuff timers and form a line such that every alpha-beta pair with the
              same debuff durations stand on the same tile. I like to preposition myself for the
              first frog first, then when the cast passes the midpoint and gets to ~70% I look at my
              debuff duration. At that point, it will be one of 5/10/15/20 secs which can be easily
              mapped into 1/2/3/4 tile. Keep in mind that you might hear different timer values from
              different people depending on when exactly they look at the timer.
            </p>
          ),
          image: conga,
          imageAlt: 'conga line raidplan',
        },
        {
          title: 'no conga',
          content: (
            <p>
              Stand to the north or south of the boss, when the timer gets to 5 secs run to the
              center, wait till it expires, then run back to allow others do the same.
            </p>
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
