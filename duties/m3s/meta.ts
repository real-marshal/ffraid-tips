import { DutyMetadata } from '@/app/[dutyName]/types'
import { DutyHeadings } from '@/app/[dutyName]/types'

export const isWip = true

export const meta: DutyMetadata = {
  isCurrent: true,
  shortTitle: 'M3S',
  fullTitle: 'AAC Light-heavyweight M3',
  type: 'raid',
  difficulty: 'savage',
  patch: 7.05,
  minIlvl: 705,
}

export const headings: DutyHeadings = {
  preparation: 'Preparation',
  trivial: {
    label: 'Trivial',
    items: {
      brutalImpact: 'Brutal Impact',
      knuckleSandwich: 'Knuckle Sandwich ',
      dopingDraught: 'Doping Draught',
    },
  },
  core: {
    label: 'Core',
    items: {
      quatOctoLariat: 'Quadruple/Octuple Lariat',
    },
  },
}
