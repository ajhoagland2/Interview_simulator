export interface AnswerScore { score:number; feedback:string[]; checks:Record<string,boolean> }
const filler = /\b(um+|uh+|like|you know|basically|kind of|sort of)\b/gi
const negative = /\b(unfortunately|I can't|I cannot|I failed|I’m bad|I'm bad|never learned)\b/gi
const unsupported = /\b(always|never|guaranteed|perfect|100%|best)\b/gi

export function scoreAnswer(answer: string): AnswerScore {
  const words = answer.trim().split(/\s+/).filter(Boolean)
  const lower = answer.toLowerCase()
  const sentences = answer.split(/[.!?]+/).filter(Boolean)
  const checks = {
    length: words.length >= 45 && words.length <= 220,
    opening: sentences[0]?.trim().split(/\s+/).length <= 28,
    example: /\b(for example|for instance|when|project|situation)\b/i.test(answer),
    contribution: /\bI (designed|created|tested|measured|identified|documented|led|built|revised|investigated|developed)\b/i.test(answer),
    result: /\b(result|outcome|reduced|improved|prevented|enabled|learned|more repeatable|fewer)\b/i.test(answer),
    reframe: /\b(Reframe|DFMA|factory|field|buildability|modular)\b/i.test(answer),
    filler: (answer.match(filler) ?? []).length <= 2,
    detail: words.length <= 220,
    supported: !unsupported.test(answer),
    positive: !negative.test(answer),
    ownership: !(lower.match(/\bwe\b/g)?.length && !(lower.match(/\bi\b/g)?.length))
  }
  const weights = [12,8,12,12,12,12,8,6,6,6,6]
  const score = Math.round(Object.values(checks).reduce((sum,ok,i)=>sum+(ok?weights[i]:0),0))
  const feedback:string[] = []
  if (!checks.opening) feedback.push('Lead with the main point sooner.')
  if (!checks.contribution) feedback.push('Clarify what you personally did.')
  if (!checks.result) feedback.push('Add a measurable or observable result.')
  if (!checks.reframe) feedback.push('Explain why this matters to Reframe.')
  if (!checks.length || !checks.detail) feedback.push(words.length < 45 ? 'Add one specific piece of evidence.' : 'Remove unnecessary setup or technical detail.')
  if (!checks.supported) feedback.push('Avoid claiming a result you cannot verify.')
  if (!checks.ownership) feedback.push('Use “we” only after explaining your contribution.')
  if (!checks.filler) feedback.push('Remove filler so the evidence is easier to hear.')
  return { score, feedback, checks }
}
