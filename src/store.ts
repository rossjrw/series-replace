import Vue from "vue"
import Vuex from "vuex"
import { v4 as uuid } from "uuid"

import { State, Rule, RuleUpdate } from "./types"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    inputText: "",
    outputText: "",
    rules: [
      {
        id: 0,
        find: "One",
        replacement: "",
      },
      {
        id: 1,
        find: "Two",
        replacement: "",
      },
    ]
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
    },
    updateList(state: State, payload) {
      // Update list order via Vue.Draggable
      state.rules = payload
    }
  }
})
