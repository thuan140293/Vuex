import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home', path: '/', component: () => import('../views/homePage.vue'), display: 'Home'
    },
    {
      name: 'Register', path: '/register', component: () => import('../views/registerPage.vue'), display: 'Register'
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/loginPage.vue'), display: 'Login'
    },
  ]
});