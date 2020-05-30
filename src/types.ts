export interface State {
  inputText: string
  outputText: string
  rules: RuleList
}

export interface RuleList {
  [key: string]: Rule
}

export interface Rule {
  find: string
  replacement: string
  order: number
}

export interface RuleUpdate {
  ruleId: string
  value: string
}
