export interface DutyMetadata {
  shortTitle: string
  fullTitle: string
  type: 'raid' | 'trial' | 'alliance-raid'
  difficulty: 'normal' | 'savage' | 'extreme' | 'unreal' | 'chaotic' | 'ultimate'
  patch: number
  minIlvl: number
  createdAt: Date
}

export type DutyHeadings = Record<string, string | { label: string; items: Record<string, string> }>
