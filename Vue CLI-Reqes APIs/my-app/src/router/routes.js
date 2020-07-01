import Vue from "vue";
import Router from "vue-router";
// import auth from "../middleware/auth"

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      name: 'homePage', path: '/', component: () => import('../views/homePage.vue'), display: 'Trang chủ'
    },
    {
      name: 'detailPage', path: '/detail/:id', component: () => import('../views/detailPage.vue'), display: 'Chi tiết'
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/logInPage.vue'), display: 'Đăng nhập'
    },
  ]
});
