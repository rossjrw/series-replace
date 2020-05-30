import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    input_text: "",
    output_text: "",
    rules: [
      {
        find: "",
        replacement: "",
      }
    ]
  },
  mutations: {
    updateFind(state, { value, ruleIndex }) {
      // Update the "find" field of a given rule
      state.rules[0].find = value
    },
    updateReplacement(state, { value, ruleIndex }) {
      // Update the "replace" field of a given rule
      state.rules[0].replacement = value
    },
    addRule(state) {
      // Add a new rule
    },
    removeRule(state, ruleIndex) {
      // Remove a given rule
    }
  }
})

export default store
