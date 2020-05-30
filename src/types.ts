export interface State {
  inputText: string
  outputText: string
  rules: Array<Rule>
}

export interface Rule {
  find: string
  replacement: string
  id: number
}

export interface RuleUpdate {
  ruleId: number
  value: string
}
