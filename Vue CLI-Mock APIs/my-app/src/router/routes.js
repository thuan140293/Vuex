import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'homePage', path: '/', component: () => import('../views/homePage.vue'), display: 'Trang chủ'
    },
    {
      name: 'personal', path: '/personal/:id?', component: () => import('../views/personalPage.vue'), display: 'Trang chi tiết'
    }
  ]
});
