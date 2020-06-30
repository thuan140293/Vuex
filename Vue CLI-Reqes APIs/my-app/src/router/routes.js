import Vue from "vue";
import Router from "vue-router";
import auth from "../middleware/auth"

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      name: 'homePage', path: '/', component: () => import('../views/homePage.vue'), display: 'Trang chủ', beforeEnter: auth
    },
    {
      name: 'detailPage', path: '/detail/:id', component: () => import('../views/detailPage.vue'), display: 'Chi tiết', beforeEnter: auth
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/logInPage.vue'), display: 'Đăng nhập'
    },
  ]
});
