import Vue from "vue"
import Vuex from "vuex"
import { max } from "lodash"

import { State, Rule } from './types'
import { execute } from './replace'

Vue.use(Vuex)

function pickNewRuleId(rules: Rule[]): number {
  if (rules.length) {
    return max(rules.map(rule => rule.id)) + 1
  } else {
    return 0
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    inputText: "",
    outputText: "",
    rules: []
  } as State,
  mutations: {
    executeRules(state: State) {
      state.outputText = execute(state.inputText, state.rules)
    },
    modifyInput(state: State, newInput: string) {
      state.inputText = newInput
    },
    addRule(state: State, rule: Rule) {
      state.rules.push(rule)
    },
    setRule(state: State, rule: Rule) {
      const index: number = state.rules.findIndex(
        oldRule => oldRule.id === rule.id
      )
      Vue.set(state.rules, index, rule)
    },
    removeRule(state: State, ruleId: number) {
      state.rules = state.rules.filter(rule => rule.id !== ruleId)
    },
    replaceAllRules(state: State, rules: Rule[]) {
      state.rules = rules
    }
  },
  actions: {
    initialRules(
      { commit },
      { rules, inputText }: { rules: Rule[], inputText: string }
    ) {
      // New list of rules
      commit("modifyInput", inputText)
      for (const rule of rules) {
        commit("addRule", rule)
      }
      commit("executeRules")
    },
    updateRule({ commit }, rule: Rule) {
      // Update the "find" field of a given rule
      commit("setRule", rule)
      commit("executeRules")
    },
    updateInputText({ commit }, inputText: string) {
      // Update the input text
      commit("modifyInput", inputText)
      commit("executeRules")
    },
    addRule({ commit, state }, { find="", replace="" }:
              { find: string, replace: string }) {
      // Add a new rule
      const id: number = pickNewRuleId(state.rules)
      commit("addRule", { find, replace, id })
      commit("executeRules")
    },
    removeRule({ commit }, ruleId: number) {
      // Remove a given rule
      commit("removeRule", ruleId)
      commit("executeRules")
    },
    updateAllRules({ commit }, rules: Rule[]) {
      // Update list order via Vue.Draggable
      commit("replaceAllRules", rules)
      commit("executeRules")
    }
  }
})
