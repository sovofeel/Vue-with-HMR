import Vue from 'vue'

Vue.config.devtools = false

import App from './App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
