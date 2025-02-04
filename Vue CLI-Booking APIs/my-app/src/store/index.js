import Vue from 'vue'
import Vuex from 'vuex'
import eventListPageModule from '../modules/eventListPage/_store';
import blogListPageModule from '../modules/blogListPage/_store';
import eventAdminModule from '../modules/eventAdminPage/_store';
import homeModule from '../modules/homePage/_store';
import loginModule from '../modules/loginPage/_store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $_eventListPage: eventListPageModule,
    $_blogListPage: blogListPageModule,
    $_eventAdminPage: eventAdminModule,
    $_homePage: homeModule,
    $_logInPage: loginModule,
  },
})