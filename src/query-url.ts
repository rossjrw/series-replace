import { parse } from 'query-string'
import pick from 'lodash/pick'

import { Rule } from './types'

export function getDataFromUrl(loc: string): [Rule[], string?] {
  // Get the data state from the URL
  const parsed_url = pick(parse(loc), ["i", "f", "r"])
  return [[], "hello!"]
}

export function saveDataToUrl() {

}
