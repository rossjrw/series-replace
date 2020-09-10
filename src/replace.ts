import { Rule } from './types'

export function execute(text: string, rules: Rule[]): string {
  for (const rule of rules) {
    text = text.replace(
      new RegExp(rule.find, "gm"),
      rule.replace.replace(/\\n/g, "\n")
    )
  }
  return text
}
