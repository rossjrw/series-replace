import { Rule } from './types'

export function execute(inputText: string, rules: Rule[]): string {
  let outputText: string
  for (let rule of rules) {
    outputText = inputText.replace(
      new RegExp(rule.find, "gm"),
      rule.replacement
    )
  }
  return outputText
}
