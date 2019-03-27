import Vue from 'vue'
import Calculator from './Calculator.vue'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter)

new Vue({
  el: '#calculator',
  router: router,
  render: h => h(Calculator)
})
