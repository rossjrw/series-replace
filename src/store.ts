import Vue from "vue"
import Vuex from "vuex"
import { v4 as uuid } from "uuid"

import { State, RuleList, Rule, RuleUpdate } from "./types"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    inputText: "",
    outputText: "",
    rules: {
      "0000-0000-0000-0000": {
        find: "",
        replacement: "",
        order: 0,
      }
    },
  } as State,
  mutations: {
    updateFind(state: State, { ruleId, value }: RuleUpdate) {
      // Update the "find" field of a given rule
      state.rules[ruleId].find = value
    },
    updateReplacement(state: State, { ruleId, value }: RuleUpdate) {
      // Update the "replace" field of a given rule
      state.rules[ruleId].replacement = value
    },
    addRule(state: State) {
      // Add a new rule
    },
    removeRule(state: State, ruleId: string) {
      // Remove a given rule
    }
  }
})
