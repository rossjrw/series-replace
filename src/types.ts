export interface State {
  inputText: string
  outputText: string
  rules: Array<Rule>
}

export interface Rule {
  find: string
  replace: string
  enabled: boolean
  id: number
}
