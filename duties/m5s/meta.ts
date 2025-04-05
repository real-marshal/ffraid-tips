import { DutyMetadata } from '@/app/[dutyName]/types'
import { DutyHeadings } from '@/app/[dutyName]/types'

export const isWip = true

export const meta: DutyMetadata = {
  shortTitle: 'M5S',
  fullTitle: 'AAC Cruiserweight M1',
  type: 'raid',
  difficulty: 'savage',
  patch: 7.2,
  minIlvl: 730,
}

export const headings: DutyHeadings = {
  preparation: 'Preparation',
  trivial: {
    label: 'Trivial',
    items: {
      test: 'test',
    },
  },
  core: {
    label: 'Core',
    items: {
      test: 'test',
    },
  },
}
