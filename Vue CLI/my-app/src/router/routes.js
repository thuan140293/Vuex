import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'eventListPage', path: '/', component: () => import('../views/eventListPage.vue'), display: 'Danh Sách sự kiện'
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/loginPage.vue'), display: 'Login'
    },
  ]
});