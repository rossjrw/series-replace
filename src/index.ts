import './root.scss'
import Vue from "vue"
import Vuex from "vuex"
import App from './App.vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    input_text: "",
    output_text: "",
    rules: [],
  },
  strict: process.env.NODE_ENV !== 'production'
})

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  store,
})
