import { parse, stringify } from "query-string"
import { defaults, castArray, mapValues, pick, zip, zipObject } from "lodash"

import { Rule } from './types'

interface ParsedUrl {
  i: string[]
  f: string[]
  r: string[]
}

interface RulesAndString {
  rules: Rule[]
  inputText: string
}

export function getDataFromUrl(loc: string): RulesAndString {
  // Get the data state from the URL
  const parsed: ParsedUrl = mapValues(
    pick(parse(loc), ["i", "f", "r"]),
    value => castArray(value)
  )
  defaults(parsed, {i: [""], f: [""], r: [""]})
  const inputText: string = parsed.i.join("\n")
  const rules: Rule[] = zip(parsed.f, parsed.r).map(
    (fr, index) => {
      return {
        find: fr[0] ?? "",
        replace: fr[1] ?? "",
        enabled: true,
        id: index
      }
    }
  )
  return {rules, inputText}
}

export function saveDataToUrl(rules: Rule[], inputText?: string): string {
  const f: string[] = rules.map(rule => rule.find)
  const r: string[] = rules.map(rule => rule.replace)
  const i: string | undefined = inputText
  const rulesList = { f, r, i }
  return stringify(rulesList)
}
