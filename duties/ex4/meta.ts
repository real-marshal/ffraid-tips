import { DutyMetadata } from '@/app/[dutyName]/types'
import { DutyHeadings } from '@/app/[dutyName]/types'

export const isWip = false

export const meta: DutyMetadata = {
  shortTitle: 'EX4',
  fullTitle: `Recollection`,
  type: 'trial',
  difficulty: 'extreme',
  patch: 7.2,
  minIlvl: 730,
  createdAt: new Date(Date.UTC(2025, 3, 1)),
}

export const headings: DutyHeadings = {
  preparation: {
    label: 'Preparation',
    items: {
      standardClockPositions: 'Standard clock positions',
      efBaitingOrder: 'EF1/3 baiting order',
      rb3Positions: 'RB3 positions',
      ef2Strat: 'EF2 strategy',
      rb4Directions: 'RB4 chain breaking direction',
      rb6Roses: 'RB6 roses drop areas',
    },
  },
  trivial: {
    label: 'Trivial casts',
    items: {
      thornedCatharsis: 'Thorned Catharsis',
      stockBreak: 'Stock Break',
      specterOfTheLost: 'Specter of the Lost',
      perfumedQuietus: 'Perfumed Quietus',
      rb: 'Roseblood Bloom',
    },
  },
  core: {
    label: 'Core mechs',
    items: {
      shock: 'Shock',
      escelonsFall: `Escelons' Fall 1`,
      blessedBarricade: 'Blessed Barricade',
      rb1: 'Roseblood Bloom 1',
      rb2: 'Roseblood Bloom 2',
      rb3: 'Roseblood Bloom 3',
      escelonsFall2: `Escelons' Fall 2`,
      rb4: 'Roseblood Bloom 4',
      escelonsFall3: `Escelons' Fall 3`,
      rb5: 'Roseblood Bloom 5',
      rb6: 'Roseblood Bloom 6',
    },
  },
}
