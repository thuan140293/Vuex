import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home', path: '/', component: () => import('../views/homePage.vue'), display: 'Home'
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/loginPage.vue'), display: 'Login'
    },
  ]
});