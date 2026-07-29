import { describe, expect, it } from 'vitest'
import { scoreAnswer } from './scoring'

describe('scoreAnswer', () => {
  it('rewards evidence, ownership, outcome, and relevance', () => {
    const result = scoreAnswer('My main point is that I turn production problems into repeatable systems. For example, when a feeder lane flooded, I observed the lane pairs, measured the gaps, tested one variable at a time, and documented the result. The work identified physical causes and enabled a more repeatable investigation. That matters at Reframe because DFMA depends on connecting factory evidence to buildability decisions.')
    expect(result.score).toBeGreaterThan(75)
  })
  it('flags vague unsupported answers', () => {
    const result = scoreAnswer('We basically always made everything perfect.')
    expect(result.score).toBeLessThan(50)
    expect(result.feedback.length).toBeGreaterThan(0)
  })
})
