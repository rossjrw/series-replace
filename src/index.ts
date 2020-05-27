import './root.scss';
import Vue from "vue";
import App from './App.vue';

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
})
