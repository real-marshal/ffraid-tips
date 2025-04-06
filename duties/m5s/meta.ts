import { DutyMetadata } from '@/app/[dutyName]/types'
import { DutyHeadings } from '@/app/[dutyName]/types'

export const isWip = false

export const meta: DutyMetadata = {
  shortTitle: 'M5S',
  fullTitle: 'AAC Cruiserweight M1',
  type: 'raid',
  difficulty: 'savage',
  patch: 7.2,
  minIlvl: 730,
  createdAt: new Date(Date.UTC(2025, 3, 6)),
}

export const headings: DutyHeadings = {
  preparation: {
    label: 'Preparation',
    items: {
      standardClockPositions: 'Standard clock positions',
      discoInfernalMeleeSpotlights: 'Disco Infernal melee spotlights',
      arcadyNightFeverSides: 'Arcady Night Fever sides & safe spots',
      alphaBetaDebuffsStrategy: 'Alpha/Beta debuffs strategy',
      quarterBeatsPairs: 'Quarter Beats pairs',
    },
  },
  trivial: {
    label: 'Trivial',
    items: {
      deepCut: 'Deep Cut',
      celebrateGoodTimes: 'Celebrate Good Times',
      highNrgFever: 'High-NRG Fever',
    },
  },
  core: {
    label: 'Core',
    items: {
      snapTwistNDropTheNeedle: '2/3/4-snap Twist & Drop the Needle',
      discoInfernal: 'Disco Infernal / Funky Floor',
      arcadyNightFever: 'Arcady Night Fever',
      rideTheWaves: 'Ride The Waves',
      frogtourage: 'Frogtourage',
      discoInfernal2: 'Disco Infernal 2',
      arcadyNightEncore: 'Arcady Night Encore',
      frogtourage2: 'Frogtourage 2',
      funkyFloor: 'Funky Floor 2',
    },
  },
}
