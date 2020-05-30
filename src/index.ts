import './root.scss'
import Vue from "vue"

import App from './App.vue'
import store from './store'

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  store,
})
