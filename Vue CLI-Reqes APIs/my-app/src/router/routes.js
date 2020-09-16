import Vue from "vue";
import Router from "vue-router";
import auth from "../middleware/auth"

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      name: 'homePage', path: '/', component: () => import('../views/homePage.vue'), display: 'Trang chủ', beforeEnter: auth
    },
    {
      name: 'detailPage', path: '/detail/:id', component: () => import('../views/detailPage.vue'), display: 'Chi tiết',  beforeEnter: auth
    },
    {
      name: 'login', path: '/login', component: () => import('../views/loginPage.vue'), display: 'Đăng nhập', meta: { allowAnonymous: true }
    },
    {
      name: 'pagination', path: '/pagination', component: () => import('../views/paginationExample.vue'), display: 'Pagination', beforeEnter: auth
    },
  ]
});
