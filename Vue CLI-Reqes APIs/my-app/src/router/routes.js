import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: 'homePage', path: '/', component: () => import('../views/homePage.vue'), display: 'Trang chủ'
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/loginPage.vue'), display: 'Login'
    },
  ]
});
