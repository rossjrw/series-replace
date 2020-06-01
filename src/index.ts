import './root.scss'
import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import store from './store'
import { getDataFromUrl } from './query-url'

Vue.component('font-awesome-icon', FontAwesomeIcon)

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  store,
  created() {
    getDataFromUrl()
  }
})
