export type Section = 'dashboard' | 'company' | 'role' | 'background' | 'matrix' | 'questions' | 'mock' | 'dfma' | 'ask' | 'final'

export interface Question {
  id: string
  category: string
  prompt: string
}

export interface QuestionState {
  notes: string
  bullets: string
  star: string
  short: string
  long: string
  confidence: number
  practiced: boolean
  review: boolean
  practiceCount: number
}

export interface AppState {
  version: 1
  reviewedCompany: string[]
  responsibilityRatings: Record<string, number>
  questions: Record<string, QuestionState>
  selectedAsk: string[]
  askBackups: string[]
  intro: string
  whyReframe: string
  storyNotes: Record<string, string>
  mockResults: { date: string; mode: string; score: number; weak: string[] }[]
  logistics: string[]
}
