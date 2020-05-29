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
  }
})

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  store,
})
