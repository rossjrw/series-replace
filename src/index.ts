import './root.scss'
import Vue from "vue"
import Vuex from "vuex"
import App from './App.vue'

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
    update_find(state, value) {
      state.rules[0].find = value
    },
    update_replacement(state, value) {
      state.rules[0].replacement = value
    }
  }
})

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  store,
})
