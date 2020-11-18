import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    { path: '/', name: 'homePage', component: () => import('../views/homePage.vue'), display: 'Trang chủ' }
  ]
})
