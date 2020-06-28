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
      name: 'eventListPage', path: '/event', component: () => import('../views/eventListPage.vue'), display: 'Danh Sách sự kiện'
    },
    {
      name: 'blogListPage', path: '/blog', component: () => import('../views/blogListPage.vue'), display: 'Danh Sách bài viết'
    },
    {
      name: 'eventAdminPage', path: '/admin/event/:id?', component: () => import('../views/eventAdminPage.vue'), display: 'Tạo sự kiện'
    },
    {
      name: 'Login', path: '/login', component: () => import('../views/loginPage.vue'), display: 'Login'
    },
  ]
});
