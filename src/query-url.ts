import { parse } from "query-string"
import { defaults, castArray, mapValues, pick, zip } from "lodash"

import { Rule } from './types'

interface ParsedUrl {
  i: string[]
  f: string[]
  r: string[]
}

export function getDataFromUrl(loc: string): [Rule[], string] {
  // Get the data state from the URL
  let parsed: ParsedUrl = mapValues(
    pick(parse(loc), ["i", "f", "r"]),
    value => castArray(value)
  )
  defaults(parsed, {i: [""], f: [""], r: [""]})
  const inputText: string = parsed.i.join("\n")
  const rules: Rule[] = zip(parsed.f, parsed.r).map(
    (fr, index) => {
      return {
        find: fr[0] || "",
        replacement: fr[1] || "",
        id: index
      }
    }
  )
  console.log(rules, inputText)
  return [rules, inputText]
}

export function saveDataToUrl() {

}
