import type { AppState, QuestionState } from '../types'
import { introDraft, whyDraft } from '../data/content'

export const STORAGE_KEY = 'reframe-field-guide:v1'
export const emptyQuestion = (): QuestionState => ({ notes:'', bullets:'', star:'', short:'', long:'', confidence:1, practiced:false, review:false, practiceCount:0 })
export const defaultState = (): AppState => ({ version:1, reviewedCompany:[], responsibilityRatings:{}, questions:{}, selectedAsk:[], askBackups:[], intro:introDraft, whyReframe:whyDraft, storyNotes:{}, mockResults:[], logistics:[] })

export function loadState(storage: Pick<Storage,'getItem'> = localStorage): AppState {
  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as Partial<AppState>
    return { ...defaultState(), ...parsed, version:1 }
  } catch { return defaultState() }
}

export function saveState(state: AppState, storage: Pick<Storage,'setItem'> = localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function parseImport(text: string): AppState {
  const parsed = JSON.parse(text) as Partial<AppState>
  if (parsed.version !== 1) throw new Error('This file is not a supported Field Guide export.')
  return { ...defaultState(), ...parsed, version:1 }
}
