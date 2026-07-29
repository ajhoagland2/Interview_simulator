import { describe, expect, it } from 'vitest'
import { defaultState, loadState, parseImport, saveState, STORAGE_KEY } from './storage'

describe('persistence', () => {
  it('round trips state', () => {
    const memory = new Map<string,string>()
    const storage = { getItem:(k:string)=>memory.get(k) ?? null, setItem:(k:string,v:string)=>{ memory.set(k,v) } }
    const state = defaultState(); state.reviewedCompany.push('mission')
    saveState(state, storage); expect(loadState(storage).reviewedCompany).toContain('mission')
    expect(memory.has(STORAGE_KEY)).toBe(true)
  })
  it('rejects incompatible imports', () => expect(()=>parseImport('{"version":2}')).toThrow())
})
